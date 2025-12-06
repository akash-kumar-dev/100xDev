## Assignment

1. Complete the functions in `mintTokens.ts` and `burnTokens.ts` to mint and burn tokens.
2. Complete the function in `sendNativeTokens.ts` to send native tokens.
3. Run the server using `npm run start` and test the functionality using the `curl` command.

## Better approach

What can be a better approach to this problem?

## Hints

- Can you store all incoming events in a DB?
- Can you think of what is wrong in line 16 of index.ts?
- How can you ensure you are not double minting tokens?
- How can you ensure that you're not burning tokens without sending them to the receiver?


## webhook payload example for native token transfer by ``helius.dev``

```json
{
  "accountData": [
    {
      "account": "GkbaH1jTGFYageECNSmVucMAf1vpA9s321s28tMbMTJu",
      "nativeBalanceChange": -10105000,
      "tokenBalanceChanges": []
    },
    {
      "account": "AkashqmXWDAkEJveWDcBcK7W7NRab72M4xnjd2E9eFgN",
      "nativeBalanceChange": 10000000,
      "tokenBalanceChanges": []
    },
  ],
  "description": "GkbaH1jTGFYageECNSmVucMAf1vpA9s321s28tMbMTJu transferred 0.01 SOL to AkashqmXWDAkEJveWDcBcK7W7NRab72M4xnjd2E9eFgN.",
  "events": [],
  "fee": 105000,
  "feePayer": "GkbaH1jTGFYageECNSmVucMAf1vpA9s321s28tMbMTJu",
  "instructions": [
    {///...},
    {}
  ],
  "nativeTransfers": [
    {
      "amount": 10000000,
      "fromUserAccount": "GkbaH1jTGFYageECNSmVucMAf1vpA9s321s28tMbMTJu",
      "toUserAccount": "AkashqmXWDAkEJveWDcBcK7W7NRab72M4xnjd2E9eFgN"
    }
  ],
  "signature": "4Zxq7LNrqqsM9QMbzxtHmkTFq79QStZ4bCCFfrNAZ5tzZzGKPBVrC8oaYhN8siDmNP8XxYuqiQeSNPFnkcHNWDQH",
  "slot": 426376748,
  "source": "SYSTEM_PROGRAM",
  "timestamp": 1765003638,
  "tokenTransfers": [],
  "transactionError": null,
  "type": "TRANSFER"
}
```
