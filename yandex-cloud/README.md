

Yandex.Cloud CLI aka yc


examples
```
yc resource-manager cloud list
yc resource-manager folder list
```

```shell
yc managed-postgresql cluster list
yc managed-postgresql hosts list --cluster-name=fin-dev-01

yc managed-postgresql database list --cluster-name=fin-dev-1
yc managed-postgresql user list --cluster-name "fin-dev-1"


yc managed-postgresql user create $CI_PROJECT_NAME --cluster-name "$POST_CLUSTER"  --password $USER_PASSWORD

yc managed-postgresql database delete agreements-service --cluster-name=fin-dev-1
yc managed-postgresql user delete agreements-service --cluster-name=fin-dev-1
```

