import { Game } from '../../types/game'
import { GameThumbnail } from '../GameThumbnail/GameThumbnail'
import './BoardGameContainer.css'

export const BoardGameContainer = ({ games }: { games: Game[] }) => {
    return (
        <div className="boardgame-container">
            {games.map((game: Game) => <GameThumbnail id={game.id} title={game.title} imageUrl={game.imageUrl} description={game.description} key={game.title} />)}
        </div>
    )
}
