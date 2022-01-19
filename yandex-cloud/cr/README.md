cr.yandex
https://cloud.yandex.ru/docs/container-registry/

Способы авторизации в Yandex CR:

```
docker login --username oauth cr.yandex
docker login --username iam cr.yandex
docker login --username json_key cr.yandex
```

Roles:
  viewer/editor/admin

  Container.registry.puller
  Container.registry.pusher


cr.yandex/yc/metadata-token-docker-helper:0.2

yc container registry configure-docker