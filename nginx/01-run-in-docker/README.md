

Simple example how run locally nginx like simple web server with provided content

```
docker run -it --rm -d -p 8080:80 --name web -v $(pwd)/site-content:/usr/share/nginx/html nginx
```