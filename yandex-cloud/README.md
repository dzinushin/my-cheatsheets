

# Yandex.Cloud CLI aka yc


## setup

```
yc init
yc init --federation-id <federation-id>
```

or for already existing configuration (new profile)
```
yc config set token <yandex-cloud-OAuth-token>
yc config set federation-id <FEDERATION-ID>
yc config set service-account-key <path-to-service-account-key-file>
yc config set instance-service-account true
```

set default cloud & folder
```
yc config set cloud-id <>
yc config set folder-id <>
```

check configuration
```
yc config list
```

## configuration
```
~/.config/yandex-cloud

```

### configuration profiles
```
yc config profile list
yc config profile create sa-profile <<-- create and ACTIVATE profile
yc config profile activate <profile>
```

### service account configuration
```
yc config profile create sa-profile
yc config set service-account-key key.json <<-- set for current active profile
yc config set cloud-id <cloud ID>
yc config set folder-id <folder ID>
```

## resource-manager
```
yc resource-manager cloud list
yc resource-manager folder list
```

## iam/service accounts
create
```
yc iam service-account create --name <sa_name> --folder-name <folder>
```
```
yc iam service-account list
yc iam service-account get <sa_id|sa_name>
```

## managed-postgresql
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


add role in folder
```
yc resource-manager folder add-access-binding <folder> --role admin --service-account-name <sa_name>
```

## container clusters (k8s)
```
yc containter cluster list
```

## Container registry

registry
repository
image

```
yc container registry list
yc container repository list [--registry-id <registry-id>]
yc container image list [--registry-id <registry-id>] [--repository-name <repo-name>]
```

