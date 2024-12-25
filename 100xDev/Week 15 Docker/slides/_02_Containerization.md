Step 2 - Containerization
=========================

#### 

[](#960ea2e03db2413b9adabb55424de838 "What are containers")What are containers

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F8cbbd391-ac04-4427-8a19-1bfc68fba8e8%2FD27qoI0JTz-VN8mh6L8fgw.png?table=block&id=a8af0593-7683-4afc-925d-0d92e052f153&cache=v2)

Containers are a way to package and distribute software applications in a way that makes them easy to deploy and run consistently across different environments. They allow you to package an application, along with all its dependencies and libraries, into a single unit that can be run on any machine with a container runtime, such as Docker.

#### 

[](#b3c541e35f69478db18af0dfa84c87e3 "Why containers")Why containers

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F48388c2b-2fe5-4430-9d82-f9692810351d%2F0pfIHdGKTfCFZJOsw8mYMA.png?table=block&id=6125e1fa-0cae-4eae-a246-9ffe6bc8575c&cache=v2)

1.  Everyone has different Operating systems

2.  Steps to run a project can vary based on OS

3.  Extremely harder to keep track of dependencies as project grows

#### 

[](#dd552e541c014d518bc03c94d78200a7 "Benefits of using containers")Benefits of using containers

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F2775ef7f-d916-4397-bbd9-e8ce58eeddb6%2FScreenshot_2024-03-09_at_1.01.25_PM.png?table=block&id=22377015-a7ed-439d-9a51-717dba681af5&cache=v2)

1.  Let you describe your `configuration` in a single file

2.  Can run in isolated environments

3.  Makes Local setup of OS projects a breeze

4.  Makes installing auxiliary services/DBs easy

#### 

[](#a05434899981466db9f4765fcbbb79a4 "References")References

*   For Reference, the following command starts `mongo` in all operating systems -

    docker run -d -p 27017:27017 mongo

*   Docker isn’t the only way to create containers