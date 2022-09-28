This example shows how configure nginx to serve https with self signed certificate


1. generate CA cert (use passphrase: root)

```
mdkir certs && cd certs
openssl genrsa -des3 -out ca.key 4096
openssl req -new -x509 -days 3650 -key ca.key -out ca.crt
```

2. generate Server cert

```
openssl genrsa -out dz.com.key 4096
openssl req -new -key dz.com.key -out dz.com.csr
openssl x509 -req -days 365 -sha256 -in dz.com.csr -CA ca.crt -CAkey ca.key -set_serial 1 -out dz.com.crt
```

3. start nginx in docker

```
docker run -it --rm -d -p 8443:443 --name web \
    -v $(pwd)/conf.d:/etc/nginx/conf.d \
    -v $(pwd)/certs:/etc/nginx/certs \
    -v $(pwd)/site-content:/usr/share/nginx \
    nginx
```

4.
```
curl -k -v https://dz.com:8443
curl -k -v http://localhost:8443
```
