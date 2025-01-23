# DDoS protection in prod

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fdcf8a1b5-82dd-4fed-a9cb-a3cf85e06ddd%2F653af01c738a73677c8a6ff07fcb902eb5c410f6_2_690x464.png?table=block&id=983fe850-32db-450d-9ccf-7923236adbec&cache=v2)

1.  Move your domain to cloudflare

2.  Proxy all records via cloudflare

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F0c9694c2-0cbd-4dcf-89d9-ad5bc633953a%2FScreenshot_2024-04-20_at_5.36.06_PM.png?table=block&id=31e54a72-43cb-4225-9773-953aad8b28d3&cache=v2)

💡

This is usually more than good enough, but if you’d like to dive further, you can add IP based rate limits, override DDoS in the security section of cloudflare AWS/GCP also provide you with the same