
add to ```\etc\hosts```:

```
127.0.0.1 dz.com
127.0.0.1 dz1.com
```

```
docker run -it --rm -d -p 8080:80 --name web \
	-v $(pwd)/conf.d:/etc/nginx/conf.d \
	-v $(pwd)/site-content:/usr/share/nginx \
	nginx
```

```
curl dz.com:8080
curl dz1.com:8080
curl localhost:8080
```