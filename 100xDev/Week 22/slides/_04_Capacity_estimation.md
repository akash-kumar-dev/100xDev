# Capacity estimation

This is a common system design interview where they’ll ask you

1.  how would you scale your server

2.  how do you handle spikes

3.  How can you support a certain SLA given some traffic

Answer usually requires a bunch of

1.  paper math

2.  Estimating requests/s

3.  Assuming / monitoring how many requests a single machine can handle

4.  Autoscaling machines based on the `load` that is estimated from time to time

#### 

[](#79105b7a59a5459a922b0e71c72c79f4 "Example #1 - PayTM app")Example #1 - PayTM app

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fdff20844-e04e-48c3-a735-28c4cb505441%2FScreenshot_2024-04-27_at_9.38.51_AM.png?table=block&id=673dc0b8-87b2-4b3f-a4ba-3ccfe0f005ec&cache=v2)

#### 

[](#f1ce12086ac846f1b1fcc646212e9324 "Example #2 - Chess app")Example #2 - Chess app

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F611e5d41-e3af-48a0-aab9-f3abd0546c0a%2FScreenshot_2024-04-27_at_9.43.36_AM.png?table=block&id=49d2fd64-67a7-4f43-8c65-d64886944115&cache=v2)