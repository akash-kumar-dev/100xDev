# Implementing services using grpc

Ref - [https://grpc.io/docs/languages/node/basics/](https://grpc.io/docs/languages/node/basics/)

*   Initialize node.js project

```javascript
npm init -y
```

*   Initialize typescript

```javascript
npx tsc --init
```

*   Add dependencies

```javascript
npm i @grpc/grpc-js @grpc/proto-loader
```

*   Create a.proto file

```javascript
syntax = "proto3";

// Define a message type representing a person.
message Person {
  string name = 1;
  int32 age = 2;
}

service AddressBookService {
  // Add a person to the address book.
  rpc AddPerson(Person) returns (Person);
  
  // Get a person from their name
  rpc GetPersonByName(GetPersonByNameRequest) returns (Person);
}

message GetPersonByNameRequest {
  string name = 1;
}
```

*   Create index.ts

```javascript
import path from 'path';
import * as grpc from '@grpc/grpc-js';
import  { GrpcObject, ServiceClientConstructor } from "@grpc/grpc-js"
import * as protoLoader from '@grpc/proto-loader';

const packageDefinition = protoLoader.loadSync(path.join(__dirname, './a.proto'));

const personProto = grpc.loadPackageDefinition(packageDefinition);

const PERSONS = [
    {
        name: "harkirat",
        age: 45
    },
    {
      name: "raman",
      age: 45
    },
];

//@ts-ignore
function addPerson(call, callback) {
  console.log(call)
    let person = {
      name: call.request.name,
      age: call.request.age
    }
    PERSONS.push(person);
    callback(null, person)
}

const server = new grpc.Server();

server.addService((personProto.AddressBookService as ServiceClientConstructor).service, { addPerson: addPerson });
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});
```

*   Run it

```javascript
tsc -b
node index.js
```

*   Test it in postman

*   File ⇒ New ⇒ GRPC
*   Import the proto file in GRPC
*   Send a request (select URL as grpc://localhost:50051)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fc8a951e3-5914-4285-9bf0-78c08ce1f5d5%2FScreenshot_2024-05-11_at_4.43.15_PM.png?table=block&id=42b4855d-45c0-472f-9942-4ab8176da9f9&cache=v2)