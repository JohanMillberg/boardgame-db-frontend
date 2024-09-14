import { Game } from "../types/game";

export const fetchBoardGames = async (): Promise<{ data: Game[] }> => {
    const games = await fetch("http://localhost:3000/api/game", {
        method: "get",
        headers: new Headers({
            "Authorization": `Bearer `
        })
    });

    const result = games.json();
    return result;
}