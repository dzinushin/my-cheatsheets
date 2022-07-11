
https://www.sslshopper.com/article-most-common-openssl-commands.html

##General OpenSSL Commands

###Check a Certificate Signing Request (CSR)
```
openssl req -text -noout -verify -in CSR.csr
```
###Check a private key
```
openssl rsa -in privateKey.key -check
```
###Check a certificate
```
openssl x509 -in certificate.crt -text -noout
```
###Check a PKCS#12 file (.pfx or .p12)
```
openssl pkcs12 -info -in keyStore.p12
```

### check two-way (mutuaal) TLS authentication (client) (from https://asciinema.org/a/173370)
```
openssl s_client -connect localhost:7569 \
  -CAfile certs/ca.crt.pem \
  -cert certs/client.crt.pem \
  -key private/client.key.pem \
  -tls1_2 -state -quiet
```

### check two-way (mutuaal) TLS authentication (server)
```
openssl s_server -accept localhost:7569 \
  -CAfile certs/ca.crt.pem \
  -cert certs/client.crt.pem \
  -key private/client.key.pem \
  -Verify 10 -tls1_2 -state -quiet
```
