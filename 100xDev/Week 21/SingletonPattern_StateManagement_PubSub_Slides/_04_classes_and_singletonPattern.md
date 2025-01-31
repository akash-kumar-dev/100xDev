# Classes and Singleton pattern

Let’s create a class that

1.  Stores games

2.  Exposes functions that let you mutate the state

```javascript
interface Game {
    id: string; 
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

export class GameManager {
    private games: Game[] = [];

    public addGame(game: Game) {
        this.games.push(game);
    }

    public getGames() {
        return this.games;
    }

    // e5e7
    public addMove(gameId: string, move: string) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }

    public logState() {
        console.log(this.games);
    }
}
```

### 

[](#9eb2b8c793a14b3a8109954df9bb4518 "Bad approach")Bad approach

Create saparate instance of `GameManager` in every file that needs it

GameManager.ts

```javascript
interface Game {
    id: string; 
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

export class GameManager {
    private games: Game[] = [];

    public addGame(game: Game) {
        this.games.push(game);
    }

    public getGames() {
        return this.games;
    }

    // e5e7
    public addMove(gameId: string, move: string) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }
}
```

logger.ts

```javascript
import { GameManager } from "./GameManager";

const gameManager = new GameManager();

export function startLogger() {
    setInterval(() => {
        gameManager.logState();
    }, 4000)
}
```
index.ts

```javascript
import { GameManager } from "./GameManager";
import { startLogger } from "./logger";

const gameManager = new GameManager();

startLogger();

setInterval(() => {
    gameManager.addGame({
        id: Math.random().toString(),
        "whitePlayer": "harkirat",
        "blackPlayer": "jaskirat",
        moves: []
    })
}, 5000)
```

### 

[](#2d3b1af058b5456a90acf5e034709538 "Slightly Better approach")Slightly Better approach

Export a single instance of `gameManager` from `GameManager.ts` and use it everywhere

### 

[](#79ab33fadb244179be2972dbdff2d93e "Even better approach - Singleton Pattern")Even better approach - Singleton Pattern

Completely prevent any developer from ever creating a new instance of the `GameManager` class

#### 

[](#f3c04a57a5d74674940df7f56dade74a "Static attributes - ")Static attributes -

In JavaScript, the keyword `**static**` is used in classes to declare static methods or static properties. Static methods and properties belong to the class itself, rather than to any specific instance of the class. Here’s a breakdown of what this means

Example of a class with static attributes

```javascript
class Example {
    static count = 0;

    constructor() {
        Example.count++;  // Increment the static property using the class name
    }
}

let ex1 = new Example();
let ex2 = new Example();
console.log(Example.count);  // Outputs: 2
```

```javascript
interface Game {
    id: string;
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

export class GameManager {
    private static instance: GameManager; // Create a static instance of the class
    private games: Game[] = [];

    private constructor() {
        // Private constructor ensures that a new instance cannot be created from outside
    }

    public static getInstance(): GameManager {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }
    // ... other methods
}

// Usage GameManager.getInstance().addGame()
```

GameManager.ts

```javascript
interface Game {
    id: string;
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

export class GameManager {
    private static instance: GameManager; // Create a static instance of the class
    private games: Game[] = [];

    private constructor() {
        // Private constructor ensures that a new instance cannot be created from outside
    }

    public static getInstance(): GameManager {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }

    public addGame(game: Game) {
        this.games.push(game);
    }

    public getGames() {
        return this.games;
    }

    public addMove(gameId: string, move: string) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }

    public logState() {
        console.log(this.games);
    }
}
```
logger.ts

```javascript
import { GameManager } from "./GameManager";

export function startLogger() {
    setInterval(() => {
        GameManager.getInstance().logState();
    }, 4000)
}
```
index.ts

```javascript
import { GameManager } from "./GameManager";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    GameManager.getInstance().addGame({
        id: Math.random().toString(),
        "whitePlayer": "harkirat",
        "blackPlayer": "jaskirat",
        moves: []
    })
}, 5000)
```

Try creating a new instance of the `GameManager` class. Notice it wont let you.