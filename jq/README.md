# jq tool

https://earthly.dev/blog/jq-select/
https://www.youtube.com/results?search_query=szymon+jq

https://www.brimdata.io/blog/introducing-zq/


```
echo '{ "hello": "world", "array": [1,2,3], "nested": { "field1": "val1" } }' > test.json
```

```
➜  jq  cat test.json | jq .
{
  "hello": "world",
  "array": [
    1,
    2,
    3
  ]
}
➜  jq  cat test.json | jq .hello
"world"
➜  jq  cat test.json | jq -r .hello
world
➜  jq  cat test.json | jq  .nested.field1
"val1"
```