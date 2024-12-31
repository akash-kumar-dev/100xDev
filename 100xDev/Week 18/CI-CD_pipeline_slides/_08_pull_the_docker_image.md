# Let’s pull the docker image

Ref - [https://github.com/appleboy/ssh-action](https://github.com/appleboy/ssh-action)

*   Create an ec2 server

*   Download its keypair file
*   Allow http/https traffic
*   Ubuntu base image

*   Download docker on the machine

*   [https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/)
*   sudo docker run hello-world

*   Update workflow to pull the latest image on the ec2 machine

```yaml
name: Build and Deploy to Docker Hub

on:
  push:
    branches:
      - master  # Adjusted to trigger on pushes to master

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
    - name: Check Out Repo
      uses: actions/checkout@v2

    - name: Prepare Dockerfile
      run: cp ./docker/Dockerfile.user ./Dockerfile

    - name: Log in to Docker Hub
      uses: docker/login-action@v1
      with:
        username: ${{ secrets.DOCKER_USERNAME }}
        password: ${{ secrets.DOCKER_PASSWORD }}

    - name: Build and Push Docker image
      uses: docker/build-push-action@v2
      with:
        context: .
        file: ./Dockerfile
        push: true
        tags: 100xdevs/web-app:latest

    - name: Verify Pushed Image
      run: docker pull 100xdevs/web-app:latest

    - name: Deploy to EC2
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.SSH_HOST }}
        username: ${{ secrets.SSH_USERNAME }}
        key: ${{ secrets.SSH_KEY }}
        script: |
          sudo docker pull 100xdevs/web-app:latest
          sudo docker stop web-app || true
          sudo docker rm web-app || true
          sudo docker run -d --name web-app -p 3005:3000 100xdevs/web-app:latest
```

*   Point userapp.your\_domain.com to the IP of the server

*   Add nginx reverse proxy to forward requests from userapp.your\_domain.com to port on which the app is running

* nginx config
```bash
sudo vi /etc/nginx/nginx.conf
```

```nginx

server {
        server_name userapp.100xdevs.com;

        location / {
            proxy_pass http://localhost:3005;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;


                # Basic Authentication
                auth_basic "Restricted Content";
                auth_basic_user_file /etc/nginx/.htpasswd;
        }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/userapp.100xdevs.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/userapp.100xdevs.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
```
* reload nginx
```bash
sudo nginx -s reload
```

*   Install certbot and Refresh certificate

```bash
sudo certbot --nginx
```

### 

[](#5c88dd2074024802abfbba6f59a693eb "Take home assignments")Take home assignments

1.  Get a DB on [`neon.tech`](http://neon.tech) / `RDS` / `Aeiven` and add a DB migration step to the DB

2.  Pass in the DB credentials while starting the docker image

3.  Start the docker image so that it restarts if it goes down (similar to pm2)