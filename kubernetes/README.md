
https://github.com/ramitsurana/awesome-kubernetes
https://kubernetes.io/ru/docs/reference/kubectl/cheatsheet/



# kubectl

```
kubectl <command> <type> <name> <flags>
```

## kubectl configuration

default location ```${HOME}/.kube```

```
kubectl config view -o \
    jsonpath='{.clusters[*].cluster.server}')
```

## k8s api

### access k8s api 

```
kubectl get --raw /
kubectl get --raw /version
kubectl get --raw /api/v1/nodes | jq
kubectl get --raw /api/v1/namespaces | jq
kubectl get --raw /apis/apps/v1/namespaces/default/deployments/nginx
```
or using proxy
```
kubectl proxy --port=8080 &
curl localhost:8080
```

or using direct server api access
```
APISERVER=$(kubectl config view -o \
    jsonpath='{.clusters[*].cluster.server}')
TOKEN=$(kubectl get secrets \
    -o jsonpath='{.items[?(@.type=="kubernetes.io/service-account-token")].data.token}' \
    | base64 --decode)
curl $APISERVER/version --header "Authorization: Bearer $TOKEN" --insecure
```

# run container from image

```
kubectl run --rm -it --image=centosadmin/utils test -- bash
```

### how get info

```
kubectl cluster-info
k describe <pod | job | whatever>
k explain pod | pod.spec | ...
k get pod <podname> -o yaml
```

### config
```
kubectl config set-cluster slurm.io \
  --server https://172.20.100.2:6443 \ 
  --certificate-authority=/etc/kubernetes/pki/ca.crt \ 
  --embed-certs=true

kubectl config set-credentials username \ 
  --token BFG9000js23..==

kubectl config set-context slurm.io \ 
  --user username \
  --cluster slurm.io \
  --namespace default

kubectl config use-context slurm.io

kubectl config use-context <context name>
kubectl config set-context --current --namespace=agreements-service-7-production
```

### namespaces

```
kubectl get namespaces
```

### pods

kubectl get pods --all-namespaces|-A



### secrets and configmaps

kubectl get secret postgresql -o go-template='{{range $k,$v := .data}}{{"### "}}{{$k}}{{"\n"}}{{$v|base64decode}}{{"\n\n"}}{{end}}' --namespace=otp-service-40-production
kubectl get configmaps postgresql -o go-template='{{range $k,$v := .data}}{{"### "}}{{$k}}{{"\n"}}{{$v}}{{"\n\n"}}{{end}}' --namespace=otp-service-40-production


kubectl get secret postgresql --template={{.data.password}}
kubectl get secret postgresql -o json --namespace=otp-service-40-production


### proxy
```
kubectl proxy --port=8080
```

### port forwarding

```
kubectl port-forward svc/<some-svc> 8443(dst-port):443(src-port) -n <ns>
```


### ssh

```
kubectl exec --stdin --tty gosuslugi-profile-review-567f8b97b9-nqhdp -- /bin/bash
kubectl exec --stdin --tty agreements-service-6586df9dfc-j747w --namespace=agreements-service-7-production -- /bin/bash
kubectl exec --stdin --tty shell-demo -- /bin/bash
kubectl exec -ti centos -- /bin/bash
kubectl exec -it <podname> -- sh
```

### logs

```
kubectl logs --namespace=agreements-service-7-production agreements-service-fcbf9466c-942ch -f
kubectl logs --namespace=otp-service-40-production  -l app=otp-service -c otp-service -f
```

### how delete namespace

1. delete deployment
2. delete containers
3. delete namespace


###

```
k describe <obj>
k explain pod
k explain pod.spec
```

### restart

```
kubectl rollout restart deployment <deployment_name> -n <namespace>
```

### scale

```
kubectl scale deployment <deployment name> -n <namespace> --replicas=3
```