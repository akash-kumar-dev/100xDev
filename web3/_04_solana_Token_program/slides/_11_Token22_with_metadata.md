# Token-22 with metadata

[https://cdn.100xdevs.com/metadata.json](https://cdn.100xdevs.com/metadata.json)

Create a token with metadata enabled

```javascript
spl-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb create-token --enable-metadata
```

Create metadata

```javascript
spl-token initialize-metadata pXfZ6Hg2s78m1iSRVsdzos9TmfkqkQdv5MmQrr77ZQK 100xx 100xxx https://cdn.100xdevs.com/metadata.json
```

Create ATA

```javascript
 spl-token create-account pXfZ6Hg2s78m1iSRVsdzos9TmfkqkQdv5MmQrr77ZQK
```

Mint

```javascript
 spl-token mint 1000
```

Check out the token in your wallet

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F7f837fe1-7a2c-4a8d-b295-1e6bce34d1b7%2FScreenshot_2024-08-23_at_6.53.42_PM.png?table=block&id=ae35dfbd-cf56-489a-b546-e451b43c5fee&cache=v2) 

### 

[](#87d2509bd05247ed9faa5d58779cf5ec "Assignment")Assignment

1.  Show all the tokens that the user has in our web based wallet

2.  Create a token launchpad website that lets users launch tokens (take things like decimals, freeze athority as inputs from the user)