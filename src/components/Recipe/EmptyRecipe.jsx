"use client";

import { useState, useRef } from 'react';
import { Chrome, Link as LinkIcon, UploadCloud } from 'react-feather';

export default function EmptyRecipe({ setRecipe }) {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleUrlSubmit = async (e) => {
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
        console.log('Error response:', errorData);
        throw new Error('Failed to fetch recipe.');
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle the image upload logic here
      console.log('Selected file:', file.name);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-8">Access Any Recipe, Instantly</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Section 1: Paste Recipe URL */}
        <div className="p-6 rounded-lg shadow-lg flex flex-col items-center">
          <LinkIcon size={48} className="mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">Paste Recipe Url</h2>
          <p className="text-sm text-gray-600 mb-4 flex-grow">
            Paste a recipe URL from any website to instantly import the recipe into your Recipe Assistant. This method is ideal for quickly adding recipes from your favorite food blogs or recipe websites.
          </p>
          <form onSubmit={handleUrlSubmit} className="w-full flex flex-col items-center gap-4 mt-auto">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/recipe"
              className="w-full p-2 border rounded-md"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary/90 disabled:bg-gray-400 w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Extracting...' : 'Import Recipe'}
            </button>
          </form>
        </div>

        {/* Section 2: Get Chrome Extension */}
        <div className="p-6 rounded-lg shadow-lg flex flex-col items-center">
          <Chrome size={48} className="mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">Get Chrome Extension</h2>
          <p className="text-sm text-gray-600 mb-4 flex-grow">
            Install our Chrome extension to easily save recipes from any webpage with a single click. This extension integrates seamlessly with your browser, making it effortless to collect and organize recipes as you browse the web.
          </p>
          <a
            href="https://chromewebstore.google.com/detail/hpmfopnhhijgibfmdngonlnafldlngac?utm_source=item-share-cb"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-auto"
          >
            <button
              className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary/90 w-full"
            >
              Install Extension
            </button>
          </a>
        </div>

        {/* Section 3: Upload Recipe Image */}
        <div className="p-6 rounded-lg shadow-lg flex flex-col items-center">
          <UploadCloud size={48} className="mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">Upload Recipe Image</h2>
          <p className="text-sm text-gray-600 mb-4 flex-grow">
            Upload an image of a recipe from a cookbook, magazine, or handwritten note. Our system will automatically extract the recipe details, allowing you to digitize and save your favorite recipes from any source.
          </p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
            accept="image/png, image/jpeg, image/webp"
          />
          <button
            onClick={triggerFileUpload}
            className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary/90 w-full mt-auto"
          >
            Upload Image
          </button>
        </div>
      </div>
    </div>
  );
}
