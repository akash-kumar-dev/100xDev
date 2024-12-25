Step 12 - Passing in env variables
==================================

    docker run -p 3000:3000 -e DATABASE_URL="" image_name

The `-e` argument let’s you send in environment variables to your node.js app