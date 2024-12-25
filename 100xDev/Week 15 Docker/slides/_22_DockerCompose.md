Step 22 - docker-compose
========================

Docker Compose is a tool designed to help you define and run multi-container Docker applications. With Compose, you use a YAML file to configure your application's services, networks, and volumes. Then, with a single command, you can create and start all the services from your configuration.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F161f82ec-cbf1-4654-ab9b-a052fd1da6be%2FScreenshot_2024-03-10_at_5.36.58_PM.png?table=block&id=8e4f86ba-c720-4f78-8c97-1926391deb73&cache=v2)

### 

[](#eb2a315aa3724a3eac091bbfafc6fd0b "Before docker-compose")Before docker-compose

*   Create a network

    docker network create my_custom_network

*   Create a volume

    docker volume create volume_database

*   Start mongo container

    docker run -d -v volume_database:/data/db --name mongo --network my_custom_network  mongo

*   Start backend container

    docker run -d -p 3000:3000 --name backend --network my_custom_network backend

### 

[](#e54c8e2740b04ed0b2ff7b86de390614 "After docker-compose")After docker-compose

1.  Install docker-compose - [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

2.  Create a `yaml` file describing all your containers and volumes (by default all containers in a docker-compose run on the same network)

Solution

    version: '3.8'
    services:
      mongodb:
        image: mongo
        container_name: mongodb
        ports:
          - "27017:27017"
        volumes:
          - mongodb_data:/data/db
    
      backend22:
        image: backend
        container_name: backend_app
        depends_on:
          - mongodb
        ports:
          - "3000:3000"
        environment:
          MONGO_URL: "mongodb://mongodb:27017"
    
    volumes:
      mongodb_data:

1.  Start the compose

    docker-compose up

1.  Stop everything (including volumes)

     docker-compose down --volumes