


### view only headers
```
curl -I https://foo.com
curl -I v https://foo.com

```

### post JSON from file
```
curl -X POST -H "Content-Type: application/json" -d @FILENAME DESTINATION
```

### post with authorization
```
curl -X POST \
   https://uaa.dev.cf.cian.tech/oauth2/token \
   -u <user>:<password> \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d 'grant_type=client_credentials&scope=bank.read bank.decision bank.remove openid'
```

```
export BASIC_AUTH_USER=bank-psb
export BASIC_AUTH_PASSWORD=password
export AUTH=$(echo -ne "$BASIC_AUTH_USER:$BASIC_AUTH_PASSWORD" | base64)

curl \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --header "Authorization: Basic $AUTH" \
  --request POST \
  --data  'grant_type=client_credentials&scope=bank.read bank.decision bank.remove openid' \
  https://uaa.dev.cf.cian.tech/oauth2/token

```

### how to curl an endpoint protected by mutual tls (mtls) (from https://downey.io/notes/dev/curl-using-mutual-tls/)

```
curl --cacert ca.crt \
     --key client.key \
     --cert client.crt \
     https://server.com
```