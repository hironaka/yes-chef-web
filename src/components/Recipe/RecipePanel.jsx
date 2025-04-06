import { useEffect, useState } from "react";
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
    <section className="h-full w-full flex flex-col gap-4">
      <div className="h-full bg-gray-50 rounded-md p-4 overflow-y-auto">
        {recipe ? (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{decodeHtmlEntities(recipe.name)}</h3>

            <div>
              <h4 className="font-medium mb-2">Ingredients</h4>
              <ul className="list-disc list-inside">
                {recipe.recipeIngredient?.map((ingredient, index) => (
                  <li key={index} className="mb-1">
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
                      <div key={index} className="mb-4">
                        <h5 className="font-medium mb-2">{instruction.name}</h5>
                        <ol className="list-decimal list-inside">
                          {instruction.itemListElement.map((step, stepIndex) => (
                            <li key={stepIndex} className="mb-2">
                              {step.text}
                            </li>
                          ))}
                        </ol>
                      </div>
                    );
                  } else {
                    return (
                      <li key={index} className="mb-2">
                        {instruction.text || instruction}
                      </li>
                    );
                  }
                })}
              </ol>
            </div>
          </div>
        ) : (
          <p>No recipe loaded</p>
        )}
      </div>
    </section>
  );
}
