# yq utility examples

### select from array nodes by condition

deployment-manifest.yml:
```
applications:
- name: mcs-devops
  version: "1.2"
  repo: finance/marketplace/experiments/mcs-devops
  envs:
  - dev
  services: []
- name: mcs-devops-2
  version: v0.12.0
  repo: finance/marketplace/experiments/mcs-devops-2
  envs:
  - dev
  services: []
- name: authorization-service
  version: v0.0.11
  repo: finance/marketplace/authorization/authorization-service
  envs: []
  services: [mongo, rabbit, redis]
```

```
yq  '(.applications.[] | select(.name == "mcs-devops"))' deployment-manifest.yml
```


### update attribute in nodes by condition

```
yq '(.applications.[] | select(.name == "mcs-devops")).version = "1.3"' deployment-manifest.yml
```

same inplace
```
yq -i '(.applications.[] | select(.name == "mcs-devops")).version = "1.3"' deployment-manifest.yml
```
