import { Game } from "../types/game"

export const GameThumbnail = (game: Game) => {
    return (
        <div className="game-thumbnail">
            <h2>{game.title}</h2>
            <img src={game.imageUrl}></img>
        </div>
    )
}