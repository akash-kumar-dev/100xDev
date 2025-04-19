# Integration tests

While `unit tests` are great, they mock out a lot of external services (DB, cache, message queues …). This is great for testing the functionality of a function in isolation.

Integration tests are used to test how all `integrated components` work together.

This means you have to start all auxilary services before running your tests and you `DONT` mock out any external service calls

#### 

[](#e3b67726eb8b4f64857f5c5f0790b337 "Downsides")Downsides

1.  Slower to execute

2.  Add complexity

3.  Local development setup if required for a developer (things like docker)

\\