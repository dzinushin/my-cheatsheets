

ZSH modules


https://zsh.sourceforge.io/Doc/Release/Zsh-Modules.html


```
zmodload zsh/net/tcp  # load zsh tcp module
ztcp -v -l 5432 && listenfd5432=$REPLY # start listen on socket, socket fd stored in listenfd5432 env var

...

ztcp -v -c $listenfd5432 # close fd
```