# Common RPC calls on ETH

#### 

[](#c596d494aa2a4385bcf40c815c2eac9c "Get balance")Get balance

```javascript
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "eth_getBalance",
    "params": ["0xaeaa570b50ad00377ff8add27c50a7667c8f1811", "latest"]
}
```

#### 

[](#6cbfcf5cb8184bde8b3bd7132d574b3e "Get latest block")Get latest block

```javascript
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_blockNumber"
}
```

#### 

[](#f299737d0b384add81301b13ad238a86 "Get block by number")Get block by number

```javascript
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_getBlockByNumber",
  "params": ["0x1396d66", true]
}
```