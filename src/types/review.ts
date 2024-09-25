import { Game } from "./game"

export type Review = {
    id: string,
    title: string,
    body: string,
    score: number,
    boardGame: Game,
    user: User
}