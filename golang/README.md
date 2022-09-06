
https://go.dev/

https://gobyexample.com/
https://golangbyexample.com/

https://wdesert.notion.site/Let-My-Gophers-Go-29d7e8fe712141cf8ac39b84350f0db7

https://github.com/Aristat/golang-example-app

https://github.com/avelino/awesome-go



how start module

```
mkdir firstgomodule
cd firstgomodule

go mod init dz/playground/firstmodule # go.mod file created
touch main.go
```

how add dependency
1. add import statement in code
2. run ```go mod tidy -v```
3. optionally run ```go mod vendor -v``` for vendor deps



Go modules


how add external package to project

```
go get github.com/bitfield/script
```
add import
```
import "github.com/bitfield/script"
```

how update external package version
```
go get github.com/bitfield/script
```


Standard Go Project Layout

https://github.com/golang-standards/project-layout