# redis


redis-cli -h 10.3.18.32 -p 43615 -a xxxx dbsize

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
select 0
SET fincian_620752fa-6d1f-4a25-a249-4b28ce9cd26f "{\"userId\":\"957615cd-70d5-473e-8407-ca062277b327\",\"finAuth\":true}" EX 600
```


## Info

```
info memory
dbsize
```

## Configuration

```
requirepass foobared
```