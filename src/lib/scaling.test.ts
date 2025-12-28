
import { scaleRecipe } from "./scaling";

interface TestCase {
  name: string;
  ingredients: string[];
  scaleFactor: number;
}

const TEST_CASES: TestCase[] = [
  {
    name: "Simple Scaling Up (Double)",
    ingredients: ["1 cup flour", "2 eggs", "1 tsp salt"],
    scaleFactor: 2
  },
  {
    name: "Scaling Down (Halving)",
    ingredients: ["2 cups sugar", "4 sticks butter", "1 gallon milk"],
    scaleFactor: 0.5
  },
  {
    name: "Complex Fractions and Mixed Units",
    ingredients: ["1 1/2 cups flour", "3/4 tsp baking soda", "1/2 to 1 cup chopped nuts"],
    scaleFactor: 3
  },
  {
    name: "Vague or No Quantities",
    ingredients: ["salt to taste", "drizzle of olive oil", "1 banana"],
    scaleFactor: 4
  },
  {
    name: "Large Recipe List",
    ingredients: [
      "1 tsp cumin", "1 tsp coriander", "1/2 tsp turmeric", "1/4 tsp cayenne",
      "2 lbs chicken breast", "1 onion, diced", "3 cloves garlic, minced",
      "1 inch ginger, grated", "1 can tomato sauce", "1 cup heavy cream"
    ],
    scaleFactor: 1.5
  }
];

async function runTestCase(testCase: TestCase) {
  console.log(`\n----------------------------------------`);
  console.log(`TEST: ${testCase.name}`);
  console.log(`Factor: ${testCase.scaleFactor}`);
  console.log(`Input:`, testCase.ingredients);
  
  try {
    const startTime = Date.now();
    const result = await scaleRecipe(testCase.ingredients, testCase.scaleFactor);
    const duration = Date.now() - startTime;

    console.log(`Time: ${duration}ms`);
    console.log(`Output:`, result.scaledIngredients);

    if (!result.scaledIngredients || !Array.isArray(result.scaledIngredients)) {
        console.error('FAIL: Invalid response format');
        return false;
    }

    if (result.scaledIngredients.length !== testCase.ingredients.length) {
        console.warn(`WARN: Input/Output length mismatch. Input: ${testCase.ingredients.length}, Output: ${result.scaledIngredients.length}`);
    }

    // Basic validity check - ensuring output strings contain some content
    const allValidStrings = result.scaledIngredients.every(i => typeof i === 'string' && i.length > 0);
    if (!allValidStrings) {
        console.error('FAIL: Some output items are not valid strings');
        return false;
    }

    console.log('PASS: Structure matches expectations');
    return true;

  } catch (error: any) {
    console.error(`ERROR: ${error.message}`);
    const isPermissionError = error.message.includes('GCP_PROJECT') || error.message.includes('permission denied');
    if (isPermissionError) {
        console.warn('WARN: Skipping remainder due to environment permission issue.');
        return null; // Signal to stop testing if we hit env issues
    }
    return false;
  }
}

async function runAllTests() {
  console.log('Starting Advanced Scaling Tests...\n');
  
  for (const testCase of TEST_CASES) {
    const success = await runTestCase(testCase);
    if (success === null) break; // Stop on env error
  }
  
  console.log('\nAll tests completed.');
}

runAllTests();
