# Common RPC calls on Solana

### 

[](#3aaff26c928241fcb118c20a638d7345 "Get account info")Get account info

Retrieves information about a specific account.

```javascript
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getAccountInfo",
  "params": ["Eg4F6LW8DD3SvFLLigYJBFvRnXSBiLZYYJ3KEePDL95Q"]
}
```

#### 

[](#e0141c8e066742fd8f9d302190624e85 "Get Balance")Get Balance

Gets the balance for a given account

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getBalance",
    "params": ["Eg4F6LW8DD3SvFLLigYJBFvRnXSBiLZYYJ3KEePDL95Q"]
}
```

#### 

[](#f56522a337f24593a58d5c26db0d6bca "Get Transaction count")Get Transaction count

```javascript
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getTransactionCount"
}
```