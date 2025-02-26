# Implementing services

This is what our proto file looks like

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
  rpc GetPersonByName(string) returns (Person);
}
```

There is a `service` section which describes all the services our server would support. But `protobufs` are not used for service creation.

While the concept of a service exists in Protocol Buffers, it's up to the developer to choose how to implement the RPC communication. gRPC is one such RPC framework that uses Protocol Buffers for defining services and messages, but other frameworks or custom implementations can also be used.