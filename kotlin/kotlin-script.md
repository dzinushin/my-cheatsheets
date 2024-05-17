

https://github.com/LimeBeck/kotlin-script-presentation


File: ```num.kts```
```
#!/usr/bin/env kotlin

import java.io.File

File("a.txt").useLines {
	it.forEachIndexed { i,l -> println("$i : $l") }
}

```


File: ```test.main.kts```
```
#!/usr/bin/env kotlin
@file:DependsOn("org.jetbrains.kotlinx.kotlinx-cli-jvm:0.3.6")

import kotlinx.cli.*


```