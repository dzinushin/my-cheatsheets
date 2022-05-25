


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