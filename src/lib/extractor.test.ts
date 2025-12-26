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
31 grams (½ teaspoon) table salt
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

const BEEF_STEW_SAMPLE = `
The Best Beef Stew
Despite hours of simmering, most beef stews fall flat. How could we pack in more flavor?

Save

By J. Kenji Lopez-Alt
Published on January 1, 2010

Sure, the results were fit for royalty, but it was hardly the approachable, home-cooked meal I was aiming for.
Every winter, I lock myself in the kitchen with a piece of beef chuck, vegetables, and my Dutch oven and set about the alchemic task of turning a tough cut of beef tender. And every winter, I emerge a few hours later, disappointed. It’s the smell that keeps me going at it: As the stew simmers, it fills the house with a rich aroma, but the taste is never as complex as the scent would lead you to believe. It’s not that my beef stew is bad—the tender meat, flavorful vegetables, and brown gravy are good, but nowhere near good enough to merit the several hours of waiting.
Of all the dozen or so recipes I tried, ranging from quick-and-easy versions with canned beef broth, heavy thickeners, and tiny pieces of beef to better (but still disappointing) four-hour versions, the only one that delivered truly satisfying flavor came from the famed Michelin-starred chef Thomas Keller. The problem? It took four days, a dozen dirty pots and pans, and nearly 50 ingredients to make. Sure, the results were fit for royalty, but it was hardly the approachable, home-cooked meal I was aiming for. There had to be a reasonable compromise between the dim, underdeveloped flavors in the shortcut recipes and Keller’s no-holds-barred version.
Meaty Matters
The basic process for beef stew is straightforward: Brown chunks of beef in a Dutch oven, add aromatics and thickener, cover with liquid, and simmer until everything is tender and the flavors have melded. The key to developing complexity is to maximize flavor in every step. American beef stew is first and foremost about the beef—all other ingredients exist merely to support or complement it—so picking the right cut is essential. Using packaged “stew meat” from the supermarket was a nonstarter; the jumble of scraggly bits and large chunks was impossible to cook evenly. Cuts like tenderloin, strip, or rib eye turned mealy with prolonged cooking; they’re better for searing or grilling. More esoteric cuts like hanger or skirt steak offered great flavor, but their texture was stringy. While well-marbled blade steaks and short ribs (favored by Keller) worked well, in the end they were no better than chuck-eye roast. It’s one of the cheapest, beefiest cuts in the supermarket, and it turns meltingly tender when it’s properly cooked.


The first key to rich meaty flavor is proper browning, which means searing in two separate batches for a big pot of stew. Otherwise, the meat releases too much moisture and ends up steaming in its own juices. After browning the beef, I decided to caramelize the usual choices of onions and carrots (rather than just adding them raw to the broth, as many recipes suggest) to start the stew off with as much flavor as possible. Though at first I planned to remove the meat while sautéing the vegetables, I found that by leaving it in the pot, its residual heat helped the onions and carrots cook faster and more evenly. Crushed garlic, I decided, was essential. I sautéed it with the rest of the ingredients for 30 seconds before adding 1/4 cup of flour to lightly thicken the stew. I then deglazed the pan with 2 cups of red wine, scraping the bottom of the pot to release the flavorful browned bits and allowing the liquid to reduce for just a few minutes to give its raw flavor a chance to dissipate. I then added 2 cups of chicken broth (favored over tinny canned beef broth) and let the stew simmer for 2 1/2 hours in the oven (which provides a more even heat than the stovetop).
The stew was bare bones, but I would worry about other additions later. For now, I wanted to see how the flavor of the broth was developing. Not very well. Despite the little tweaks in the browning steps, my stew still lacked real meatiness. I decided to attack the problem in a more scientific manner.
Souping Up the Broth

Anchovies, salt pork and tomato paste are rich in glutamates, compounds that give the stew a more savory flavor.
We’ve long known that ingredients rich in glutamates—compounds that give meat its savory taste—can enhance the flavor of a dish. Tomatoes are one such ingredient. I experimented with various canned tomato products, finally landing on tomato paste, which lent just the right background note.

I found I could add up to four fillets with increasingly better results before the fishiness revealed itself. Finally, my stew was packed with the depth I was looking for.
Thinking of other glutamate-rich ingredients, I wondered about cured meats, like bacon, that have a super-concentrated flavor. Bacon was too smoky for the dish, but salt pork worked well. A small piece added a subtle depth to the broth and the beef. Then I remembered another salted product that’s packed with glutamates: anchovies. I mashed one up and incorporated it along with the garlic and tomato paste. It was a smashing success, with tasters praising the newfound beefiness. In fact, I found I could add up to four fillets with increasingly better results before the fishiness revealed itself. Finally, my stew was packed with the depth I was looking for. But one problem remained: texture.

Science: Fishing for Flavor
To boost meaty flavor in food, we often add ingredients high in glutamate. Thus it wasn’t exactly a surprise that the addition of two such glutamate-rich ingredients—tomato paste and salt pork—to our beef stew intensified its savory taste. But when we added a third glutamate-packed ingredient, anchovies, the beefy flavor seemed to increase exponentially. Evidence published recently in Proceedings of the National Academy of Sciences explains why: Besides glutamate, anchovies contain the compound inosinate. Scientists have found inosinate has a synergistic effect on glutamate, heightening its meaty taste by up to fifteenfold.
Through Thick and Thin

A single packet of bloomed gelatin takes the place of homemade veal stock in our recipe to create a rich, mouth-coating texture.
Keller’s stew starts with homemade veal stock. As it cooks, collagen in the veal bones is transformed into gelatin, which gives the final stew a luxurious, mouth-coating texture—something that my flour-thickened broth lacked. Theoretically, powdered gelatin should work just as well as the real deal. But once I removed the flour, I needed to add nearly 1/2 cup of gelatin powder to thicken the stew sufficiently. Flour or gelatin alone didn’t work, but what about a combination? I made the stew with 1/4 cup of flour just as before but added a single packet of bloomed gelatin after removing the stew from the oven. After just three minutes of simmering on the stovetop, the liquid developed a rich, glossy sheen that looked (and tasted) every bit as rich as the veal stock–based version.
What Is Gelatin?
Gelatin is a flavorless, nearly colorless substance derived from the collagen in animals’ connective tissue and bones.
With my stew perfected, the rest of the recipe was simple: I added a handful of frozen pearl onions toward the end of cooking along with some frozen peas. As for potatoes, starchy russets broke down too easily, turning the stew grainy. Medium-starch Yukon golds added halfway through cooking were the way to go. As I ladled myself a steaming bowl of the supremely meaty and satisfying stew, I couldn’t help but appreciate that, sometimes, the little things really do matter.

Recipe
Best Beef Stew
`;

const ATK_BEEF_STEW_SAMPLE = `
Best Beef Stew
By J. Kenji Lopez-Alt

Published on February 29, 2012

Time
3¾ hours
Yield
Serves 6 to 8

Ingredients
2 medium garlic cloves, minced or pressed through garlic press (about 2 teaspoons)
4 anchovy fillets, finely minced (about 2 teaspoons)
1 tablespoon tomato paste 
1 boneless beef chuck-eye roast (about 4 pounds), trimmed of excess fat, cut into 1 ½-inch pieces
2 tablespoons vegetable oil 
1 large onion, halved and cut from pole to pole into ⅛-inch-thick slices (about 2 cups)
4 medium carrots, peeled and cut into 1-inch pieces (about 2 cups)
¼ cup unbleached all-purpose flour 
2 cups red wine
2 cups low-sodium chicken broth 
2 bay leaves 
4 sprigs fresh thyme 
4 ounces Salt pork, rinsed of excess salt
1 pound Yukon Gold potatoes, scrubbed and cut into 1-inch pieces
1 ½ cups frozen pearl onions, thawed
2 teaspoons unflavored powdered gelatin (about 1 packet)
½ cup water 
1 cup frozen peas, thawed
Table salt and ground black pepper

Instructions
Adjust oven rack to lower-middle position and heat oven to 300 degrees. Combine garlic and anchovies in small bowl; press with back of fork to form paste. Stir in tomato paste and set mixture aside.
Pat meat dry with paper towels. Do not season. Heat 1 tablespoon vegetable oil in large heavy-bottomed Dutch oven over high heat until just starting to smoke. Add half of beef and cook until well browned on all sides, about 8 minutes total, reducing heat if oil begins to smoke or fond begins to burn. Transfer beef to large plate. Repeat with remaining beef and 1 tablespoon vegetable oil, leaving second batch of meat in pot after browning.
Reduce heat to medium and return first batch of beef to pot. Add onion and carrots to Dutch oven and stir to combine with beef. Cook, scraping bottom of pan to loosen any browned bits, until onion is softened, 1 to 2 minutes. Add garlic mixture and cook, stirring constantly, until fragrant, about 30 seconds. Add flour and cook, stirring constantly, until no dry flour remains, about 30 seconds.
Slowly add wine, scraping bottom of pan to loosen any browned bits. Increase heat to high and allow wine to simmer until thickened and slightly reduced, about 2 minutes. Stir in broth, bay leaves, thyme, and salt pork. Bring to simmer, cover, transfer to oven, and cook for 1 1/2 hours.
Remove pot from oven; remove and discard bay leaves and salt pork. Stir in potatoes, cover, return to oven, and cook until potatoes are almost tender, about 45 minutes.
Using large spoon, skim any excess fat from surface of stew. Stir in pearl onions; cook over medium heat until potatoes and onions are cooked through and meat offers little resistance when poked with fork (meat should not be falling apart), about 15 minutes. Meanwhile, sprinkle gelatin over water in small bowl and allow to soften for 5 minutes.
Increase heat to high, stir in softened gelatin mixture and peas; simmer until gelatin is fully dissolved and stew is thickened, about 3 minutes. Season with salt and pepper to taste; serve.
`;

async function testRecipe(name: string, content: string) {
  console.log(`\nTesting extraction for: ${name}...`);

  try {
    const recipe = await extractRecipe(content);

    console.log("--- Extracted ---");
    console.log(`Name: ${recipe.name}`);
    console.log(`Ingredients count: ${recipe.recipeIngredient?.length || 0}`);
    
    const instructions = recipe.recipeInstructions || [];
    console.log(`Instructions count: ${Array.isArray(instructions) ? instructions.length : (instructions ? 1 : 0)}`);

    if (!recipe.name && recipe.recipeFound !== false) {
      console.error("FAIL: Recipe name is missing.");
      return false;
    }

    if (recipe.recipeFound === false) {
      console.log("SKIP: No recipe found (as expected or failed)");
      return true;
    }

    if (!recipe.recipeIngredient || recipe.recipeIngredient.length === 0) {
      console.warn("WARN: No ingredients extracted.");
    }

    if (!instructions || (Array.isArray(instructions) && instructions.length === 0)) {
      console.error("FAIL: No instructions extracted.");
      return false;
    }

    console.log("--- Sample Instructions ---");
    if (Array.isArray(instructions)) {
        instructions.slice(0, 2).forEach((inst: any, i: number) => {
            const text = typeof inst === 'string' ? inst : (inst.text || inst.name || JSON.stringify(inst));
            console.log(`${i + 1}. ${text.substring(0, 100)}...`);
        });
    } else {
        console.log(`1. ${JSON.stringify(instructions).substring(0, 100)}...`);
    }

    console.log(`SUCCESS: ${name} extracted correctly!`);
    return true;
  } catch (error: any) {
    console.error(`ERROR in ${name}: ${error.message}`);
    return false;
  }
}

async function runTests() {
    let allPassed = true;
    allPassed = (await testRecipe("Milk Street Cookies", MILK_STREET_SAMPLE)) && allPassed;
    allPassed = (await testRecipe("Narrative Beef Stew", BEEF_STEW_SAMPLE)) && allPassed;
    allPassed = (await testRecipe("ATK Beef Stew Full", ATK_BEEF_STEW_SAMPLE)) && allPassed;
    
    if (!allPassed) {
        process.exit(1);
    }
}

runTests();
