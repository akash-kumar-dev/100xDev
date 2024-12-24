# Docker

```bash
docker images # list all images
docker run -d -p 8080:80 nginx # run a container
docker ps # list running containers
docker ps -a # list all containers
docker stop <container-id> # stop a container
docker kill <container-id> # kill a container
docker rmi <image-id> # remove an image
docker logs <container-id> # show logs of a container
```

### Building a Docker Image

dockerfile
```dockerfile
FROM node:18

WORKDIR /app

COPY package* .
COPY ./prisma .

RUN npm install
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]
```

.dockerignore
```.dockerignore
node_modules
dist
```

Build the image
```bash
docker build -t <image-name> .
```

Running a container
```bash
docker run -it backend sh # run a container in interactive mode and open a shell
```

```bash
docker run -p 30000:3000 -e DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres -e JWT_SECRET=secret -e PORT=3000 -d backend
```

```bash
docker exec -it <container-id> /bin/bash # run a command in a container
```

### Volumes
```bash
docker volume create <volume-name> # create a volume
docker volume ls # list all volumes
docker volume inspect <volume-name> # inspect a volume
docker volume rm <volume-name> # remove a volume
```

```bash
docker run -v <volume-name>:/data/db -p 27017:27017 -d mongo # run a container with a volume
```

### Networks
```bash
docker network create <network-name> # create a network
docker network ls # list all networks
docker network inspect <network-name> # inspect a network
docker network rm <network-name> # remove a network
```

Example:
```bash
docker run -d --network <network-name> --name <container-name> <image-name>

docker run -d -v volume-name:/data/db --name offsecMongo --network offsecNetwork mongo
```

```JavaScript
const DATABASE_URL = 'mondodb://offsecMongo:27017/myDatabase'
```

connecting another container to a network: (NodeJs Server to MongoDB)

```bash
docker run -d --network offsecNetwork nodeJsServer
```
## Docker Compose

docker-compose.yml
```yaml
version: '3.8'
services:
  mongodb:
    image: mongo
    container_name: mongodb
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

  backend:
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
```

start the compose
```bash
docker-compose up
```

if backend have not image and you want to build it by dockerfile
```yaml
backend:
    build: .
```

## Binding host folderrs to container
```bash
docker run -v /path/to/host/folder:/path/to/container/folder -p 8080:80 nginx

docker run -p 3000:3000 -v ./app:/nextapp/app nextapp
```