import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";


export function SendTokens() {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount2 = document.getElementById("amount2").value;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }));
        console.log(transaction);

        await wallet.sendTransaction(transaction, connection);
        alert("Sent " + amount2 + " SOL to " + to);
    }

    return <div>
        <h1>Send Token</h1>
        <input id="to" type="text" placeholder="To" />
        <input id="amount2" type="text" placeholder="Amount" />
        <button onClick={sendTokens}>Send</button>
    </div>
}