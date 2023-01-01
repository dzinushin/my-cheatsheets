*** Gradle


common usage:

```
./gradlew clean build --info --stacktrace

./gradlew bootRun
```


locks
```
./gradlew  build --update-locks ru.cian.finance.marketplace:api-domain --refresh-dependencies
./gradlew  test  --write-locks
```