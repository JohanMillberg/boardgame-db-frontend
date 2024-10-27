import { Game } from "./game"
import { User } from "./user"

export type Review = {
    id: string,
    title: string,
    body: string,
    score: number,
    boardGame: Game,
    user: User
}