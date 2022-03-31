


secret.yml:

```
apiVersion: v1
kind: Secret
metadata:
  name: db-credentials
type: Opaque
data:
  user: bWlsaW5kYQ==
  password: dGVzdEAx
```

kubectl create -f secret.yml


deployment.yml:

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: keycloak
  namespace: default
spec:
  replicas: 1
  selector:
    matchLabels:
      service: keycloak
    spec:
      containers:
      - name: keycloak
        image: keycloak:latest
        env:
        - name: DB_VENDOR
          value: postgres
        - name: DB_USER
          valueFrom:
            secretKeyRef:
              name: db-credentials
              key: user
        - name: DB_PASSWORD
          valueFrom:
            secretKeyRef:
              name: db-credentials
              key: password
```  

```
kubectl create secret generic literal-token \
--from-literal user=admin \
--from-literal password="Ex67Hn*9#(jw"
```

kubectl get secrets mongo
k get secrets mongo -o go-template='{{range $k,$v := .data}}{{"### "}}{{$k}}{{"\n"}}{{$v|base64decode}}{{"\n\n"}}{{end}}'