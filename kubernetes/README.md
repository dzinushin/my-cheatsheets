
https://github.com/ramitsurana/awesome-kubernetes
https://kubernetes.io/ru/docs/reference/kubectl/cheatsheet/


### config

kubectl config set-context --current --namespace=agreements-service-7-production

### namespaces

kubectl get namespaces


### pods

kubectl get pods --all-namespaces 



### secrets and configmaps

kubectl get secret postgresql -o go-template='{{range $k,$v := .data}}{{"### "}}{{$k}}{{"\n"}}{{$v|base64decode}}{{"\n\n"}}{{end}}' --namespace=otp-service-40-production
kubectl get configmaps postgresql -o go-template='{{range $k,$v := .data}}{{"### "}}{{$k}}{{"\n"}}{{$v}}{{"\n\n"}}{{end}}' --namespace=otp-service-40-production


kubectl get secret postgresql --template={{.data.password}}
kubectl get secret postgresql -o json --namespace=otp-service-40-production


### proxy
kubectl proxy --port=8080




### ssh
kubectl exec --stdin --tty gosuslugi-profile-review-567f8b97b9-nqhdp -- /bin/bash
kubectl exec --stdin --tty shell-demo -- /bin/bash


### logs

kubectl logs --namespace=agreements-service-7-production agreements-service-fcbf9466c-942ch -f
kubectl logs --namespace=otp-service-40-production  -l app=otp-service -c otp-service -f
