# Continuous Deployment in Github

We’ll be deploying a next.js app to EC2 servers via Docker

💡

You don’t really need Docker here, since it’s deploying on a simple EC2 server. If you deploy to 1. GCP App runner 2. ECS 3. Kubernetes then it makes more sense to deploy a `dockerised`

#### 

[](#f958cd31473446149a4f38f5aa5dd0af "Architecture diagram")Architecture diagram

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F22c1c7b4-3fa2-46b4-80e0-49f8b66ea635%2FScreenshot_2024-03-20_at_8.51.20_PM.png?table=block&id=c62fe199-6f4b-413d-8c68-4d5d465759e7&cache=v2)

💡

Last step keeps changing based on where you’re pushing your image