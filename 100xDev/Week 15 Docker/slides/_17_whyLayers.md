Step 17 - Why layers?
=====================

If you change your Dockerfile, layers can get re-used based on where the change was made

💡

If a layer changes, all subsequent layers also change

#### 

[](#a69fd93c742942e7b16fdb1fa1c63d6a "Case 1 - You change your source code")Case 1 - You change your source code

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F56478744-6865-470c-a271-1837d86bdf87%2FScreenshot_2024-03-10_at_1.38.04_PM.png?table=block&id=0ef9171c-dba1-4dd5-88bf-f7eade9b197d&cache=v2)

Logs

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe394bcde-4a1e-4793-b990-ac300a217212%2FScreenshot_2024-03-10_at_1.41.27_PM.png?table=block&id=244d5b29-cb92-4ce2-81ad-e7ec0dbc2230&cache=v2)

#### 

[](#6241e773a01049ecb140f990565268bf "Case 2 - You change the package.json file (added a dependency)")Case 2 - You change the package.json file (added a dependency)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F56478744-6865-470c-a271-1837d86bdf87%2FScreenshot_2024-03-10_at_1.38.04_PM.png?table=block&id=70ac3431-e628-4238-b115-c724a55ffa5d&cache=v2)

Logs

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe394bcde-4a1e-4793-b990-ac300a217212%2FScreenshot_2024-03-10_at_1.41.27_PM.png?table=block&id=3eae7431-5ea2-4f49-9c0a-46b9e88b2f78&cache=v2)

### 

[](#f02b113d27e34bfb9e9aac789f3c37f3 "Thought experiment")Thought experiment

How often in a project do you think `dependencies change` ?

How often does the `npm install` layer need to change?

Wouldn’t it be nice if we could `cache` the `npm install` step considering dependencies don’t change often?