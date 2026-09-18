import React from 'react'

export const Remove = ({ movie, watchlist, setWatchlist }) => {
    const remove_card = () => {
        const current_cards = JSON.parse(localStorage.getItem("latest_watchlist_data")) || [];
        let updated_cards = current_cards.filter(card => card.id !== movie.id);
        localStorage.setItem("latest_watchlist_data", JSON.stringify(updated_cards))
        setWatchlist(updated_cards)
    }
    return (
        <button onClick={remove_card} className="py-1.5 px-11 bg-red-500 font-bold rounded cursor-pointer active:scale-95">Remove</button>
    )
}
