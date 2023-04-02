# redis

## redis cli tool

```
redis-cli -h 10.3.18.47 -p 6379  -a key
redis-cli -h 10.3.18.32 -p 43615 -a xxxx dbsize
redis-cli -u "redis://default:<pwd>@<host|ip>:6379/0""
```


```
KEYS *
```

```
SET key1 value1 EX 60
GET key1
TTL key1
DEL key1

```

## Databases

```
$ cat redis.conf | grep databases
databases 16
```

```
CONFIG GET databases
```

```
select 0
SET fincian_620752fa-6d1f-4a25-a249-4b28ce9cd26f "{\"userId\":\"957615cd-70d5-473e-8407-ca062277b327\",\"finAuth\":true}" EX 600
```


## Info

get info about databases and keys

```
info keyspace
```

```
info memory
dbsize
```

## Configuration

```
requirepass foobared
```

## Delete all keys
```
redis-cli keys '*' | xargs redis-cli del
```