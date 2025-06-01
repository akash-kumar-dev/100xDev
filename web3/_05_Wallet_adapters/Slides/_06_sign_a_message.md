# Sign a message

### 

[](#59503999d19c4e0fa859ad229a8c2eb8 "Usage")Usage

Prove ownership of a wallet to a centralised backend. For eg - [https://www.tensor.trade/rewards](https://www.tensor.trade/rewards)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F8698befa-ce34-4e82-8f28-78b9902e4a9c%2FScreenshot_2024-08-30_at_7.38.32_PM.png?table=block&id=582e646b-3176-430b-b973-b1d1f2b3f408&cache=v2)

Ref - [https://github.com/anza-xyz/wallet-adapter/blob/3761cd8cc867da39da7c0b070bbf8779402cff36/packages/starter/example/src/components/SignMessage.tsx#L9](https://github.com/anza-xyz/wallet-adapter/blob/3761cd8cc867da39da7c0b070bbf8779402cff36/packages/starter/example/src/components/SignMessage.tsx#L9)

### 

[](#459731ac07984d99820777243b3b48d2 "How to sign messages")How to sign messages

*   Install `@noble/curves`

```javascript
npm install @noble/curves
```

*   Coding the `SignMessage` component

```javascript
import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React from 'react';

export function SignMessage() {
    const { publicKey, signMessage } = useWallet();

    async function onClick() {
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');
        
        const message = document.getElementById("message").value;
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
        alert('success', `Message signature: ${bs58.encode(signature)}`);
    };

    return (
        <div>
            <input id="message" type="text" placeholder="Message" />
            <button onClick={onClick}>
                Sign Message
            </button>
        </div>
    );
};
```