This example shows how configure nginx to serve https with self signed certificate


1. generate CA using mkcert

2. start app server
```
node server.js
```

3. start nginx in docker

```
docker run -it --rm -p 443:443 --name web \
    -v $(pwd)/conf.d:/etc/nginx/conf.d \
    -v $(pwd)/certs:/etc/nginx/certs \
    nginx
```

4.
```
curl -v https://fin.live
```
