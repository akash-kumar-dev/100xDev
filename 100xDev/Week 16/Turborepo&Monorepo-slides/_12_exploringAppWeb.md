# Exploring `apps/web`

### 

[](#bd3ea335c7e04835b9c15bb9f24a24b3 "1. Dependencies")1\. Dependencies

It is a simple next.js app. But it uses some `UI components` from the `packages/ui` module

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F3c9232aa-82e1-4ec3-8852-9d0de0b89fe6%2FScreenshot_2024-03-16_at_1.23.06_PM.jpg?table=block&id=4325d478-2cbe-410c-8558-7e5f8a9ea881&cache=v2)

### 

[](#e1b5860967bd4e799bcb957443a80cff "2. Exploring package.json")2\. Exploring package.json

If you explore package.json of `apps/web`, you will notice `@repo/ui` as a dependency

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fda7eab52-5b59-4d3e-92e5-c23e8bd25d0c%2FScreenshot_2024-03-16_at_3.46.44_PM.jpg?table=block&id=63480ab4-8e76-4eae-a46d-fccd481c68d1&cache=v2)

### 

[](#535aca8479624d448826ce9d4a85bbbd "3. Exploring page.tsx")3\. Exploring page.tsx

This is a very big page, let’s try to see the import and usage of the `Button` component

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fc525e50a-8a58-4402-818b-b10507c31285%2FScreenshot_2024-03-16_at_1.46.12_PM.jpg?table=block&id=707eaf56-407c-4eb1-96d6-2f1703f2b6d2&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F0ea269ea-e5bc-4355-92eb-0f20c321fbf7%2FScreenshot_2024-03-16_at_1.47.35_PM.jpg?table=block&id=2bb57b25-da69-41c3-b151-6c46144da12c&cache=v2)

The same `Button` component can be used by the `apps/docs` website as well