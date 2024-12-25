Step 10 - Building images
=========================

Now that you have a dockerfile in your project, try building a `docker image` from it

    docker build -t image_name .

Now if you try to look at your images, you should notice a new image created

    docker images

💡

Add a .dockerignore so that node\_modules don’t get copied over