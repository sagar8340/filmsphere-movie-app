import React from 'react'

export const Addbtn = ({ movie, watchlist, setWatchlist, genre_name }) => {

  return (
    <button
      onClick={() => {
        setWatchlist(
          prev => {
            const alreadyExist = prev.some(item=>item.id === movie.id);
            if(alreadyExist){
              return prev;
            } 
            let current_data = [...prev, { ...movie, genre_name }];
           localStorage.setItem("latest_watchlist_data", JSON.stringify(current_data))
           return current_data;
        }
      );
      }}
      
      className="p-1.5 bg-yellow-400 font-bold rounded cursor-pointer active:scale-95"
    >
      Add to watchlist
    </button>
  );
};
export default Addbtn;
