import { BoardGameContainer } from "../BoardGameContainer/BoardGameContainer";
import { fetchBoardGames } from "../../services/backendCalls";
import { useQuery } from "@tanstack/react-query";
import './FrontPage.css';

export const FrontPage = () => {
    const result = useQuery({ queryKey: ["games"], queryFn: fetchBoardGames });

    if (result.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">Games are loading...</h2>
            </div>
        )
    }

    const boardGames = result?.data?.data ?? [];

    return (
        <div className="frontpage">
            <h1>Boardgame DB</h1>
            <BoardGameContainer games={boardGames} />
        </div>
    )
}