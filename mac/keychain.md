

```
wifi-password
```
read password for current WiFi network

# Keychain GUI

```
keychain-access
```


# Security cmd line utility

```
security
security list-keychains
```

## Work with certificates

```

security find-certificate -c "certificate name"

# To import a trusted certificate use the terminal command
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain <certificate>

sudo security delete-certificate -c "certificate name"
```

## Work with passwords

store generic passwords in keychain
```
sudo security find-internet-password  -g -a "zinushin@gmail.com"
security add-generic-password -a <username> -s <service> -w <password>
password=$(security find-generic-password -a <username> -s <service> -w)
```

```
security add-generic-password -a user1 -s chatgpt-api -w "some-value"
security find-generic-password -a user1 -s chatgpt-api -w
export OPENAI_API_KEY=$(security find-generic-password -a user1 -s chatgpt-api -w)
```
