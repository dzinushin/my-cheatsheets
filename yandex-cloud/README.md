

Yandex.Cloud CLI aka yc


configuration
```
~/.config/yandex-cloud

```

```
yc config profile list
```

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


### service accounts

create
```
yc iam service-account create --name <sa_name> --folder-name <folder>
```

add role in folder
```
yc resource-manager folder add-access-binding <folder> --role admin --service-account-name <sa_name>
```