import { useState, useEffect } from 'react'
import './App.css'
import { Game } from './types/game';
import { GameThumbnail } from './components/GameThumbnail/GameThumbnail';
import { BoardGameContainer } from './components/BoardGameContainer/BoardGameContainer';

function App() {
  const [boardgames, setBoardGames] = useState<Game[]>([])

  const loadBoardGames = async () => {
    const games = await fetch("http://localhost:3000/api/game", {
      method: "get",
      headers: new Headers({
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExZDczNmQyLTAxN2YtNDM3MC1iOTI0LTRhYzE1NjdkZWZlNSIsInVzZXJuYW1lIjoiam9oYW4iLCJpYXQiOjE3MjYzMDcwOTF9.d8nAnzS2JwSE4aljIJrhFGH_fihd1HLm6DGDTt7-Wc4`
      })
    });

    const result = await games.json();
    setBoardGames(result.data.map((game: Game) => {
      return { title: game.title, imageUrl: game.imageUrl }
    }))
  }

  useEffect(() => {
    loadBoardGames();
  }, [])

  return (
    <>
      <h1>Boardgame DB</h1>
      <BoardGameContainer games={boardgames} />
    </>
  )
}

export default App
