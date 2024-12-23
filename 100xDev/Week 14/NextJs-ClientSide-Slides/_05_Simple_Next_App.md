# Step 5 - Let’s bootstrap a simple Next app

```javascript
npx create-next-app@latest
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fd6a3439f-9ff8-456f-90bc-17501c0d46ba%2FScreenshot_2024-03-02_at_1.16.31_PM.png?table=block&id=5d438a5b-1c70-44a2-a409-aad9e9fa8009&cache=v2)

#### 

[](#bc3b34c526ab49d7ae196d54f1ec9aa1 "File structure")File structure

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fbf0c63a2-c1e0-488d-82bb-8032ce792faa%2FScreenshot_2024-03-02_at_1.23.58_PM.png?table=block&id=8f7b4e4a-0360-4d4d-9079-fc6e66ff42a2&cache=v2)

1.  next.config.mjs - Nextjs configuration file

2.  tailwind.config.js - Tailwind configuration file

3.  app - Contains all your code/components/layouts/routes/apis

#### 

[](#329eb010dc0645f2b8ac2cd412163b71 "Bootstrap the project")Bootstrap the project

1.  Remove everything from `app/page.tsx` and return an empty div

2.  Remove the css bits (not the tailwind headers) from the `global.css` file