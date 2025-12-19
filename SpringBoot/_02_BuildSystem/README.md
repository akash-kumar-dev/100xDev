## Build System
Spring Boot uses Maven or Gradle as its build system. These tools help manage project dependencies, build processes, and packaging of the application.

### Bazel
- Google's build system that supports large codebases.
- Provides fast and reliable builds with advanced caching and parallel execution.

```bash
# Example Bazel build command
bazel build //src/main/java/com/examples/project:hello_world

# Example Bazel run command
bazel run //src/main/java/com/examples/project:hello_world

# clean build artifacts
bazel clean
```

### Gradle
- A flexible build automation tool that uses a Groovy or Kotlin DSL.
- Supports incremental builds and a rich plugin ecosystem.

```bash
# Example Gradle build command
./gradlew build

# run the application
./gradlew run

# create a jar file
./gradlew jar

# run the jar
java -jar build/libs/xyz.jar

# clean build artifacts
./gradlew clean

./gradlew tasks # list available tasks

```

```
<!-- Gradle - no main manifest attribute -->
tasks.jar {
    manifest.attributes["Main-Class"] = "org.example.Main"
}
```