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
    websiteName: "Allrecipes",
    thumbnailUrl: "/images/Gallery/worlds-best-lasagna.webp",
    recipeTitle: "World's Best Lasagna",
    recipeUrl: "https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/",
  },
  {
    "id": 2,
    "websiteName": "Food Network",
    "thumbnailUrl": "/images/Gallery/chicken.webp",
    "recipeTitle": "Perfect Roast Chicken",
    "recipeUrl": "https://www.foodnetwork.com/recipes/ina-garten/perfect-roast-chicken-recipe-1940592"
  },
  {
    "id": 3,
    "websiteName": "Smitten Kitchen",
    "thumbnailUrl": "/images/Gallery/apple-cake.webp",
    "recipeTitle": "Mom's Apple Cake",
    "recipeUrl": "https://smittenkitchen.com/2008/09/moms-apple-cake/"
  },
  {
    "id": 4,
    "websiteName": "America's Test Kitchen",
    "thumbnailUrl": "/images/Gallery/cookies.webp",
    "recipeTitle": "Perfect Chocolate Chip Cookies",
    "recipeUrl": "https://www.americastestkitchen.com/recipes/4737-perfect-chocolate-chip-cookies"
  },
];
