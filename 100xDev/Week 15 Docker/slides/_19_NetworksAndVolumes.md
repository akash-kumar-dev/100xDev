Step 19 - Networks and volumes
==============================

Networks and volumes are concepts that become important when you have multiple containers running in which you

1.  Need to persist data across docker restarts

2.  Need to allow containers to talk to each other

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fbc784ebf-de6a-47ac-bb73-5fd44ba82e46%2FScreenshot_2024-03-10_at_3.28.40_PM.png?table=block&id=f4d28211-1790-4f26-85da-9e55cf259f89&cache=v2)

💡

We didn’t need `networks` until now because when we started the `mongo` container, it was being accessed by a Node.js process running directly on the machine

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fb39e85ed-9f88-4eac-aa94-9b5ab8399a2f%2FScreenshot_2024-03-10_at_3.28.01_PM.png?table=block&id=765feab2-fc70-440b-a7b3-b077a0c3fb4d&cache=v2)