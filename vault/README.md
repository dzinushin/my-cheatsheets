*** Vault

* vault cli

start vault server in dev mode
```
vault server -dev
```

env vars
```
VAULT_ADDR
VAULT_TOKEN
```

files
```
~/.vault-token # created after vault login, analogue of $VAULT_TOKEN

```

login methods
```
export VAULT_ADDR=https://127.0.0.1:8200

vault login -method=userpass username=sdsd
vault login -method=ldap username=<username>
vault login token="aaa"
```

get token via JWT 
https://habr.com/ru/company/nixys/blog/512754/
```
vault write -field=token auth/jwt/login role=myproject-staging jwt=$CI_JOB_JWT

```
or same via REST:
```
curl -XPOST -d "{\"jwt\": \"${CI_JOB_JWT}\", \"role\": \"fin-gitlab\"}" ${VAULT_ADDR}/v1/auth/jwt/login | jq -r .auth.client_token
```


```
vault kv list finance-internal/sms_center/
vault kv get finance-internal/sms_center/send
vault kv get -format=json finance-internal/sms_center/send
vault kv get finance-internal/kuber/service-accounts/prod/gitlab-cicd
vault kv get -field=password finance-internal/sms_center/send
```

```
vault read -format=json finance-internal/data/kuber/service-accounts/prod/gitlab-cicd
```


```
vault kv put secrets/tokens token1=aaa token2=bbb
vault kv delete secrets/tokens
vault kv destroy secrets/tokens
```