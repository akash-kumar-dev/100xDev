require('dotenv').config();
const express = require('express');
const { userModel } = require('./models');
const { Keypair, Transaction, Connection } = require('@solana/web3.js');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bs58 = require('bs58');

const JWT_SECRET = "1234";
const app = express();
app.use(express.json());
app.use(cors());

const connection = new Connection("https://solana-devnet.g.alchemy.com/v2/------------");

app.post("/api/v1/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const Keypair = Keypair.generate();

    await userModel.create({
        username,
        password,
        publicKey: Keypair.publicKey.toString(),
        privateKey: Keypair.secretKey.toString()
    })

    res.json({
        message: "User created successfully",
        publicKey: Keypair.publicKey.toString()
    })
});

app.post("/api/v1/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await userModel.findOne({ username, password });

    if(!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    
    res.json({
        message: "Login successful",
        token
    });
});

app.post("/api/v1/txn/sign", async (req, res) => {
    const serializedTx = req.body.message;
    // console.log("Received serialized transaction: ", serializedTx);

    const tx = Transaction.from(Buffer.from(serializedTx.data));
    // console.log("Deserialized Transaction: ", tx);

    const {blockhash} = await connection.getLatestBlockhash();
    tx.recentBlockhash = blockhash;

    console.log(process.env.PRIVATE_KEY);

    const keyPair = Keypair.fromSecretKey(bs58.default.decode(process.env.PRIVATE_KEY));
    tx.sign(keyPair);

    const signature = await connection.sendTransaction(tx, [keyPair]);

    res.json({
        message: "Transaction signed and sent",
        signature
    });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});