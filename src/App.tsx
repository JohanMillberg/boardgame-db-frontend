import { useState, useEffect } from 'react'
import './App.css'
import { Game } from './types/game';

function App() {
  const [boardgames, setBoardGames] = useState<Game[]>([])

  const loadBoardGames = async () => {
    const games = await fetch("http://localhost:3000/api/game", {
      method: "get",
      headers: new Headers({
        "Authorization": `Bearer `
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
      <button onClick={loadBoardGames} ></button>
      <div className="card">
        {boardgames.map((game: Game) => {
          return (
            <h1>{game.title}</h1>
          )
        })}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
