/**
 * Local test for recipe extraction logic using Milk Street sample text.
 * Run this with: npx tsx src/lib/extractor.test.ts
 */

import { extractRecipe } from "./extractor";

const MILK_STREET_SAMPLE = `
Skip to main content
ADVERTISEMENT

Chocolate-Almond Spice Cookies
MAKES 24 cookies
COOK TIME 1 1/4 hours
ACTIVE TIME PLUS COOLING 30 minutes active, plus cooling
RATING 13

Made this recipe?
This recipe is a loose interpretation of the Swiss chocolate-almond holiday cookie known as Basler brunsli. Traditionally, the dough is rolled and cut into shapes before baking, but we opted for an easier drop cookie studded with bits of chocolate. Even without butter, these cookies are intensely rich—and they happen to be gluten-free, too. Both Dutch-processed cocoa and natural cocoa work. If you have a 2-tablespoon spring-loaded scoop, use it for portioning the dough; otherwise, two soup spoons get the job done. The dough can be made ahead and refrigerated in an airtight container for up to 24 hours; bring to room temperature before shaping and baking. The baked and cooled cookies keep well in a well-sealed container at room temperature for up to two days.
TIP
Don’t skip toasting the almond flour; it gives the cookies a fuller, deeper flavor. But don't forget to allow the almond flour to cool after toasting; if the flour is too hot when the egg whites are added, the whites will cook. Take care not to overbake the cookies or they will become tough.
INGREDIENTS

Copy
¾ teaspoon ground cinnamon
½ teaspoon ground cardamom
½ teaspoon ground ginger
54 grams (¼ cup) plus 285 grams (1⅓ cups) white sugar
250 grams (2½ cups) blanched almond flour
21 grams (¼ cup) cocoa powder
½ teaspoon table salt
4 large egg whites, lightly beaten
1 ½ teaspoons vanilla extract
5 ounces bittersweet chocolate, finely chopped
ADVERTISEMENT

Step 1
Heat the oven to 375°F with racks in the upper- and lower-middle positions. Line 2 baking sheets with kitchen parchment.
In a small bowl, stir together the cinnamon, cardamom and ginger. Measure ¼ teaspoon of the spice mixture into another small bowl, stir in the 54 grams (¼ cup) sugar and set aside.

Step 2
In a 12-inch skillet over medium, combine the almond flour and remaining spice mixture. Cook, stirring frequently and breaking up any lumps, until fragrant and lightly browned, 5 to 7 minutes. Transfer to a large bowl and let cool until barely warm to the touch, 15 to 20 minutes.

Step 3
To the almond flour mixture, whisk in the remaining 285 grams (1⅓ cups) sugar, the cocoa and salt. Use a spatula to stir in the egg whites and vanilla until evenly moistened. Stir in the chocolate. The dough will be sticky.

Step 4
Using two soupspoons, drop a few 2-tablespoon portions of dough into the spiced sugar, then gently roll to coat evenly. Arrange the sugar-coated balls on the prepared baking sheets about 2 inches apart. Repeat with the remaining dough.

Step 5
Bake until the cookies have cracks in their surfaces and a toothpick inserted into a cookies at the center of the baking sheets comes out with few crumbs attached, 12 to 15 minutes, switching and rotating the sheets halfway through. Let the cookies cool on the baking sheets for 5 minutes, then transfer to a rack to cool completely.
`;

async function runTest() {
  console.log("Testing local recipe extraction logic...");

  try {
    const recipe = await extractRecipe(MILK_STREET_SAMPLE);

    console.log("\n--- Extracted Recipe ---");
    console.log(`Name: ${recipe.name}`);
    console.log(`Ingredients count: ${recipe.recipeIngredient?.length || 0}`);
    
    const instructions = recipe.recipeInstructions || [];
    console.log(`Instructions count: ${Array.isArray(instructions) ? instructions.length : (instructions ? 1 : 0)}`);

    if (!recipe.name) {
      console.error("FAIL: Recipe name is missing.");
      process.exit(1);
    }

    if (!recipe.recipeIngredient || recipe.recipeIngredient.length === 0) {
      console.error("FAIL: No ingredients extracted.");
      process.exit(1);
    }

    if (!instructions || (Array.isArray(instructions) && instructions.length === 0)) {
      console.error("FAIL: No instructions extracted.");
      process.exit(1);
    }

    console.log("\n--- Sample Instructions ---");
    if (Array.isArray(instructions)) {
        instructions.slice(0, 2).forEach((inst: any, i: number) => {
            const text = typeof inst === 'string' ? inst : (inst.text || inst.name || JSON.stringify(inst));
            console.log(`${i + 1}. ${text.substring(0, 100)}...`);
        });
    } else {
        console.log(`1. ${JSON.stringify(instructions).substring(0, 100)}...`);
    }

    console.log("\nSUCCESS: Local logic extracted recipe correctly!");
  } catch (error: any) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
}

runTest();
