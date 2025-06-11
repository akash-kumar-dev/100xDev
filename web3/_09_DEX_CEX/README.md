### DEX
A DEX(Decentralized Exchange) is a cryptocurrency trading platform that operates without a centralized authority. allowing users to trade assets directly with one another (peer-to-peer) using smart contracts.
Examples: Uniswap, Raydium, MetorSwap, OrcaSwap, etc.

### CEX
A CEX(Centralized Exchange) ia a cryptocurrency trading platform that operates with a centralized authority.
Examples: Binance, Coinbase, coinDCX, etc.

#### Differences between DEX and CEX
- DEX:
    - you have the private key of your wallet.
    - No one can censor you/take your assets (not true for centralized token like USDC)
    - You have to do PrivateKey management by yourself

- CEX:
    - you delegate your assets to a central entity.
    - You do not have to do PrivateKey management
    - Govt can censor you, you have to KYC.

#### CEX
- ***Order Books :*** An order book is a digita list that displays all buy and sell orders placed by traders for a particular asset such as a cryptocurrency, stock.
- ***Bids :*** A bid is an order to buy an asset at a specific price or better.
- ***Asks :*** An ask is an order to sell an asset at a specific price or better.
- ***Liquidity :*** Liquidity refers to the ease with which an asset can be bought or sold in the market without significantly affecting its price.
- ***Market Makers :*** Market makers are individuals or entities that provide liquidity to a market by continuously buying and selling assets at predefined prices.

#### How DEX works?
1. Liquiidty Pools
2. Constant Product Algorithm
    The formula is:
    `x * y = k`
    where:
    - x is the reserve of token A (USDC)
    - y is the reserve of token B (SOL)
    - k is a constant, meaning it does not change as trades are executed.
3. ***Automated Market Makers (AMMs) :*** In decentralized exchanges, constant product formula is the pricing algorithm used in AMMs
4. Impermanent Loss

##### Jargons on a DEX
- Markets
- Swap
- Quotes
- Slippage
- Slippage Tolerance

***Slippage :*** Slippage refers to the difference between the expected price of a trade and the actual price at which the trade is executed.

It occurs due to-
- Market volatility
- Order size
- Market conditions - During periods of low trading volume or high demand for a specific asset, slippage is more likely to occur.

Slippage can be positive or negative:
- Positive slippage: when a trade is executed at a better price than expected.
- Negative slippage: when a trade is executed at a worse price than expected.

### DEX Aggregator
A DEX aggregator is a platform that sources liquidity from multiple decentralized exchanges (DEXs) to provide users with the best possible price for their trades.
Examples: Jupiter, 1inch, 0x, etc.

- ***Impermanent loss*** - https://www.gemini.com/cryptopedia/decentralized-finance-impermanent-loss-defi
- ***DLMMS, CLMMs*** - https://medium.com/@innocentnweke/why-and-how-to-use-dlmm-dynamic-liquidity-market-maker-9c97a41321b6

- [Jupiter Swap API Docs](https://dev.jup.ag/docs/old/apis/swap-api)
