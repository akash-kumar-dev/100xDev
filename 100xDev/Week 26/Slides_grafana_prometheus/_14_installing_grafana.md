# Installing grafana in docker compose

*   Update docker-compose

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

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3001:3000"
    networks:
      - monitoring
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin

networks:
  monitoring:
```

Try visiting `localhost:3001`

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F122a0c18-b1f5-4018-a8c6-585192f171bb%2FScreenshot_2024-05-26_at_4.18.56_PM.png?table=block&id=8a1e9c65-33fd-466e-bfbe-f461e5f9a8af&cache=v2)