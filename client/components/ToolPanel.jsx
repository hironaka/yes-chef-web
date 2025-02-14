import { useEffect, useState } from "react";

const sessionUpdate = {
  type: "session.update",
  session: {
    "instructions": "You are a helpful sous-chef working as an assistant to a chef. Give small step by step instructions. Only move on when the chef is ready.",
    "temperature": 0.1,
  },
};

export default function ToolPanel({
  recipe,
  isSessionActive,
  sendClientEvent,
  events,
}) {
  const [systemInstructionAdded, setSystemInstructionAdded] = useState(false);

  useEffect(() => {
    if (!events || events.length === 0) return;

    const firstEvent = events[events.length - 1];
    if (!systemInstructionAdded && firstEvent.type === "session.created") {
      sendClientEvent(sessionUpdate);
      setSystemInstructionAdded(true);
    }
  }, [events]);

  useEffect(() => {
    if (!isSessionActive) {
      setSystemInstructionAdded(false);
    }
  }, [isSessionActive]);

  return (
    <section className="h-full w-full flex flex-col gap-4">
      <div className="h-full bg-gray-50 rounded-md p-4 overflow-y-auto">
        {recipe ? (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{recipe.name}</h3>

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
