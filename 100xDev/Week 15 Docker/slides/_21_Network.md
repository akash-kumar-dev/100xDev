Step 21 - Network
=================

In Docker, a network is a powerful feature that allows containers to communicate with each other and with the outside world.

Docker containers can’t talk to each other by default.

[`localhost`](http://localhost) on a docker container means `it's own network` and not the network of the `host machine`

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F8b69d8c4-0014-46a6-80ee-b6fc40e07765%2FScreenshot_2024-03-10_at_4.32.34_PM.png?table=block&id=ad64379b-d26c-43ad-987b-628383216586&cache=v2)

### 

[](#fc805350b1b74ec29e273ff8e0ef6f93 "How to make containers talk to each other?")How to make containers talk to each other?

Attach them to the same network

1.  Clone the repo - [https://github.com/100xdevs-cohort-2/week-15-live-2.2](https://github.com/100xdevs-cohort-2/week-15-live-2.2)

2.  Build the image

    docker build -t image_tag .

1.  Create a network

    docker network create my_custom_network

1.  Start the `backend process` with the `network` attached to it

    docker run -d -p 3000:3000 --name backend --network my_custom_network image_tag

1.  Start mongo on the same network

    docker run -d -v volume_database:/data/db --name mongo --network my_custom_network -p 27017:27017 mongo

1.  Check the logs to ensure the db connection is successful

    docker logs <container_id>

1.  Try to visit an endpoint and ensure you are able to talk to the database

2.  If you want, you can remove the port mapping for mongo since you don’t necessarily need it exposed on your machine

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F2d10fe34-c5af-4030-bf82-09f6ecf2c545%2FScreenshot_2024-03-10_at_5.16.46_PM.png?table=block&id=0b77d3ea-2dbc-41ca-ba4e-d49172524991&cache=v2)

#### 

[](#aa4d705287f74de9accb90d874b63cb6 "Types of networks")Types of networks

*   **Bridge**: The default network driver for containers. When you run a container without specifying a network, it's attached to a bridge network. It provides a private internal network on the host machine, and containers on the same bridge network can communicate with each other.

*   **Host**: Removes network isolation between the container and the Docker host, and uses the host's networking directly. This is useful for services that need to handle lots of traffic or need to expose many ports.