import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-8">
      
      <div className="text-center py-8">

        <h2 className="text-2xl font-bold">
          🎬 MovieZone
        </h2>

        <p className="text-gray-400 mt-2">
          Discover your favourite movies and add them to your watchlist.
        </p>

        <div className="flex justify-center gap-6 mt-5">
          <a href="/" className="hover:text-yellow-400">
            Home
          </a>

          <a href="/watchlist" className="hover:text-yellow-400">
            Watchlist
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-6">
          © 2026 MovieZone | Powered by TMDB
        </p>

      </div>

    </footer>
  );
};

export default Footer;