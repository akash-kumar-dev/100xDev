# Requesting airdrop (Creating a faucet)

Create something like - [https://solfaucet.com/](https://solfaucet.com/)

**Hints**

*   `@solana/web3.js` provides you with a `requestAirdrop` function.

*   You can get the `current users` public key using the `useWallet` hook

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F03531f61-e73d-4491-ad27-eb19a4d05588%2FScreenshot_2024-08-30_at_5.40.32_PM.png?table=block&id=829254da-87ce-4aa4-98ad-dc163d41ecd7&cache=v2)

```javascript

export function RequestAirdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function requestAirdrop() {
        let amount = document.getElementById("amount").value;
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    }

    return <div>
        <br/><br/>
        <input id="amount" type="text" placeholder="Amount" />
        <button onClick={requestAirdrop}>Request Airdrop</button>
    </div>
}
```