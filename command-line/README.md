
https://github.com/jlevy/the-art-of-command-line/
https://github.com/herrbischoff/awesome-macos-command-line



***

```
➜  echo file{1..10}.json
file1.json file2.json file3.json file4.json file5.json file6.json file7.json file8.json file9.json file10.json
```

*** xargs

```
➜  touch json1.json json2.json
➜  ls *json | xargs -I@ echo handling @
handling json1.json
handling json2.json
```

create 100 empty files with names file001.txt ... file100.txt

```
echo file{001..100}.txt | sed -e 's/ /\n/g' | xargs -I@ touch @
```
or
```
echo file{001..100}.txt | xargs -n1 -I{} touch {}
```

delete 100 file
```
echo file{001..100}.txt | xargs -n1 -I@ rm @
```
