# Showing user balance

```javascript
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowSolBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function getBalance() { 
        if (wallet.publicKey) {

            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
        }
    }
    
    getBalance();
    return <div>
        <p>SOL Balance:</p> <div id="balance"></div>
    </div>
}
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fac1626fd-f36b-446c-b114-6e9531385ad9%2FScreenshot_2024-08-30_at_5.40.22_PM.png?table=block&id=358c80c0-909f-4944-82d4-82b2a2ebb6a6&cache=v2)