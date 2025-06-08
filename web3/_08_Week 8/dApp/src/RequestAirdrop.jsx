import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export function RequestAirdrop() {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function requestAirdrop() {
        const publicKey = wallet.publicKey;
        const amount = document.getElementById("amount").value;
        await connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL)

        alert("Requesting airdrop")
    }

    return <div>
        <h1>Request Airdrop</h1>
        {wallet.publicKey?.toBase58()} <br />
        <input id="amount" type="text" placeholder="Amount" />
        <button onClick={requestAirdrop}>Request Airdrop</button>
    </div>
}