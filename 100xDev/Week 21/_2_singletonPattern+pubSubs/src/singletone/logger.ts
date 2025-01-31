import { GameManager } from "./store";

// const gameManager = new GameManager();

export function startLogger() {
    setInterval(() => {
        GameManager.getInstance().logState();
    }, 4000)
}
