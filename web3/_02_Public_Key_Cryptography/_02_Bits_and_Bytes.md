# Bits and bytes

#### 

[](#55b4b86831d0420e8a6f98830f3dd3a5 "What is a Bit?")**What is a Bit?**

A bit is the smallest unit of data in a computer and can have one of two values: 0 or 1.

Think of a bit like a light switch that can be either off (0) or on (1).

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F4aeba811-bf4e-4c0d-83c3-ce8d72a187dc%2FZ-_21s6JSFaK8qL9HzYJvw.jpeg?table=block&id=d0640e17-515d-4ff3-9324-0e5ac47e92ca&cache=v2)

#### 

[](#79dfd468dc7949d1900efb1737bbd19a "What is a byte?")What is a byte?

A byte is a group of `8` bits. It’s the standard unit of data used to represent a single character in memory. Since each bit can be either 0 or 1, a byte can have 2^8 (256) possible values, ranging from 0 to 255

#### 

[](#d7c862d93e7541cd8aa5b3a6b5cbca78 "Assignment")Assignment

What is the `11001010` converted to a `decimals` ?

Answer

*   **2^7:** 1×27=1×128=128

*   **2^6:** 1×26=1×64=64

*   **2^5:** 0×25=0×32=0

*   **2^4:** 0×24=0×16=0

*   **2^3:** 1×23=1×8=8

*   **2^2:** 0×22=0×4=0

*   **2^1:** 1×21=1×2=2

*   **2^0:** 0×20=0×1=0 = 202

#### 

[](#b172a887f5d8447d863a1416bcbb43d1 "Representing bits and bytes in JS")Representing bits and bytes in JS

*   Bit

```javascript
const x = 0;
console.log(x);
```

*   Byte

```javascript
const x = 202
console.log(x);
```

*   Array of bytes

```javascript
const bytes = [202, 244, 1, 23]
console.log(bytes);
```

#### 

[](#447618bff8aa4d74b39894f2cdcc5d7f "UInt8Array")UInt8Array

A better way to represent an array of bytes is to use a `UInt8Array` in JS

```javascript
let bytes = new Uint8Array([0, 255, 127, 128]);
console.log(bytes)
```

Why use `UInt8Array` over `native arrays` ?

*   They use less space. Every number takes 64 bits (8 bytes). But every value in a `UInt8Array` takes 1 byte.

*   UInt8Array Enforces constraints - It makes sure every element doesn’t exceed 255.

#### 

[](#66fd418df5514f6e9c2e615eb79b6e1b "Assignment - ")Assignment -

What do you think happens to the first element here? Does it throw an error?

```javascript
let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 300;
```