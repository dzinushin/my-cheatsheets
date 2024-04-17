*** Gradle


common usage:

```
./gradlew clean build --info --stacktrace

./gradlew bootRun

gradle tasks
```


locks
```
./gradlew  build --update-locks ru.cian.finance.marketplace:api-domain --refresh-dependencies
./gradlew  test  --write-locks
```

```
./gradlew clean --refresh-dependencies
```

init
https://docs.gradle.org/current/userguide/build_init_plugin.html
```
gradle help --task init


gradle init --no-comments --use-defaults --type kotlin-library


gradle init \
  --no-comments \
  --type java-application \
  --dsl kotlin \
  --test-framework junit-jupiter \
  --package my.project \
  --project-name my-project  \
  --no-split-project  \
  --java-version 17

gradle init \
  --no-comments \
  --type kotlin-application \
  --dsl kotlin \
  --no-incubating \
  --package my.project \
  --project-name my-project  \
  --no-split-project  \
  --java-version 17


gradle init \
  --no-comments \
  --type kotlin-application \
  --dsl kotlin \
  --no-incubating \
  --package my.project \
  --project-name my-project  \
  --java-version 21

```