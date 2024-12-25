Step 16 - Layers practically
============================

For a simple Node.js app - [https://github.com/100xdevs-cohort-2/week-15-live-2](https://github.com/100xdevs-cohort-2/week-15-live-2)

**Dockerfile**

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fa7018106-27d9-4833-9206-d20d05ab8a11%2FScreenshot_2024-03-10_at_1.29.42_PM.png?table=block&id=5adef147-fe82-4e9a-9e82-dbb3738b3104&cache=v2)

**Logs**

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F891e06cd-8ce7-402e-9e0d-15d7e9852e3d%2FScreenshot_2024-03-10_at_1.31.53_PM.png?table=block&id=d06687c2-32b3-4419-865c-367f7a0ffdd8&cache=v2)

#### 

[](#51613931cc49449295ea462640e8cd63 "Observations - ")Observations -

1.  Base image creates the first layer

2.  Each `RUN`, `COPY` , `WORKDIR` command creates a new layer

3.  Layers can get re-used across docker builds (notice `CACHED` in 1/6)