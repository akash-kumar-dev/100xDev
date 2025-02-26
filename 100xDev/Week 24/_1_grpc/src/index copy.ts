import path from 'path';
import * as grpc from '@grpc/grpc-js';
import  { GrpcObject, ServiceClientConstructor } from "@grpc/grpc-js"
import * as protoLoader from '@grpc/proto-loader';
const packageDefinition = protoLoader.loadSync(path.join(__dirname, '../src/a.proto'));

// const personProto = grpc.loadPackageDefinition(packageDefinition);
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
// call => req
// callback => res
function addPerson(call, callback) {
  console.log(call)
    let person = {
      name: call.request.name,
      age: call.request.age
    }
    PERSONS.push(person);
    callback(null, person)
    // callback(error, response);
}

// @ts-ignore
function getPersonByName(call, callback) {
    const name = call.request.name;
    const person = PERSONS.find(p => p.name === name);
    callback(null, person);
}

// const app = express()
const server = new grpc.Server();

// app.use("/person", routeHandler)
// server.addService((personProto.AddressBookService as ServiceClientConstructor).service, { addPerson: addPerson });
// server.addService((personProto.AddressBookService).service, { addPerson: addPerson });
// @ts-ignore
server.addService((personProto.AddressBookService).service, {
    addPerson: addPerson,
    getPersonByName: getPersonByName
});


server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});