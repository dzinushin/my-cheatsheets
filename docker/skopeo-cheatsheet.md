# Skopeo — шпаргалка (с примерами под Nexus)

Skopeo — CLI для работы с образами и реестрами **без демона и без локального стораджа**. Общается с registry по HTTP(S) API напрямую, оперируя манифестами и слоями. Умеет копировать образ registry → registry, часто вообще не выкачивая слои на диск.

Часть экосистемы `containers/` (та же команда, что делает Podman, Buildah, CRI-O), но самостоятельный инструмент.

---

## Установка

```bash
# RHEL / Fedora / CentOS
sudo dnf install skopeo

# Debian / Ubuntu
sudo apt install skopeo

# macOS
brew install skopeo

# проверка
skopeo --version
```

---

## Транспорты (важно понимать)

Skopeo — это мост между форматами хранения образов. Первый аргумент — откуда, второй — куда, каждый со своим «транспортом»:

| Транспорт | Что это |
|---|---|
| `docker://`        | образ в registry (Nexus, Docker Hub, ECR, GHCR …) |
| `oci:path:tag`     | OCI image layout в папке |
| `dir:path`         | «сырой» дамп манифеста и слоёв в папку |
| `docker-archive:`  | tar, как `docker save` |
| `containers-storage:` | локальный сторадж Podman/Buildah |

---

## Аутентификация в Nexus

Skopeo читает те же креды, что docker/podman (`~/.docker/config.json` или `$XDG_RUNTIME_DIR/containers/auth.json`).

```bash
# Логин в Docker-репозиторий Nexus.
# Хост:порт — это адрес docker-connector'а Nexus (у каждого docker-repo свой порт,
# если используется "repository connector", либо общий порт при path-based routing).
skopeo login nexus.mycompany.local:8082 -u <user> -p '<password>'

# Логин с вводом пароля из stdin (безопаснее для CI)
echo "$NEXUS_PASSWORD" | skopeo login nexus.mycompany.local:8082 -u "$NEXUS_USER" --password-stdin

# Разлогиниться
skopeo logout nexus.mycompany.local:8082
```

> В Nexus обычно три типа Docker-репозиториев:
> - **hosted** — ваши собственные образы (сюда пушим);
> - **proxy** — кэширующий прокси к Docker Hub / внешним registry (отсюда тянем публичные);
> - **group** — объединяет несколько репозиториев за одним адресом (обычно read-only, для pull).
>
> Пушить (`copy` в `docker://`, `delete`) можно только в **hosted**.

---

## Копирование образов (`skopeo copy`)

```bash
# Публичный образ (через Nexus proxy) -> в ваш hosted-репозиторий (зеркалирование)
skopeo copy \
  docker://nexus.mycompany.local:8082/docker-proxy/library/nginx:1.27 \
  docker://nexus.mycompany.local:8082/docker-hosted/mirror/nginx:1.27

# Напрямую с Docker Hub -> в Nexus hosted
skopeo copy \
  docker://docker.io/library/redis:7.4 \
  docker://nexus.mycompany.local:8082/docker-hosted/mirror/redis:7.4

# Копировать ВЕСЬ multi-arch манифест (amd64 + arm64 + ...), а не только текущую платформу
skopeo copy --all \
  docker://docker.io/library/alpine:3.20 \
  docker://nexus.mycompany.local:8082/docker-hosted/mirror/alpine:3.20

# Промоушен между окружениями по digest (гарантированно тот же образ, без пересборки)
skopeo copy \
  docker://nexus.mycompany.local:8082/docker-dev/app@sha256:abc123... \
  docker://nexus.mycompany.local:8082/docker-prod/app:release-2026.07

# Отдельные креды для источника и приёмника (напр. Docker Hub -> Nexus)
skopeo copy \
  --src-creds "$HUB_USER:$HUB_TOKEN" \
  --dest-creds "$NEXUS_USER:$NEXUS_PASSWORD" \
  docker://docker.io/library/postgres:16 \
  docker://nexus.mycompany.local:8082/docker-hosted/mirror/postgres:16
```

### Оффлайн / air-gapped перенос через архив

```bash
# 1. На машине с интернетом: выгрузить образ в OCI-папку
skopeo copy --all docker://docker.io/library/nginx:1.27 oci:./nginx-oci:1.27

# (перенести папку/архив на закрытый контур)

# 2. На закрытом контуре: залить в Nexus
skopeo copy --all oci:./nginx-oci:1.27 \
  docker://nexus.mycompany.local:8082/docker-hosted/mirror/nginx:1.27
```

---

## Инспекция без скачивания (`skopeo inspect`)

```bash
# Манифест, теги, лейблы, дата, архитектуры — без pull образа
skopeo inspect docker://nexus.mycompany.local:8082/docker-hosted/app:v1

# Конфиг образа: entrypoint, env, labels
skopeo inspect --config docker://nexus.mycompany.local:8082/docker-hosted/app:v1

# Получить чистый digest (удобно для скриптов/пиннинга)
skopeo inspect --format '{{.Digest}}' docker://nexus.mycompany.local:8082/docker-hosted/app:v1

# Список всех тегов репозитория
skopeo list-tags docker://nexus.mycompany.local:8082/docker-hosted/app

# Посмотреть, какие платформы есть в multi-arch образе
skopeo inspect --raw docker://docker.io/library/alpine:3.20 | jq '.manifests[].platform'
```

---

## Удаление и очистка (`skopeo delete`)

```bash
# Удалить конкретный тег в hosted-репозитории Nexus
skopeo delete docker://nexus.mycompany.local:8082/docker-hosted/app:old-tag
```

> В Nexus реальное освобождение места происходит после запуска задач
> **Admin → System → Tasks**: "Docker - Delete unused manifests and images"
> и последующего "Cleanup / Compact blob store". `skopeo delete` убирает ссылку на тег,
> но блобы удаляются штатной уборкой Nexus.

Пример скриптовой чистки старых тегов:

```bash
REPO="docker://nexus.mycompany.local:8082/docker-hosted/app"
# оставить последние 10 тегов, остальные удалить (пример логики — адаптируйте под свою схему тегов)
for tag in $(skopeo list-tags "$REPO" | jq -r '.Tags[]' | sort -V | head -n -10); do
  echo "deleting $tag"
  skopeo delete "$REPO:$tag"
done
```

---

## Массовая синхронизация (`skopeo sync`)

Зеркалирование целых репозиториев — удобно для наполнения Nexus набором базовых образов.

```bash
# Один репозиторий Docker Hub -> Nexus hosted
skopeo sync --src docker --dest docker \
  docker.io/library/redis \
  nexus.mycompany.local:8082/docker-hosted/mirror

# Пакетно по YAML-файлу
skopeo sync --src yaml --dest docker \
  images.yaml \
  nexus.mycompany.local:8082/docker-hosted/mirror
```

`images.yaml`:

```yaml
docker.io:
  images:
    library/nginx:
      - 1.27
      - latest
    library/redis:
      - "7.4"
    library/postgres:
      - "16"
  images-by-tag-regex:
    library/alpine: ^3\.20.*$
```

---

## Полезные флаги

| Флаг | Назначение |
|---|---|
| `--all`                      | копировать/обрабатывать весь multi-arch манифест-лист |
| `--src-creds` / `--dest-creds` | креды отдельно для источника и приёмника |
| `--src-tls-verify=false`     | не проверять TLS источника (self-signed, только внутренние!) |
| `--dest-tls-verify=false`    | то же для приёмника |
| `--retry-times N`            | повторы при сетевых сбоях (важно в CI) |
| `--format v2s2\|oci`         | конвертация формата манифеста при копировании |
| `--format '{{.Digest}}'`     | (у `inspect`) вывод по Go-шаблону |
| `--raw`                      | сырой манифест (для разбора через `jq`) |

> `--tls-verify=false` — только для внутренних/тестовых реестров. Для self-signed
> в проде лучше добавить CA Nexus в доверенные: `/etc/containers/certs.d/nexus.mycompany.local:8082/ca.crt`.

---

## Типовые сценарии в работе

1. **Зеркалирование публичных образов в Nexus** — уход от rate limits Docker Hub и от внешнего интернета на прод-узлах. `skopeo copy --all` / `skopeo sync`.
2. **Промоушен dev → prod по digest** — продвигается ровно тот же образ, без пересборки.
3. **Инспекция без скачивания** — проверить наличие тега/архитектуры/лейблов в CI без затрат трафика и места.
4. **Аудит и очистка** — `list-tags` + `inspect` + `delete`, дальше штатная уборка блобов в Nexus.
5. **Air-gapped перенос** — `copy` в `oci:`/`docker-archive:`, перенос, `copy` обратно в Nexus.
6. **Лёгкий CI-агент** — не нужен запущенный Docker daemon и привилегии на него только чтобы перекинуть образ; skopeo — статический бинарник.

---

## Пример шага в CI (GitLab)

```yaml
mirror-base-images:
  image: quay.io/skopeo/stable:latest
  script:
    - echo "$NEXUS_PASSWORD" | skopeo login nexus.mycompany.local:8082 -u "$NEXUS_USER" --password-stdin
    - skopeo copy --all --retry-times 3
        docker://docker.io/library/nginx:1.27
        docker://nexus.mycompany.local:8082/docker-hosted/mirror/nginx:1.27
```

---

> Замените `nexus.mycompany.local:8082`, имена репозиториев (`docker-hosted`, `docker-proxy`, `docker-dev`, `docker-prod`) и порты на актуальные для вашего Nexus.
