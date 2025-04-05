export const FeaturesData: {
  imgSrc: string;
  heading: string;
  subheading: string;
}[] = [
    {
      imgSrc: '/images/Features/featureOne.svg',
      heading: "Menu variations",
      subheading: "Sed ut perspiciatis unde omnis iste natus error",
    },
    {
      imgSrc: '/images/Features/featureTwo.svg',
      heading: "Cooking warw",
      subheading: "Sed ut perspiciatis unde omnis iste natus error",
    },
    {
      imgSrc: '/images/Features/featureThree.svg',
      heading: "Best chef",
      subheading: "Sed ut perspiciatis unde omnis iste natus error",
    },
    {
      imgSrc: '/images/Features/featureFour.svg',
      heading: "Fast food",
      subheading: "Sed ut perspiciatis unde omnis iste natus error",
    }

  ]

export const ExpertData: {
  profession: string;
  name: string;
  imgSrc: string;
}[] = [
    {
      profession: 'Senior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: '/images/Expert/boyone.png',
    },
    {
      profession: 'Junior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: '/images/Expert/girl.png',
    },
    {
      profession: 'Junior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: '/images/Expert/boytwo.png',
    },
    {
      profession: 'Junior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: '/images/Expert/girl.png',
    },
    {
      profession: 'Senior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: '/images/Expert/boyone.png',
    },
    {
      profession: 'Junior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: '/images/Expert/boytwo.png',
    },
  ]

// Featured Recipes Data
export interface FeaturedRecipe {
  id: number;
  websiteName: string;
  thumbnailUrl: string;
  recipeTitle: string;
  recipeUrl: string;
}

export const featuredRecipes: FeaturedRecipe[] = [
  {
    id: 1,
    websiteName: "Food Network",
    thumbnailUrl: "/images/Gallery/foodone.jpg", // Placeholder - using old image
    recipeTitle: "Classic Caesar Salad",
    recipeUrl: "https://www.foodnetwork.com/recipes/food-network-kitchen/classic-caesar-salad-recipe-1973506",
  },
  {
    id: 2,
    websiteName: "Allrecipes",
    thumbnailUrl: "/images/Gallery/foodtwo.jpg", // Placeholder - using old image
    recipeTitle: "Festive Christmas Salad",
    recipeUrl: "https://www.allrecipes.com/recipe/25563/christmas-salad/",
  },
  {
    id: 3,
    websiteName: "Bon Appétit",
    thumbnailUrl: "/images/Gallery/foodthree.jpg", // Placeholder - using old image
    recipeTitle: "Sautéed Mushrooms with Pumpkin",
    recipeUrl: "https://www.bonappetit.com/recipe/sauteed-mushrooms-with-garlic-and-parsley", // Example URL
  },
  {
    id: 4,
    websiteName: "Serious Eats",
    thumbnailUrl: "/images/Gallery/foodfour.jpg", // Placeholder - using old image
    recipeTitle: "BBQ Chicken Pizza",
    recipeUrl: "https://www.seriouseats.com/recipes/2010/06/barbecue-chicken-pizza-recipe.html", // Example URL
  },
];
