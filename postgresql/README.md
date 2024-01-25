
### psql tool

```
psql -h localhost -p 5432 -U postgres -d postgres -W
```
```
\pset null '<null>'
```

## get info

```
\conninfo
select version();
\set
show all;
```

## work with schema

```
select current_schema;
set schema 'sms';
drop schema "sms" cascade;
```

## 

```
\l - Display database
\c - Connect to database

\d   list tables, views, and sequences
\dn  List schemas
\dt  List tables inside public schemas
\dt  schema1. - List tables inside particular schemas. For eg: 'schema1'.
```


## Transactions

```
\echo :AUTOCOMMIT
\set autocommit off
SHOW default_transaction_isolation;
SHOW TRANSACTION ISOLATION LEVEL;
```

```
begin;
...
commit;
```

## Sequences

```
SELECT last_value FROM sequence_name;
```

## Date and Time

```
select now();
select current_timestamp;
select localtimestamp;

insert into sms_queue(type,phone,text,created_at,updated_at) 
   values('otp','123','text',now(), now())
```


## Timezones

```
show timezone;
select current_setting('timezone');
select * from pg_settings where name = 'TimeZone';
```

```
SET TIMEZONE TO 'Japan';
SET TimeZone=’Europe/Moscow’;
```

```
SELECT 
   now() as "now()",
   now()::timestamptz as "now()::timestamptz",
   now()::timestamp as "now()::timestamp",
   now() at time zone 'utc-0' as "now at utc-0",
   now() at time zone 'Europe/Moscow' as "now() at Moscow",
   now()::timestamp at time zone 'Europe/Moscow' as "now()::timestamp at Moscow";
```

```
SELECT '2011-01-01 00:00:00'::TIMESTAMP;
SELECT '2011-01-01 00:00:00'::TIMESTAMP WITH TIME ZONE;
SELECT '2011-01-01 00:00:00+03'::TIMESTAMP;
SELECT '2011-01-01 00:00:00+03'::TIMESTAMP WITH TIME ZONE;
SET TIMEZONE TO 'Australia/Melbourne';
```