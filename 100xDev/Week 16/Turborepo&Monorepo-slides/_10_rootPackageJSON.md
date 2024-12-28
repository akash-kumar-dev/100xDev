# Exploring root package.json

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F09802be9-a935-4449-b77e-5de61e3cca0a%2FScreenshot_2024-03-16_at_1.31.42_PM.jpg?table=block&id=eb33a25e-6122-4a21-b834-065a0c98f97f&cache=v2)

#### 

[](#b50ab494585440a299a76e9b7778d9a8 "scripts")scripts

This represents what command runs when you run

1.  npm run build

2.  npm run dev

3.  npm run lint

`turbo build` goes into all packages and apps and runs `npm run build` inside them (provided they have it)

Same for `dev` and `lint`