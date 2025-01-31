# State in JS process

How/where can you store `state` in a Javascript process

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fd0373aa2-24cb-453d-a928-f17dd1b0bd31%2FScreenshot_2024-04-21_at_4.50.02_PM.png?table=block&id=647af916-8ea2-45dd-b00e-029cf5d066a6&cache=v2)

This state might being used by multiple files, not just one, so the following approach might not work

Lets try the following -

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F8160538f-0927-4d6d-af43-f8fb76b5a298%2FScreenshot_2024-04-21_at_5.00.34_PM.png?table=block&id=6cbb6f16-62ad-4c18-9ea0-e05c371b71cb&cache=v2)

*   index.ts - pushes to games array

```javascript
import { games } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    games.push({
        "whitePlayer": "harkirat",
        "blackPlayer": "jaskirat",
        moves: []
    })
}, 5000)
```

*   logger.ts - uses the games array

```javascript
import { games } from "./store";

export function startLogger() {
    setInterval(() => {
        console.log(games);
    }, 4000)
}
```

*   store.ts - Exports the game array

```javascript
interface Game {
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

export const games: Game[] = [];
```

This will work, but a lot of times you need to attach functionality to `state` as well.

Let’s see how can we create a class called `GameManager` and expose some functions on it that can be called by files using it

💡

There are other ways of storing state in a TS project as well, redux being a popular one. Yes, you can use redux in the backend as well