import { Game } from "../types/game";
import { Review } from "../types/review";
import { api } from './api';

export const fetchBoardGames = async (): Promise<{ data: Game[] }> => {
    const games = await api.get("api/game");
    const result = games.json();
    return result;
}

export const getReviewsOfGame = async (gameId: string): Promise<{ data: Review[] }> => {
    const reviews = await api.get(`api/game/${gameId}/reviews`);
    const result = reviews.json();
    return result;
}