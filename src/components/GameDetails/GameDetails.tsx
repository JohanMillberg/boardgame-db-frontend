import { useQuery } from "@tanstack/react-query";
import { Game } from "../../types/game"
import './GameDetails.css';
import { getReviewsOfGame } from "../../services/backendCalls";
import { Review } from "../../types/review";

export const GameDetails = ({ id, title, imageUrl, description }: Game) => {
    const queryKey = ['gameId', id];
    const result = useQuery({ queryKey, queryFn: () => getReviewsOfGame(id) });

    if (result.isLoading) {
        return (
            <div className="loading-pane">
                <h3 className="loader">Reviews are loading...</h3>
            </div>
        )
    }

    const reviews = result?.data?.data ?? [];
    // Create review component and add here!
    return (
        <div className="game-details">
            <h2>{title}</h2>
            {imageUrl ? (<img src={imageUrl}></img>) : null}
            {reviews.map((review: Review) => review.body)}
        </div>
    )
}