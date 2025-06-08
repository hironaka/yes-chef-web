import { useEffect, useState } from "react";
import Image from 'next/image';
// Function to decode HTML entities safely
function decodeHtmlEntities(text) {
  // Check if running in a browser environment and text is valid
  if (typeof window === 'undefined' || !text) {
    return text;
  }
  try {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  } catch (e) {
    console.error("Error decoding HTML entities:", e);
    return text; // Return original text on error
  }
}

export default function RecipePanel({
  recipe,
  isSessionActive,
  sendClientEvent,
  events,
}) {
  useEffect(() => {
    if (recipe) {
      console.log("RecipePanel received recipe data:", JSON.stringify(recipe, null, 2));
    } else {
      console.log("RecipePanel received null/undefined recipe.");
    }
  }, [recipe]);
  return (
    <section className="w-full flex flex-col gap-4"> {/* Removed h-full */}
      <div className="bg-gray-50 rounded-md p-4 overflow-y-auto"> {/* Removed h-full */}
        {recipe ? (
          <div> {/* Removed space-y-4 */}
            <h3 className="text-lg font-semibold text-center mb-6">{decodeHtmlEntities(recipe.name)}</h3>
            {/* Add Grid Container with conditional height/overflow */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-h-[45vh] overflow-y-auto`}>

            <div>
              <h4 className="font-medium mb-2 text-base">Ingredients</h4>
              <ul className="list-disc list-inside">
                {recipe.recipeIngredient?.map((ingredient, index) => (
                  <li key={index} className="mb-1 text-sm">
                    {typeof ingredient === 'string' ? ingredient : ingredient.name}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ol className="list-decimal list-inside">
                {recipe.recipeInstructions?.map((instruction, index) => {
                  if (instruction["@type"] === "HowToSection") {
                    return (
                      <div key={index} className="mb-4 space-y-3"> {/* Container for section */}
                        <h5 className="font-medium text-base mb-2">{decodeHtmlEntities(instruction.name)}</h5>
                        {/* Loop for HowToStep items */}
                        <ol className="list-decimal space-y-3 pl-5">
                          {instruction.itemListElement?.map((howToStep, stepIndex) => (
                            <li key={stepIndex} className="mb-2 space-y-1"> {/* Container for step */}
                              {/* Render Step Name (if exists) */}
                              {howToStep.name && (
                                <h6 className="font-semibold text-sm">{decodeHtmlEntities(howToStep.name)}</h6>
                              )}
                              {/* Render Step Description (if exists) */}
                              {howToStep.description && (
                                <p className="text-xs text-gray-600">{decodeHtmlEntities(howToStep.description)}</p>
                              )}

                              {/* Render EITHER tips OR the main step text */}
                              {howToStep.itemListElement ? (
                                // Render Tips if they exist
                                <ul className="list-none pl-4 space-y-2 mt-2"> {/* Indent tips */}
                                  {howToStep.itemListElement.map((tip, tipIndex) => (
                                    <li key={tipIndex} className="flex items-start gap-2">
                                      {tip.thumbnailUrl && (
                                        <Image src={tip.thumbnailUrl} alt={decodeHtmlEntities(tip.text || 'Tip image')} width={64} height={64} className="w-16 object-cover flex-shrink-0 mt-1 rounded" />
                                      )}
                                      <p className="text-xs flex-1">{decodeHtmlEntities(tip.text)}</p> {/* Ensure text takes remaining space */}
                                    </li>
                                  ))}
                                </ul>
                              ) : howToStep.text ? (
                                // Otherwise, render Step Text if it exists
                                <p className="text-sm">{decodeHtmlEntities(howToStep.text)}</p>
                              ) : null /* Handle case where a step might have name/desc but no text/tips */}
                            </li>
                          ))}
                        </ol>
                      </div>
                    );
                  } else {
                    return (
                      <li key={index} className="mb-2 text-sm">
                        {instruction.text || instruction}
                      </li>
                    );
                  }
                })}
              </ol>
            </div>
            </div> {/* Close Grid Container */}
          </div>
        ) : (
          <p className="text-sm">No recipe loaded</p>
        )}
      </div>
    </section>
  );
}
