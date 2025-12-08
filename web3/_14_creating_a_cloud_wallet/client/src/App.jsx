import './App.css'
import axios from 'axios'
import {Transaction, PublicKey, Connection, SystemProgram, LAMPORTS_PER_SOL} from "@solana/web3.js"

const fromPubkey = new PublicKey("AkashqmXWDAkEJveWDcBcK7W7NRab72M4xnjd2E9eFgN");

// const connection = new Connection("https://api.mainnet-beta.solana.com/");
const connection = new Connection("https://solana-devnet.g.alchemy.com/v2/------------");

function App() {

  async function sendSol() {
    const ix = SystemProgram.transfer({
      fromPubkey: fromPubkey,
      toPubkey: new PublicKey("39oonkQJ5xGgq3ujuCn548aBqfiFDnbLyuZp2QtZj8Ej"),
      lamports: 1 * LAMPORTS_PER_SOL
    });

    const { blockhash } = await connection.getLatestBlockhash();

    const tx = new Transaction().add(ix);

    tx.recentBlockhash = blockhash;
    tx.feePayer = fromPubkey;

    // convert tx (Transaction object) to serialized transaction (byte array)
    const serializedTx = tx.serialize({
      requireAllSignatures: false,
      verifySignatures: false
    });

    console.log("Serialized Transaction: ", serializedTx);

    await axios.post("http://localhost:3000/api/v1/txn/sign", {
      message: serializedTx,
      retry: false
    });
  }

  return (
    <div>
      <input type="text" placeholder='Amount' />
      <input type="text" placeholder='Address' />
      <button onClick={sendSol}>Submit</button>
    </div>
  )
}

export default App
