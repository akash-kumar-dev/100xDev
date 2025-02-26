# Types in pbf

Protobuffs give you access to a lot of types/enums/message types

1.  **Scalar Types:**

*   **int32, int64, uint32, uint64:** Signed and unsigned integers of various sizes.

*   **float, double:** Floating-point numbers.

*   **bool:** Boolean values (true or false).

*   **string:** Unicode text strings.

*   **bytes:** Arbitrary binary data.

```javascript
syntax = "proto3";

// Define a message type representing an address.
message Address {
  string street = 1;
  string city = 2;
  string state = 3;
  string zip = 4;
}

// Define a message type representing a person.
message Person {
  string name = 1;
  int32 age = 2;
  Address address = 3;
}
```

2.  **Message Types:**

*   Message types allow you to define structured data with nested fields. They can contain scalar types, other message types, or repeated fields (arrays).

*   You define message types using the `**message**` keyword followed by the name of the message type and its fields.

```javascript
message Person {
  string name = 1;
  int32 age = 2;
  repeated string phone_numbers = 3;
}
```

1.  **Enum Types:**

*   Enum types define a set of named constant values.

*   You define enum types using the `**enum**` keyword followed by the name of the enum type and its values.

```javascript
enum PhoneType {
  MOBILE = 0;
  HOME = 1;
  WORK = 2;
}
```

1.  Maps

```javascript
message MapMessage {
  map<string, int32> id_to_age = 1;
}
```

### 

[](#00632a456d394472adcc6ffe0728fd35 "Trying a more complicated proto")Trying a more complicated proto

```javascript
syntax = "proto3";

// Define an enum representing the type of phone numbers.
enum PhoneType {
  MOBILE = 0;
  HOME = 1;
  WORK = 2;
}

// Define a message type representing a phone number.
message PhoneNumber {
  string number = 1;
  PhoneType type = 2;
}

// Define a message type representing an address.
message Address {
  string street = 1;
  string city = 2;
  string state = 3;
  string zip = 4;
}

// Define a message type representing a person.
message Person {
  string name = 1;
  int32 age = 2;
  repeated PhoneNumber phone_numbers = 3;
  Address address = 4;
}
```

Try using it in