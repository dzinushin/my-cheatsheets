

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
