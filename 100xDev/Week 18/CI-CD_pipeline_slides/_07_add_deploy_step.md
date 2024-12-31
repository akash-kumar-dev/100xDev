# Let’s add a deploy step

*   Create dockerfiles for the `apps` you have

*   Create `docker/Dockerfile.user`

```Dockerfile
FROM node:20.12.0-alpine3.19

WORKDIR /usr/src/app

COPY package.json package-lock.json turbo.json tsconfig.json ./

COPY apps ./apps
COPY packages ./packages

# Install dependencies
RUN npm install
# Can you add a script to the global package.json that does this?
RUN cd packages/db && npx prisma generate && cd ../..

# Can you filter the build down to just one app?
RUN npm run build

CMD ["npm", "run", "start-user-app"]
```

*   Add `start-user-app` script to the root `package.json`

```json
"start-user-app": "cd ./apps/user-app && npm run start"
```

```bash
docker build -t mynextApp -f dokcer/Dockerfile.user .
```

You dont really need to build every app for every dockerfile. Can you change the build command so that only a single app is built for each dockerfile?

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F51df3aa8-aeaa-480b-ba8c-2199f4f024b2%2FScreenshot_2024-03-31_at_5.44.18_PM.png?table=block&id=2610106d-6187-4732-9ab3-2d6de23e3918&cache=v2)

*   Create the CD pipeline that

*   Clones the repo
*   Builds the docker image
*   Pushes the docker image

```yaml
name: Build and Deploy to Docker Hub

on:
  push:
    branches:
      - master

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
    - name: Check Out Repo
      uses: actions/checkout@v2

    - name: Log in to Docker Hub
      uses: docker/login-action@v1
      with:
        username: ${{ secrets.DOCKER_USERNAME }}
        password: ${{ secrets.DOCKER_PASSWORD }}

    - name: Build and Push Docker image
      uses: docker/build-push-action@v2
      with:
        context: .
        file: ./docker/Dockerfile.user
        push: true
        tags: 100xdevs/web-app:latest  # Replace with your Docker Hub username and repository

    - name: Verify Pushed Image
      run: docker pull 100xdevs/web-app:latest  # Replace with your Docker Hub username and repository
```

*   Make sure to add the `dockerhub` secrets to `github secrets` of the repo (DOCKER\_USERNAME, DOCKER\_PASSWORD)

* set credentials on `gthub.com/username/repo/settings/secrets/actions`

*   You should see a workflow running

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F58c0244b-9fc2-4a73-bf6b-18e8c96186df%2FScreenshot_2024-03-31_at_5.58.58_PM.png?table=block&id=f5fa90e6-b914-4fd7-a729-944a1b165902&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Faeeaea90-055b-4eae-814c-f0dc4d3f059f%2FScreenshot_2024-03-31_at_6.00.25_PM.png?table=block&id=3e12a6d3-a563-4c14-a3f3-0bcf96e50061&cache=v2)

#### 

[](#b12c406b9d2944b88e9f65e70856278a "Check dockerhub to ensure the image has indeed reached there")Check dockerhub to ensure the image has indeed reached there

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F12f5ab3c-a7e7-424f-99c6-358995e68649%2FScreenshot_2024-03-31_at_6.01.41_PM.png?table=block&id=ab1aea6b-37b7-4313-93cb-758bda7687f2&cache=v2)

💡

You might have to inject more environment variables (like DB URL) in there for the build to work as expected