## HTTP Server in JAVA

### okhttp
- https://square.github.io/okhttp/ 

```groovy
dependencies {
    // OkHttp core library
    implementation("com.squareup.okhttp3:okhttp:4.12.0")
    // Optional: OkHttp logging interceptor (useful for debugging network requests)
    implementation("com.squareup.okhttp3:logging-interceptor:4.12.0")
}
```

### Retrofit
- https://square.github.io/retrofit/

```groovy
dependencies {
    // Retrofit core
    implementation("com.squareup.retrofit2:retrofit:2.10.0")
    // Converter for JSON serialization/deserialization (using Gson)
    implementation("com.squareup.retrofit2:converter-gson:2.10.0")
    // Optional: OkHttp logging interceptor (useful for debugging network requests)
    implementation("com.squareup.okhttp3:logging-interceptor:4.12.0")
}
```


## fat jar
- fat jar is a jar which contains all the dependencies inside the jar itself
- Contains the bit you literally write yourself plus the direct dependencies of your application PLUS the bits needed to run your application “on its own”.

```groovy
jar {
    duplicatesStrategy = DuplicatesStrategy.INCLUDE
    manifest {
        attributes (
                'Main-Class': 'org.example.Main'
        )
    }
    from {
        configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) }
    }
}
```

### Serialization and Deserialization
- Gson
- Jackson
- Moshi