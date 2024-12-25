Step 13 - More commands
=======================

1.  docker kill - to kill a container

2.  docker exec - to exectue a command inside a container

Examples

1.  List all contents of a container folder

    docker exec <container_name_or_id> ls /path/to/directory

1.  ****Running an Interactive Shell****

    docker exec -it <container_name_or_id> /bin/bash