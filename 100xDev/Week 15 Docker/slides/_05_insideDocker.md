Step 5 - Inside docker
======================

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Ff09be77f-3157-45a8-98db-f6109c8a0200%2FScreenshot_2024-03-09_at_2.08.40_PM.png?table=block&id=73f531cb-9909-488d-bcf1-00ef5373cb90&cache=v2)

As an application/full stack developer, you need to be comfortable with the following terminologies -

1.  Docker Engine

2.  Docker CLI - Command line interface

3.  Docker registry

### 

[](#291fc2c8d12e41e8921f3e44ada3d5b6 "1. Docker Engine")1\. Docker Engine

Docker Engine is an open-source `containerization` technology that allows developers to package applications into `container`

Containers are standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.

### 

[](#39cb0d229f4e41f3822379356dfb9496 "2. Docker CLI")2\. Docker CLI

The command line interface lets you talk to the `docker engine` and lets you start/stop/list containers

    docker run -d -p 27017:27017 mongo

💡

Docker cli is not the only way to talk to a docker engine. You can hit the docker `REST` API to do the same things

#### 

[](#dddc0ac42a674e27b29efc75e5756886 "3. Docker registry")3\. Docker registry

The `docker registry` is how Docker makes money.

It is similar to `github`, but it lets you push `images` rather than `sourcecode`

Docker’s main registry - [https://dockerhub.com/](https://dockerhub.com/)

Mongo image on docker registry - [https://hub.docker.com/\_/mongo](https://hub.docker.com/_/mongo)