# Proto buffs

Ref [https://protobuf.dev/](https://protobuf.dev/)

Protocol buffers are Google’s language-neutral, platform-neutral, extensible mechanism for serializing structured data – think XML, JSON.

The protocol buffers are where we define our service definitions and messages. This will be like a contract or common interface between the client and server on what to expect from each other; the methods, types, and returns of what each operation would bear.

1.  **Schema Definition Language:** Protocol Buffers use a schema definition language (`**.proto**` files) to define the structure of data. This language allows you to specify message types, fields, enums, and services.

2.  **Binary Serialization:** Protocol Buffers serialize data into a binary format, which is more compact and efficient compared to text-based formats like XML and JSON.

3.  **Language Support and Code Generation:** Protocol Buffers support code generation for a wide range of programming languages, including C++, Java, Go, Python, JavaScript, Ruby, and more. Protocol Buffers come with tools (e.g., `**protoc**`) that generate code in various programming languages based on your `**.proto**` files.

Let’s create a simple Proto file

message.proto

```javascript
syntax = "proto3";

// Define a message type representing a person.
message Person {
  string name = 1;
  int32 age = 2;
}

service PersonService {
  // Add a person to the address book.
  rpc AddPerson(Person) returns (Person);
  
  // Get a person from their name
  rpc GetPersonByName(GetPersonByNameRequest) returns (Person);
}

message GetPersonByNameRequest {
  string name = 1;
}
```

There are a few things to unpack here -

*   `message` - A message that can be encoded/decoded/transferred

*   types

*   string
*   int32

*   service - Describes what all `rpc` methods you support

*   **Field numbers**

In Protocol Buffers, each field within a message type is assigned a unique numerical identifier called a tag or field number. These field numbers serve several purposes:

1.  **Efficient Encoding:** Field numbers are used during serialization and deserialization to efficiently encode and decode the data. Instead of including field names in the serialized data, Protocol Buffers use field numbers, which are typically more compact and faster to process.

2.  **Backward Compatibility:** Field numbers are stable identifiers that remain consistent even if you add, remove, or reorder fields within a message type. This means that old serialized data can still be decoded correctly by newer versions of your software, even if the message type has changed.

3.  **Language Independence:** Field numbers provide a language-independent way to refer to fields within a message type. Regardless of the programming language used to generate the code, the field numbers remain the same, ensuring interoperability between different implementations.

### 

[](#5ec12b0ece9048c9a2553e99b49a7b5d "Seializing and deserializing data (easy)")Seializing and deserializing data (easy)

[https://www.protobufpal.com/](https://www.protobufpal.com/)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Ff46317ea-b50c-45b2-8815-615b1e7f33b3%2FScreenshot_2024-05-11_at_5.03.35_PM.png?table=block&id=1a2f4991-e6e4-47ec-be58-f2d5e3def4c4&cache=v2)

### 

[](#acf3b8a6673245859d0ca9412c28c05a "Serializing and deserializing data (hard)")Serializing and deserializing data (hard)

*   Create a.proto

*   npm init -y

*   npm i protobufjs

```javascript
const protobuf = require('protobufjs');

// Load the Protocol Buffers schema
protobuf.load('a.proto')
  .then(root => {
    // Obtain the Person message type
    const Person = root.lookupType('Person');

    // Create a new Person instance
    const person = { name: "Alice", age: 30 };

    // Serialize Person to a buffer
    const buffer = Person.encode(person).finish();

    // Write buffer to a file
    require('fs').writeFileSync('person.bin', buffer);

    console.log('Person serialized and saved to person.bin');

    // Read the buffer from file
    const data = require('fs').readFileSync('person.bin');

    // Deserialize buffer back to a Person object
    const deserializedPerson = Person.decode(data);

    console.log('Person deserialized from person.bin:', deserializedPerson);
  })
  .catch(console.error);
```

*   Check the size of person.bin

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fdf26ea4d-bcb9-4c76-9344-047bc420a924%2FScreenshot_2024-05-11_at_3.40.03_PM.png?table=block&id=7c554a6b-efd8-490d-b2c4-b2c11135cbee&cache=v2)

*   Create a `person.json` file and check it’s size

```javascript
{
  name: "Alice",
  age: 31
}
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F792862ec-8502-4ca2-a9f1-cc64ef53fd09%2FScreenshot_2024-05-11_at_3.41.02_PM.png?table=block&id=e6f7839f-917d-4b50-b5d4-05fff9d028fe&cache=v2)