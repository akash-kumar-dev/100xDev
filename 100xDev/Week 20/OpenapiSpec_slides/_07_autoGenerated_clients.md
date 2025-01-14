# Auto generated clients

Given you have a yaml/json file that describes the `shape` of your routes, lets try generating a `ts` client that we can use in a `Node.js` / `React` app to talk to the backend

Ref [https://www.npmjs.com/package/openapi-typescript-codegen](https://www.npmjs.com/package/openapi-typescript-codegen)

1.  Store the OpenAPI Spec in a file (spec.json)

```javascript
{
  "openapi": "3.0.0",
  "info": {
    "version": "1.0.0",
    "title": "My API"
  },
  "components": {
    "schemas": {
      "User": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "example": "123"
          },
          "name": {
            "type": "string",
            "example": "John Doe"
          },
          "age": {
            "type": "number",
            "example": 42
          }
        },
        "required": [
          "id",
          "name",
          "age"
        ]
      }
    },
    "parameters": {

    }
  },
  "paths": {
    "/users/{id}": {
      "get": {
        "parameters": [
          {
            "schema": {
              "type": "string",
              "minLength": 3,
              "example": "1212121"
            },
            "required": true,
            "name": "id",
            "in": "path"
          }
        ],
        "responses": {
          "200": {
            "description": "Retrieve the user",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          }
        }
      }
    }
  }
}
```

2\. Generate the client

```javascript
npx openapi-typescript-codegen --input ./spec.json --output ./generated
```

1.  Explore the client

```javascript
cd generated
cat index.ts
```

1.  Use it in a different project