import { Game } from "../types/game";
import { api } from './api';

export const fetchBoardGames = async (): Promise<{ data: Game[] }> => {
    const games = await api.get("api/game");
    const result = games.json();
    return result;
}