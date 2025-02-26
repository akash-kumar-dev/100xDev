# Adding types

Ref [https://github.com/grpc/proposal/blob/master/L70-node-proto-loader-type-generator.md](https://github.com/grpc/proposal/blob/master/L70-node-proto-loader-type-generator.md)

Ref [https://www.npmjs.com/package/@grpc/proto-loader](https://www.npmjs.com/package/@grpc/proto-loader)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fac442583-466e-4d09-bf7e-8a254b2a988b%2FScreenshot_2024-05-11_at_6.12.13_PM.png?table=block&id=0c22d3c0-2520-4abf-95f4-05281c15d9a6&cache=v2)

### 

[](#c8b9f38be5de4181acc82c5e6b0e311b "Generate types")Generate types

```javascript
./node_modules/@grpc/proto-loader/build/bin/proto-loader-gen-types.js  --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=generated a.proto
```

### 

[](#f9db411e65a140049dbea6a8a476bd1b "Update the code")Update the code

```javascript
import path from 'path';
import * as grpc from '@grpc/grpc-js';
import  { GrpcObject, ServiceClientConstructor } from "@grpc/grpc-js"
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/a';
import { AddressBookServiceHandlers } from './proto/AddressBookService';
import { Status } from '@grpc/grpc-js/build/src/constants';

const packageDefinition = protoLoader.loadSync(path.join(__dirname, './a.proto'));

const personProto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;

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

const handler: AddressBookServiceHandlers =  {
  AddPerson: (call, callback) => {
    let person = {
      name: call.request.name,
      age: call.request.age
    }
    PERSONS.push(person);
    callback(null, person)
  },
  GetPersonByName: (call, callback) => {
    let person = PERSONS.find(x => x.name === call.request.name);
    if (person) {
      callback(null, person)
    } else {
      callback({
        code: Status.NOT_FOUND,
        details: "not found"
      }, null);
    }
  }
}


const server = new grpc.Server();

server.addService((personProto.AddressBookService).service, handler);
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});
```