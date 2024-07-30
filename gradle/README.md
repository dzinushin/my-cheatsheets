* Gradle

*** bootstraping

```
gradle init
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


*** gradle files in project

settings file      : settings.gradle.kts
build file         : build.gradle.kts
properties file    : gradle.properties
libs versions file : libs.versions.toml

*** properties file

```
org.gradle.console=verbose # turn on verbose mode when run tasks
org.gradle.logging.level=info
```

*** Wrapper

upgrade gradle version for wrapper
```
gradle wrapper --gradle-version=8.7
```


*** Plugins

- Core 
- Community https://plugins.gradle.org/
- Local


*** Tasks

view available tasks
```
./gradlew tasks --all
```

```
./gradlew [<project>:]<task>
```

```
./gradlew test
./gradlew app:test
```




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



*** Daemons

```
gradle --stop
gradle --status
```