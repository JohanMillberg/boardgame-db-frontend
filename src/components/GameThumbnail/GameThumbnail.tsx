import { Game } from "../../types/game"
import './GameThumbnail.css'

export const GameThumbnail = ({ title, imageUrl }: Game) => {
    return (
        <div className="game-thumbnail">
            <h2>{title}</h2>
            <img src={imageUrl}></img>
        </div>
    )
}
