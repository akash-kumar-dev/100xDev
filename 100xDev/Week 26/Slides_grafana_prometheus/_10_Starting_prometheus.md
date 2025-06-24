# Actually starting prometheus

Let’s start an actual prometheus process that scrapes the linux machine

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F2af80c12-6f38-4a1f-8459-85b33e6debf6%2FScreenshot_2024-05-26_at_6.45.37_PM.png?table=block&id=91070bd4-de67-4310-8751-3e74c0fb6b33&cache=v2)

Until now, we’ve exposed a `/metrics` endpoint but no one is `scraping` using it.

Prometheus actually scrapes (pulls) these metrics so you can visualise them over time (time series data)

For that, you need to start prometheus and give it the `source` of the metrics

*   Add `prometheus.yml`

```javascript
global:
  scrape_interval: 15s # How frequently to scrape targets

scrape_configs:
  - job_name: 'nodejs-app'
    static_configs:
      - targets: ['localhost:3000']
```

*   Start prometheus locally

```javascript
docker run -p 9090:9090 -v ./prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus
```

💡

You can start it w/o docker as well by installing it from source

*   Try visiting [localhost:9090](http://localhost:9090) , you will notice a problem in the `status/targets` section

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fc32994cb-87a6-46eb-9994-de2a78618c2a%2FScreenshot_2024-05-26_at_3.23.54_PM.png?table=block&id=baa3ff1a-d2bf-4423-88a6-ce43030bb894&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F09da6f6a-10ab-4f0a-965a-40ba6ada9ea4%2FScreenshot_2024-05-26_at_3.23.40_PM.png?table=block&id=f3699376-d5d7-4065-a8c9-82861e74179c&cache=v2)

💡

The problem is that nothing is running on port 3000 on the prom container, and hence it cant discover our service

### 

[](#6658c6161704418f93687ee1c6f99c12 "Containerising the app")Containerising the app

*   Create a Dockerfile for the Node app

```javascript
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "app.js" ]
```

*   Create a docker-compose that starts the nodejs app as well as the prom container

```javascript
version: '3.8'

services:
  node-app:
    build: ./
    ports:
      - "3000:3000"
    networks:
      - monitoring

  prometheus:
    image: prom/prometheus:latest
    volumes:
      - ./:/etc/prometheus
    ports:
      - "9090:9090"
    networks:
      - monitoring

networks:
  monitoring:
```

*   Update prometheus.yml

```javascript
global:
  scrape_interval: 15s # How frequently to scrape targets

scrape_configs:
  - job_name: 'nodejs-app'
    static_configs:
      - targets: ['node-app:3000']
```

*   Start docker compose

```javascript
docker-compose up
```

*   Try going to [http://localhost:9090/](http://localhost:9090/)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fdb7739b1-6e96-4c13-95ba-1ee4723f75cf%2FScreenshot_2024-05-26_at_3.36.12_PM.png?table=block&id=22daf3f9-12b1-4409-bcb9-b08e8a5127e1&cache=v2)

*   Try executing a query

```javascript
http_requests_total
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F991f89c0-a044-408c-b227-5cb62f04c82a%2FScreenshot_2024-05-26_at_3.37.19_PM.png?table=block&id=79a1b46c-75bd-4178-9e7e-3534cc94d0fa&cache=v2)