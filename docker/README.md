# Docker

## terminology and defintions

### Volumes
docker volumes used to persist data
for persisting data can be used or volumes or mounts on host machine fs



## concepts

containers, images, volumes, networks
configs, secretss

## commands

### work with images

search by name
```
docker search ubuntu
```
```
docker images 
  or
docker image ls

docker pull {image name} 
  or
docker image pull {image name}
```

### docker run

run simple interactive container
```
docker run --rm -ti alpine
```
run daemon container and run command in container
```
docker container run --name www -d -p 8000:80 nginx:1.16
docker exec -ti www ls -la
docker exec -ti www /bin/bash
```

run container with volume myvolume (will be created automatically)
```
docker run --rm -ti -v myvolume:/usr/local/data alpine
```




```
docker run \
  [--rm] \
  [--name mydocker] \
  [-p 9200:9200] \
  [-v [host directory | volume name]:[container directory]] \
  [--network [network-name]] \
  [-e "somevar.value=somevalue"]
  [--ulimit memlock=-1:-1]
  {docker-image-name}
  [cmd]
```

### docker containers

```
docker container ls
docker container prune
```

### docker network

```
docker network create
docker network ls
docker network prune
```

### docker volume

```
docker volume create
docker volume ls
docker volume inspect
docker volume prune
docker volume rm
```

### system

```
docker system info
docker system df
docker system prune [--volumes]
```


## Some special staff

get the shell on the host - access to Docker VM on Mac OS 
see https://medium.com/lucjuggery/a-container-to-access-the-shell-of-the-host-2c7c227c64e9
```
docker run --privileged --pid=host -it alpine:3.8 \
nsenter -t 1 -m -u -n -i sh
```