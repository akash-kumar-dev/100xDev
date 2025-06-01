import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export default function Airdrop() {

    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendAirdropToUser() {
        const amount = document.getElementById("sol").value;
        await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
        alert("Airdrop Sent");
    }
    return (
        <div>
            <input id="sol" type="text" placeholder="Amount" />
            <button onClick={sendAirdropToUser}>Send Airdrop</button>
        </div>
    );
}