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
          <p className="text-primary text-base font-normal mb-3 tracking-wider uppercase">
            Search for Recipes
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
            Find your next favorite meal
          </h2>
        </div>
        <div className="my-16 px-16 sm:px-20 md:px-30">
          <input
            type="text"
            placeholder="Google recipe search"
            onKeyDown={handleSearch}
            className="w-full min-w-[250px] py-4 px-6 text-base border-2 border-gray-300 rounded-full focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
            How to use Yes Chef
          </h2>
          <ol className="list-decimal list-inside space-y-4">
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-6 h-6 text-sm flex items-center justify-center mr-3 flex-shrink-0">
                1
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                Find a recipe using the search above
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-6 h-6 text-sm flex items-center justify-center mr-3 flex-shrink-0">
                2
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                Tap Download to save the recipe
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-6 h-6 text-sm flex items-center justify-center mr-3 flex-shrink-0">
                3
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                Access your saved recipes anytime
              </span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Search;