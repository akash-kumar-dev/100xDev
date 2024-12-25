Step 18 - Optimising Dockerfile
===============================

What if we change the Dockerfile a bit -

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F3dc112b6-bf1a-4d48-acd4-dcaac3ef594a%2FScreenshot_2024-03-10_at_2.24.00_PM.png?table=block&id=d3ab0f48-79e0-47c0-8370-5d9e18accb34&cache=v2)

Dockerfile

    FROM node:20
    
    WORKDIR /usr/src/app
    
    COPY package* .
    COPY ./prisma .
        
    RUN npm install
    RUN npx prisma generate
    
    COPY . .
    
    EXPOSE 3000
    
    CMD ["node", "dist/index.js", ]

1.  We first copy over only the things that `npm install` and `npx prisma generate` need

2.  Then we run these scripts

3.  Then we copy over the rest of the source code

#### 

[](#662ef82664a34091a132d9266aba110c "Case 1 - You change your source code (but nothing in package.json/prisma)")Case 1 - You change your source code (but nothing in package.json/prisma)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F60fd50e5-576a-4039-a0e0-6617293d10ce%2FScreenshot_2024-03-10_at_2.29.47_PM.png?table=block&id=e69f3527-8cd6-42a7-9d94-b17ac42467f0&cache=v2)

#### 

[](#6497339df41e4fbabd346f357110cdd5 "Case 2 - You change the package.json file (added a dependency)")Case 2 - You change the package.json file (added a dependency)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fda3357b0-33e6-47ab-b552-4e52ecbfa808%2FScreenshot_2024-03-10_at_2.30.51_PM.png?table=block&id=c8cc1aaf-8c6a-48d4-b764-f1531207260b&cache=v2)