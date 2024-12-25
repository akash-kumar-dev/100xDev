Step 14 - Pushing to dockerhub
==============================

Once you’ve created your image, you can push it to `dockerhub` to share it with the world.

1.  Signup to `dockerhub`

2.  Create a new repository

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Ff28b0281-9aa7-4a45-8609-92953912dd2c%2FScreenshot_2024-03-09_at_4.40.21_PM.png?table=block&id=a393771d-6b3d-4c55-a053-fa526418bcf8&cache=v2)

3.  Login to docker cli

1.  docker login
2.  you might have to create an access token - [https://docs.docker.com/security/for-developers/access-tokens/](https://docs.docker.com/security/for-developers/access-tokens/)

4.  Push to the repository

    docker push your_username/your_reponame:tagname