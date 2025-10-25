"use client";
import React from "react";

const Search = () => {
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const query = event.currentTarget.value;
      window.open(`https://www.google.com/search?q=${query}`, "_blank");
    }
  };

  return (
    <section id="search-section">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="text-center">
          <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
            Search for Recipes
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
            Find your next favorite meal
          </h2>
        </div>
        <div className="my-16 px-16 sm:px-20 md:px-40 lg:px-80">
          <input
            type="text"
            placeholder="Google recipe search"
            onKeyDown={handleSearch}
            className="w-full p-2 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Search;