#### solana CLI

```bash
solana rent 100 # rent exemption
```

##### Genrating a wallet
```bash
solana-keygen new
```

```
solana config get
solana address
solana balance
solana config set --url https://api.mainnet-beta.solana.com
```



### solana test validator 
- run solana locally
```bash
solana-test-validator 
```

---

### solana token program

- create a token
    ```
    spl-token create-token
    
    spl-token create-token --decimals 6 # 6 decimal places

    spl-token supply 3WpJzjKVDAA4hpd1sckNDk35GvxcEz7YEdfssVSVqnZT

    spl-token create-account 3WpJzjKVDAA4hpd1sckNDk35GvxcEz7YEdfssVSVqnZT
    ```