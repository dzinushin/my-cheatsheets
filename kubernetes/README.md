
https://github.com/ramitsurana/awesome-kubernetes
https://kubernetes.io/ru/docs/reference/kubectl/cheatsheet/



# kubectl

```
kubectl <command> <type> <name> <flags>
```

# run container from image

```
kubectl run --rm -it --image=centosadmin/utils test -- bash
```

### how get info

k describe <pod | job | whatever>
k explain pod | pod.spec | ...
k get pod <podname> -o yaml


### config

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

### namespaces

kubectl get namespaces


### pods

kubectl get pods --all-namespaces|-A



### secrets and configmaps

kubectl get secret postgresql -o go-template='{{range $k,$v := .data}}{{"### "}}{{$k}}{{"\n"}}{{$v|base64decode}}{{"\n\n"}}{{end}}' --namespace=otp-service-40-production
kubectl get configmaps postgresql -o go-template='{{range $k,$v := .data}}{{"### "}}{{$k}}{{"\n"}}{{$v}}{{"\n\n"}}{{end}}' --namespace=otp-service-40-production


kubectl get secret postgresql --template={{.data.password}}
kubectl get secret postgresql -o json --namespace=otp-service-40-production


### proxy
kubectl proxy --port=8080


### ssh
kubectl exec --stdin --tty gosuslugi-profile-review-567f8b97b9-nqhdp -- /bin/bash
kubectl exec --stdin --tty agreements-service-6586df9dfc-j747w --namespace=agreements-service-7-production -- /bin/bash
kubectl exec --stdin --tty shell-demo -- /bin/bash


### logs

kubectl logs --namespace=agreements-service-7-production agreements-service-fcbf9466c-942ch -f
kubectl logs --namespace=otp-service-40-production  -l app=otp-service -c otp-service -f

### how delete namespace

1. delete deployment
2. delete containers
3. delete namespace


###

k describe <obj>
k explain pod
k explain pod.spec

