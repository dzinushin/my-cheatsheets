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


### example use kaniko in yc in Gitlab pipeline

https://github.com/yandex-cloud/yc-architect-solution-library/blob/main/demos/gitops-argo-crossplane/02-argocd/app/.gitlab-ci.yml

```
build:
  stage: build
  image:
    name: gcr.io/kaniko-project/executor:debug
    entrypoint: [""]
  before_script:
    - mkdir -p /kaniko/.docker
    - echo "{\"auths\":{\"${CI_REGISTRY}\":{\"auth\":\"$(printf "%s:%s" "${CI_REGISTRY_USER}" "$(echo -n ${CI_REGISTRY_PASSWORD} | base64 -d)" | base64 | tr -d '\n')\"}}}" > /kaniko/.docker/config.json
  script:
    - >-
      /kaniko/executor
      --context "${CI_PROJECT_DIR}"
      --dockerfile "${CI_PROJECT_DIR}/Dockerfile"
      --destination "${CI_REGISTRY}/${CI_PROJECT_NAMESPACE}/${CI_PROJECT_NAME}:${CI_COMMIT_REF_SLUG}.${CI_COMMIT_SHORT_SHA}.${CI_PIPELINE_ID}"
```