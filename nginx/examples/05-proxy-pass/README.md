```
docker run -it --rm -d -p 8080:8080 --name proxy \
    -v $(pwd)/conf.d:/etc/nginx/conf.d \
    nginx
```

```
curl -s https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400 | jq
curl -s http://localhost:8080/json?lat=36.7201600&lng=-4.4203400 | jq
```
