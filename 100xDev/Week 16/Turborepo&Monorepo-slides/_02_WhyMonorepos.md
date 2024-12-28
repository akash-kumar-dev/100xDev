# Why Monorepos?

#### 

[](#df6a4ddfa33642d5a43b773a4f731677 "Why not Simple folders?")Why not Simple folders?

Why cant I just store services (backend, frontend etc) in various top level folders?

You can, and you should if your

1.  Services are highly decoupled (dont share any code)

2.  Services don’t depend on each other.

For eg - A codebase which has a Golang service and a JS service

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F457b1c41-8f8c-47c7-881a-814ae54898b2%2FScreenshot_2024-03-16_at_2.54.08_AM.png?table=block&id=46bc3f63-54f9-4749-87ff-42722c34de81&cache=v2)

#### 

[](#20a882dc24b14d3bbfa0e21ee3e8bce1 "Why monorepos?")Why monorepos?

1.  **Shared Code Reuse**

2.  **Enhanced Collaboration**

3.  **Optimized Builds and CI/CD**: Tools like TurboRepo offer smart caching and task execution strategies that can significantly reduce build and testing times.

4.  **Centralized Tooling and Configuration**: Managing build tools, linters, formatters, and other configurations is simpler in a monorepo because you can have a single set of tools for the entire project.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F778d65fc-118f-48f3-afc6-0c60af28ffb0%2FScreenshot_2024-03-16_at_2.55.59_AM.png?table=block&id=22ab6b78-b5f8-4852-b887-aec1778e8bbf&cache=v2)