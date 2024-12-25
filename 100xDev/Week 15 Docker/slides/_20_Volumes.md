Step 20 - Volumes
=================

If you restart a `mongo` docker container, you will notice that your data goes away.

This is because docker containers are `transitory` (they don’t retain data across restarts)

[](#c2065a7b673041168e75d1eccd0bcd1d "Without volumes")Without volumes
------------------------------------------------------------------------

1.  Start a mongo container locally

    docker run -p 27017:27017 -d mongo

1.  Open it in MongoDB Compass and add some data to it

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F8c867185-969d-4d72-b3be-d3cb386903ef%2FScreenshot_2024-03-10_at_3.44.35_PM.png?table=block&id=a4a9ef50-3b92-488d-a365-2223c3e92b07&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fb8c8ef76-2b19-468f-8bed-2660f6c34496%2FScreenshot_2024-03-10_at_3.48.44_PM.png?table=block&id=b093a08e-119b-4fa0-b0db-9ad3c02bcaa2&cache=v2)

1.  Kill the container

    docker kill <container_id>

1.  Restart the container

    docker run -p 27017:27017 -d mongo

1.  Try to explore the database in Compass and check if the data has persisted (it wouldn’t)

[](#24de1ee34ed043098c06796871a0bb5f "With volumes")With volumes
------------------------------------------------------------------

1.  Create a `volume`

    docker volume create volume_database

1.  Mount the folder in `mongo` which actually stores the data to this volume

    docker run -v volume_database:/data/db -p 27017:27017 mongo

1.  Open it in MongoDB Compass and add some data to it

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F8c867185-969d-4d72-b3be-d3cb386903ef%2FScreenshot_2024-03-10_at_3.44.35_PM.png?table=block&id=cdf21e0d-100b-4091-b832-3d4a3887d7ab&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fb8c8ef76-2b19-468f-8bed-2660f6c34496%2FScreenshot_2024-03-10_at_3.48.44_PM.png?table=block&id=62467d68-6603-418d-abcf-db442078e6ce&cache=v2)

1.  Kill the container

    docker kill <container_id>

1.  Restart the container

    docker run -v volume_database:/data/db -p 27017:27017 mongo

1.  Try to explore the database in Compass and check if the data has persisted (it will!)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F48644994-0923-4459-b39d-e82ffe5a2b22%2FScreenshot_2024-03-10_at_4.23.28_PM.png?table=block&id=ea7ea840-454b-4866-9412-0079d6769bf3&cache=v2)