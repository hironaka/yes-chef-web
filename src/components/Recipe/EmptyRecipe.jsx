"use client";

import { useState } from 'react';
import { Chrome } from 'react-feather';

export default function EmptyRecipe({ setRecipe }) {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) {
      setError('Please enter a URL.');
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/recipe/extract', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ textContent: url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch recipe.');
      }

      const recipeData = await response.json();
      
      if (recipeData.recipeFound === false) {
        throw new Error('No recipe found at the provided URL.');
      }

      setRecipe(recipeData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center">
      <p className="text-sm mb-4">Paste a URL to get started</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com/recipe"
          className="w-full max-w-md p-2 border rounded-md"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary/90 disabled:bg-gray-400"
          disabled={isLoading}
        >
          {isLoading ? 'Extracting...' : 'Start Cooking'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="flex items-center w-full max-w-md mx-auto my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-500 text-sm">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <a
        href="https://chromewebstore.google.com/detail/hpmfopnhhijgibfmdngonlnafldlngac?utm_source=item-share-cb"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 justify-center bg-gray-100 text-gray-700 py-2 px-6 rounded-full hover:bg-gray-200 transition-colors"
      >
        <Chrome size={18} />
        Install Chrome Extension
      </a>
    </div>
  );
}