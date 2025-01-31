interface Game {
    id: string; 
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

export class GameManager {
    private games: Game[] = [];
    private static instance: GameManager;
    private constructor() {
        this.games = [];
    }

    static getInstance() {
        // create a single instance of GameManager and return it
        if(GameManager.instance) {
            return GameManager.instance;
        }
        GameManager.instance = new GameManager();
        return GameManager.instance;
    }

    // if(GameManager.instance) {
    //     return GameManager.instance;
    // }
    
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

// export const gameManager = new GameManager();
// export const gameManager = GameManager.getInstance();