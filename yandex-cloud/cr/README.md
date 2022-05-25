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

```
yc container registry configure-docker
```

```
curl -H Metadata-Flavor:Google 169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token
```

```
docker login \
       --username iam \
       --password <token> \
       cr.yandex

docker login \
       --username iam \
       --password <> \
       cr.yandex/xxx

```

https://github.com/yandex-cloud/yc-solution-library-for-security/blob/master/secure_ci_cd/secure_ci_cd_with_webinar/free_secure_ci_cd/.push_to_prod_registry.yml



{"auths":{"cr.yandex":{"auth":""}}}