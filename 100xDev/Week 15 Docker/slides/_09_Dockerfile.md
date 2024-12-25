Step 9 - Dockerfile
===================

### 

[](#d440d9d053c24426b69d52455e96466e "What is a Dockerfile")What is a Dockerfile

If you want to create an image from your own code, that you can push to `dockerhub`, you need to create a `Dockerfile` for your application.

A Dockerfile is a text document that contains all the commands a user could call on the command line to create an image.

### 

[](#b3d4be15bd3241bd918a163088c8cbd9 "How to write a dockerfile")How to write a dockerfile

A dockerfile has 2 parts

1.  Base image

2.  Bunch of commands that you run on the base image (to install dependencies like Node.js)

### 

[](#4803bccffb06454eb16c17e948143278 "Let’s write our own Dockerfile")Let’s write our own Dockerfile

Let’s try to containerise this backend app - [https://github.com/100xdevs-cohort-2/week-15-live-1](https://github.com/100xdevs-cohort-2/week-15-live-1)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F6b0619fb-054b-4ba4-a82b-d7524c903bd8%2FScreenshot_2024-03-09_at_3.17.15_PM.png?table=block&id=47b44c7c-f5e1-44df-a90a-ee2e1b4bbbec&cache=v2)

Solution

    FROM node:20
    
    WORKDIR /app
    
    COPY . .
    
    RUN npm install
    RUN npx prisma generate
    RUN npm run build
    
    EXPOSE 3000
    
    CMD ["node", "dist/index.js"]

### 

[](#deee474830e2414aa3ee309b6e0b677f "Common commands")Common commands

*   `**WORKDIR**`: Sets the working directory for any `**RUN**`, `**CMD**`, `**ENTRYPOINT**`, `**COPY**`instructions that follow it.

*   `**RUN**`: Executes any commands in a new layer on top of the current image and commits the results.

*   `**CMD**`: Provides defaults for executing a container. There can only be one CMD instruction in a Dockerfile.

*   `**EXPOSE**`: Informs Docker that the container listens on the specified network ports at runtime.

*   `**ENV**`: Sets the environment variable.

*   `**COPY**`: Allow files from the Docker host to be added to the Docker image

[https://github.com/100xdevs-cohort-2/week-15-live-1](https://github.com/100xdevs-cohort-2/week-15-live-1)