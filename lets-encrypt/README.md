* How generate manually LE certificate

```
DOMAIN=fin.live
CERTBOT_WORKDIR=~/lets-encrypt
mkdir -p CERTBOT_WORKDIR
certbot certonly  -d $DOMAIN -d "*.$DOMAIN" \
  --preferred-challenges=dns \
  --manual \
  --config-dir $CERTBOT_WORKDIR --work-dir $CERTBOT_WORKDIR --logs-dir $CERTBOT_WORKDIR
```