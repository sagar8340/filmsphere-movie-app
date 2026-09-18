import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-1">
      <span className="text-2xl:text-lg md:text-3xl">🎬</span>

      <h1 className="text-2xl:text-lg md:text-3xl font-bold">
        Movie<span className="text-yellow-400">Zone</span>
      </h1>
    </Link>
  );
};

export default Logo;