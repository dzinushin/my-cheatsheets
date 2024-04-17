

```
wifi-passoword
```
read password for current WiFi network


cmd line utility:
```
security
security list-keychains
sudo security find-internet-password  -g -a "zinushin@gmail.com"
```

To import a trusted certificate use the terminal command
```
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain <certificate>
```

store generic passwords in keychain
```
security add-generic-password -a <username> -s <service> -w <password>
password=$(security find-generic-password -a <username> -s <service> -w)
```

```
security add-generic-password -a user1 -s chatgpt-api -w "some-value"
security find-generic-password -a user1 -s chatgpt-api -w
export OPENAI_API_KEY=$(security find-generic-password -a user1 -s chatgpt-api -w)
```
