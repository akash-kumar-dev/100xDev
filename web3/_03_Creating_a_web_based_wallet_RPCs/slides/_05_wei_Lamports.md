# Wei, Lamports

## 

[](#6bc4226a63d542fb821789a7b4e6c8e7 "ETH")ETH

**Wei**:

*   **Definition**: Wei is the smallest unit of cryptocurrency in the Ethereum network. It's similar to how a cent is to a dollar.

*   **Value**: 1 Ether (ETH) = 10^18 Wei.

**Gwei**

*   **Definition**: A larger unit of Ether commonly used in the context of gas prices.

*   **Conversion**: 1 Ether = 10^9 gwei

### 

[](#f2b551955957450f850831f100797626 "Lamports")Lamports

*   In the Solana blockchain, the smallest unit of currency is called a **lamport**. Just as wei is to Ether in Ethereum, lamports are to SOL (the native token of Solana).

*   1 SOL = 10 ^ 9 Lamports

```javascript
const { LAMPORTS_PER_SOL } = require("@solana/web3.js")

console.log(LAMPORTS_PER_SOL)
```