https://yestin.dev/mutual-authentication-with-mtls/

Mutual TLS example

1. generate CA cert (use passphrase: root)

```
mdkir certs && cd certs
# Root CA key
openssl genrsa -aes256 -out ca.key 2048
# Generate the certificate without using a CSR
openssl req -new -x509 -days 365 -key ca.key -out ca.crt
```

2. generate client certificate

```
# Client key and CSR
openssl genrsa -aes256 -out client.key 2048
openssl req -new -key client.key -out client.csr
# Sign the client CSR with CA certificate and key
openssl x509 -req -days 365 -sha256 -in client.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out client.crt

openssl verify -verbose -CAfile ca.crt client.crt
```

3. generate server certificate

```
# Server key and certificate sign request (CSR)
openssl genrsa -aes256 -out server.key 2048
openssl req -new -key server.key -out server.csr
# Sign the CSR with the CA certificate and key
openssl x509 -req -days 365 -sha256 -in server.csr -CA ca.crt -CAkey ca.key -set_serial 1 -out server.crt```

4. start nginx

```
docker run -it --rm -d -p 8443:443 --name web \
    -v $(pwd)/conf.d:/etc/nginx/conf.d \
    -v $(pwd)/certs:/etc/nginx/certs \
    -v $(pwd)/site-content:/usr/share/nginx \
    nginx
```

5. check client access without client cert:

```
curl --cacert certs/ca.crt https://dzmtls.com:8443
```

6. check client access with client cert:

```
curl \
  -v --cacert certs/ca.crt \
  --key certs/client.key \
  --cert certs/client.crt:root \
  https://dzmtls.com:8443
```
