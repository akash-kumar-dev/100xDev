# Turborepo as a build system orchestrator

Turborepo is a `build system orchestrator` .

The key feature of TurboRepo is its ability to manage and optimize the execution of these tasks across your monorepo. It does this through:

1.  **Caching**: TurboRepo caches the outputs of tasks, so if you run a task and then run it again without changing any of the inputs (source files, dependencies, configuration), TurboRepo can skip the actual execution and provide the output from the cache. This can significantly speed up build times, especially in continuous integration environments.

2.  **Parallelization**: It can run independent tasks in parallel, making efficient use of your machine's resources. This reduces the overall time needed to complete all tasks in your project.

3.  **Dependency Graph Awareness**: TurboRepo understands the dependency graph of your monorepo. This means it knows which packages depend on each other and can ensure tasks are run in the correct order.