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
  recipeJson: any;
}

export const featuredRecipes: FeaturedRecipe[] = [
  {
    id: 1,
    websiteName: "Allrecipes",
    thumbnailUrl: "/images/Gallery/worlds-best-lasagna.webp",
    recipeTitle: "World's Best Lasagna",
    recipeUrl: "https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/",
    "recipeJson": {
      "@context": "http://schema.org",
      "@type": [
        "Recipe",
        "NewsArticle"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingCount": "20955",
        "ratingValue": "4.8"
      },
      "author": [
        {
          "@type": "Person",
          "name": "John Chandler"
        }
      ],
      "cookTime": "PT150M",
      "dateModified": "2024-05-22T04:55:05.527-04:00",
      "datePublished": "2000-10-30T09:21:32.000-05:00",
      "description": "This lasagna recipe from John Chandler is our most popular recipe! With sausage, ground beef, basil, and 3 types of cheese, it lives up to its name!",
      "headline": "World&#39;s Best Lasagna",
      "image": {
        "@type": "ImageObject",
        "height": 1125,
        "url": "https://www.allrecipes.com/thmb/htylprTl3RuTsFquG9YtbU1pzy0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23600-worlds-best-lasagna-DDMFS-4x3-1196-24c5401652934ffb96d3d94bc9fbe2d7.jpg",
        "width": 1500
      },
      "mainEntityOfPage": {
        "@id": "https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/",
        "@type": [
          "WebPage"
        ],
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "item": {
                "@id": "https://www.allrecipes.com/recipes/80/main-dish/",
                "name": "Main Dishes"
              },
              "position": 1
            },
            {
              "@type": "ListItem",
              "item": {
                "@id": "https://www.allrecipes.com/recipes/17245/main-dish/pasta/",
                "name": "Pasta"
              },
              "position": 2
            },
            {
              "@type": "ListItem",
              "item": {
                "@id": "https://www.allrecipes.com/recipes/502/main-dish/pasta/lasagna/",
                "name": "Lasagna Recipes"
              },
              "position": 3
            },
            {
              "@type": "ListItem",
              "item": {
                "@id": "https://www.allrecipes.com/recipes/16806/main-dish/pasta/lasagna/meat-lasagna/",
                "name": "Meat Lasagna Recipes"
              },
              "position": 4
            }
          ]
        },
        "lastReviewed": "2024-05-22T04:55:05.527-04:00",
        "reviewedBy": [
          {
            "@type": "Person",
            "name": "Allrecipes Test Kitchen",
            "url": "https://www.allrecipes.com/allrecipes-test-kitchen-7553892"
          }
        ]
      },
      "name": "World&#39;s Best Lasagna",
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "448 kcal",
        "carbohydrateContent": "37 g",
        "cholesterolContent": "82 mg",
        "fatContent": "21 g",
        "fiberContent": "4 g",
        "proteinContent": "30 g",
        "saturatedFatContent": "10 g",
        "sodiumContent": "1400 mg",
        "sugarContent": "9 g",
        "unsaturatedFatContent": "0 g"
      },
      "prepTime": "PT30M",
      "publisher": {
        "@type": "Organization",
        "brand": "Allrecipes",
        "logo": {
          "@type": "ImageObject",
          "height": 112,
          "url": "https://www.allrecipes.com/thmb/Z9lwz1y0B5aX-cemPiTgpn5YB0k=/112x112/filters:no_upscale():max_bytes(150000):strip_icc()/allrecipes_logo_schema-867c69d2999b439a9eba923a445ccfe3.png",
          "width": 112
        },
        "name": "Allrecipes",
        "publishingPrinciples": "https://www.allrecipes.com/about-us-6648102#toc-editorial-guidelines",
        "sameAs": [
          "https://www.facebook.com/allrecipes",
          "https://www.instagram.com/allrecipes/",
          "https://www.pinterest.com/allrecipes/",
          "https://www.tiktok.com/@allrecipes",
          "https://www.youtube.com/user/allrecipes/videos",
          "https://flipboard.com/@Allrecipes",
          "https://en.wikipedia.org/wiki/Allrecipes.com",
          "http://linkedin.com/company/allrecipes.com"
        ],
        "url": "https://www.allrecipes.com"
      },
      "recipeCategory": [
        "Dinner"
      ],
      "recipeCuisine": [
        "Italian Inspired",
        "Italian"
      ],
      "recipeIngredient": [
        "1 pound sweet Italian sausage",
        "0.75 pound lean ground beef",
        "0.5 cup minced onion",
        "2 cloves garlic, crushed",
        "1 (28 ounce) can crushed tomatoes",
        "2 (6.5 ounce) cans canned tomato sauce",
        "2 (6 ounce) cans tomato paste",
        "0.5 cup water",
        "2 tablespoons white sugar",
        "4 tablespoons chopped fresh parsley, divided",
        "1.5 teaspoons dried basil leaves",
        "1.5 teaspoons salt, divided, or to taste",
        "1 teaspoon Italian seasoning",
        "0.5 teaspoon fennel seeds",
        "0.25 teaspoon ground black pepper",
        "12 lasagna noodles",
        "16 ounces ricotta cheese",
        "1 egg",
        "0.75 pound mozzarella cheese, sliced",
        "0.75 cup grated Parmesan cheese"
      ],
      "recipeInstructions": [
        {
          "@type": "HowToStep",
          "image": [
            {
              "@type": "ImageObject",
              "url": "https://www.allrecipes.com/thmb/RFBMw1O5cZzkCX4aNbIa03bk5RU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23600-worlds-best-lasagna-DDMFS-step-01-1064-5dd7c3348e624ec2a266785d22dd52e3.jpg"
            }
          ],
          "text": "Gather all your ingredients."
        },
        {
          "@type": "HowToStep",
          "image": [
            {
              "@type": "ImageObject",
              "url": "https://www.allrecipes.com/thmb/o1GbrfyoaJfaDxZezIRbN9ucQPs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23600-worlds-best-lasagna-DDMFS-step-01-1-1066-a60ebdd7ec5a40ed8754b1f4df8ff1f4.jpg"
            }
          ],
          "text": "Cook sausage, ground beef, onion, and garlic in a Dutch oven over medium heat until well browned."
        },
        {
          "@type": "HowToStep",
          "image": [
            {
              "@type": "ImageObject",
              "url": "https://www.allrecipes.com/thmb/8DiuDWYx1LJRNP0mvGBykI5FxBk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23600-worlds-best-lasagna-DDMFS-step-02-1079-42d9226098f54647a6d052fc836d3a79.jpg"
            }
          ],
          "text": "Stir in crushed tomatoes, tomato sauce, tomato paste, and water. Season with sugar, 2 tablespoons parsley, basil, 1 teaspoon salt, Italian seasoning, fennel seeds, and pepper. Simmer, covered, for about 1 ½ hours, stirring occasionally."
        },
        {
          "@type": "HowToStep",
          "image": [
            {
              "@type": "ImageObject",
              "url": "https://www.allrecipes.com/thmb/e0ZwUJIh5DLJsu8tW_Hc8OBvXQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23600-worlds-best-lasagna-DDMFS-step-03-1065-3a965c2fd99344a7aee647cabc22f3a4.jpg"
            }
          ],
          "text": "Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water."
        },
        {
          "@type": "HowToStep",
          "image": [
            {
              "@type": "ImageObject",
              "url": "https://www.allrecipes.com/thmb/K98CxHUyusSF-aWsCV6UrGa5J5g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23600-worlds-best-lasagna-DDMFS-step-04-1071-882506befd1744c0857897a6604c21da.jpg"
            }
          ],
          "text": "In a mixing bowl, combine ricotta cheese with egg, remaining 2 tablespoons parsley, and 1/2 teaspoon salt."
        },
        {
          "@type": "HowToStep",
          "text": "Preheat the oven to 375 degrees F (190 degrees C)."
        },
        {
          "@type": "HowToStep",
          "image": [
            {
              "@type": "ImageObject",
              "url": "https://www.allrecipes.com/thmb/L-jOhTEclPgjyuVZkek6GC9LR9w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23600-worlds-best-lasagna-DDMFS-step-09-1077-69a136de5295490d9c072b8971b65848.jpg"
            }
          ],
          "text": "To assemble, spread 1 ½ cups of meat sauce in the bottom of a 9x13-inch baking dish. Arrange 6 noodles lengthwise over meat sauce, overlapping slightly. Spread with 1/2 of the ricotta cheese mixture. Top with 1/3 of the mozzarella cheese slices. Spoon 1 ½ cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese."
        },
        {
          "@type": "HowToStep",
          "image": [
            {
              "@type": "ImageObject",
              "url": "https://www.allrecipes.com/thmb/4vyfmxUpdyyxOcuO70zMS_QOo9k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23600-worlds-best-lasagna-DDMFS-step-11-1081-cc17503b338f465580ef6a42fe7ce80f.jpg"
            }
          ],
          "text": "Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray or make sure the foil does not touch the cheese."
        },
        {
          "@type": "HowToStep",
          "image": [
            {
              "@type": "ImageObject",
              "url": "https://www.allrecipes.com/thmb/34sYThEOyIv80Ek7vPLCBT599QY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23600-worlds-best-lasagna-DDMFS-step-12-1164-f66803089cf547bf8470f06943bdc8c4.jpg"
            }
          ],
          "text": "Bake in the preheated oven for 25 minutes. Remove the foil and bake for an additional 25 minutes."
        },
        {
          "@type": "HowToStep",
          "image": [
            {
              "@type": "ImageObject",
              "url": "https://www.allrecipes.com/thmb/htylprTl3RuTsFquG9YtbU1pzy0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23600-worlds-best-lasagna-DDMFS-4x3-1196-24c5401652934ffb96d3d94bc9fbe2d7.jpg"
            }
          ],
          "text": "Rest lasagna for 15 minutes before serving."
        }
      ],
      "recipeYield": "12",
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "KJinSD"
          },
          "reviewBody": "Absolutely the BEST lasagna I have ever made! Per others' suggestions, I made the following changes: 1) used brown suger instead of white 2) used fresh basil instead of dried 3) used red wine instead of water 4)didn't boil the noodles...just soaked them in hot water while the sauce was cooking. 5) added a couple dashes of nutmeg to the ricotta cheese mixture 6) used shredded mozarella instead of slices.\n\nThis recipe makes A LOT of sauce. I had about 2 cups left over even after I was generous with it in my layering.\n\nMy boyfriend LOVED it and said it's the best he's ever had. I didn't find it all that 'labor intensive' to make considering it is lasagna! Thanks for this recipe!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rene"
          },
          "datePublished": "2009-03-30T09:55:16.850Z",
          "reviewBody": "Having grown up in a family of excellent Italian cooks, I admit I am a \"tough room\" when it comes to Italian recipes. Despite that, this one is so good that I am sure my mother and grandmother are smiling down from heaven in approval! I saw this same recipe on another site and it only called for 1 teaspoon of salt, not 1 tablespoon. It came out perfect with the lower amount of salt. It also did not call for any salt in the ricotta. I have some recommendations, below: Cut down the water to 1/4 cup. It makes a slightly thicker sauce and I felt the lasagna holds up better that way (although this recipe is good even with more water). Use half parmesan and half romano cheese. It gives a slightly more robust flavor. Put a few tablespoons of the romano/parmesan cheese in with the ricotta mixture. Add a half teaspoon of grated nutmeg in with the ricotta mixture. Increase to one teaspoon of fennel seed. Use 23 ounces of ricotta instead of 16. Use bulk sausage meat if you can find it. Otherwise if you buy link sausage make sure to remove it from the casing and mix it with the ground beef. And finally (and this is very important), make the sauce the night before and leave it in the fridge overnight. The sauce tastes better and better as it sits and develops more richness of body and flavor. Trust me, all of these changes will improve the recipe! Mangia!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Chels"
          },
          "datePublished": "2013-10-01T09:58:00.197Z",
          "reviewBody": "With all of the reviewers' suggestions, this recipe is definitely 5 star. As written, it could use a few improvements. Here is what I did (following others' suggestions in their reviews):\r\n\r\n- Soak noodles in very hot tap water for up to 30 mins while prepping sauce/ricotta mixture.\r\n- Use 1lb ground beef (they sell sweet Italian sausage at Trader Joe's, but I've used pork sausage with sweet chilis and that works, too).\r\n- Drain excess liquid after browning meat and before adding onions and garlic, then cook until onions are soft before adding the other ingredients to the sauce.\r\n- 6 cloves garlic instead of 2.\r\n- Only 6 oz tomato paste, instead of 12oz. \r\n- 1 Tablespoon of sugar instead of 2, and 1 teaspoon of salt (instead of 1 Tblsp).\r\n- 1/3 cup fresh basil instead of dried, if you have it (dried is fine otherwise).\r\n- 1/2 teaspoon red pepper flakes.\r\n- Add 1 Tblsp parmesan and a dash of nutmeg to the ricotta mixture. \r\n- I've used both sliced mozz and fresh mozz - both work great. \r\n- Layer as follows (from bottom to top): 2 c meat sauce / 6 noodles (overlap them) / 1/2 ricotta mixture / 2 c meat sauce / 1/4 c parmesan / 1/2 of the mozzarella / 2 c meat sauce / 6 noodles / remaining ricotta mixture / 2 c meat sauce / remaining mozzarella / remaining parmesan. \r\n- Cover and refrigerate overnight. \r\n- Let sit at room temp for an hour before baking.\r\n\r\nEverything else in the recipe that I haven't mentioned, I followed as written. The lasagna got rave reviews and disappeared",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Zanne"
          },
          "datePublished": "2003-09-18T07:45:17.763Z",
          "reviewBody": "I've convinced 3 (now-ex) boyfriends, my husband, and even a couple Italian friends at school that I make the most incredible lasagna they've ever tasted with this recipe. I make it pretty much as shown, except if I have the time, I let the sauce simmer on the stove as long as possible. I also add a bit of whatever red wine I have on hand to the sauce. And I try to make a double recipe, so I can use the sauce for other things - it works wonderfully for Chicken Parmesan, plain ol' spaghetti, and anywhere else you'd use a red sauce.\r\n\r\nEverything tastes better the second day, too. Oh, one more thing - I never boil my noodles. I simply buy regular dried noodles, and make sure I have plenty of sauce in the lasagna. It cooks long enough that the noodles boil in the oven, and you end up with a lasagna that isn't runny and holds its shape well.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "LifeguardM"
          },
          "datePublished": "2010-01-12T20:08:28.297Z",
          "reviewBody": "Believe it, everyone. This lasagna is amazing! I served it tonight to at a dinner party and all my guests raved and went back for seconds! I read all the reviews before I started cooking and here's what I did to the recipe to make it extra yummy - 1. I used a lb. of Italian sausage and 1 1/2 lbs. of lean ground beef. 2. I chopped a medium onion instead of using minced onion. 3. I used six cloves of garlic instead of two. 4. I used a 1/2 c. of red wine instead of water. 5. I used brown sugar instead of white sugar. 6. I used fresh chopped basil and fresh chopped parsley instead of dried. 7. I used 1 teaspoon of salt. 8. I doubled the ricotta. 9. I added 1/2 tsp. of nutmeg to my ricotta mixture. 10. I grated a lb. of mozzarella cheese instead of using sliced mozzarella. Even though this recipe is a little time consuming, it's absolutely worth it!! This is the only lasagna recipe I will ever use from now on!!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "JBAILEY214"
          },
          "datePublished": "2006-09-17T10:04:42.640Z",
          "reviewBody": "I have been on a long search and agree this is the best lasagna I have found. The sauce is fantastic, which is a big compliment from me as I'm very picky about my sauce. I read a lot of other people's comments. At the end of the day, I made the recipe as written except that I omitted the salt, use 1.25 pounds of ground beef, spicy italian sausage instead of sweet, and used only half the ricotta. How much ricotta you use is really up to personal taste. My view is a little goes a long ways. Several people mentioned doing it in three layers instead of two, but two took it up to the very top of the pan anyway. This recipe is great!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "ggma24"
          },
          "datePublished": "2009-08-13T23:00:48.757Z",
          "reviewBody": "I must comment on the reactions to the sugar in the sauce...the purpose of the sugar is to counter the bitter back taste of the various tomato products &amp; not to sweeten it. Whenever I make a tomato sauce I taste and determine the amount of sugar needed usually it's about a tsp. I personally have never had to use that much sugar. Obviously the salt was a typo as many have stated, that much salt would give me a stroke. tip: In a small sautee pan put 2 or 3 Tb of olive oil and fresh minced garlic amount according to personal preference. (My family loves garlic so I use approx. 4 to 6 cloves and put it through a garlic press or simply smash) To this I add finely chopped onion, when the onion is tender I add all the seasonings minus the salt and seasonings are quite personal and differ as do people so use what you love, we like a little kick and use red pepper flakes. Turn down the temperature to low after it sizzles, put a lid on and allow to simmer. This is an important step as it infuses the flavors into the scant 'heart healthy' olive oil. Meanwhile cook and crumble desired meats. Lightly SALT your meat but not the sausage! Set aside. (drain the excess oil from the meat). NOTE a very small amount of salt brings out the flavor of your meats. The sauce however,should not be salted. I enjoy the Hunts flavored sauces and sometime will use their spaghetti sauce as a starter for my sauce only because it expedites time. Combine your sauce, meat and sauteed season., simmer/assemble.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "JoJoWife"
          },
          "datePublished": "2008-03-11T11:21:56.450Z",
          "reviewBody": "This lasagna is great and the sauce itself is awesome too. My husband told me that this sauce is better that the one I usually make and that one was from his mother’s recipe. This recipe makes a little more sauce that you need so I use the leftover for some pasta or ravioli few days later. I followed some suggestions from the previous reviews and from making this recipe few times here are some things I changed. \n*Used 1lb each of beef and Italian sausage\n*Used less salt (only about a teaspoon)\n*Used only 1 tablespoon of sugar in the sauce\n*Used wine instead of water\n*Used fresh chopped basil instead of dry (about ½ cup)\n*Used “ready to bake” lasagna noodles \n*Used fresh deli grade ricotta cheese not the processed stuff from the container\n*Used freshly grated Parmesan cheese\nThis is a 5 start lasagna recipe that it better than the one you order in the restaurant!! I often add spinach (fresh spinach wilted with some butter) to the ricotta cheese and it tastes great. Remember to always use as much fresh ingredients as you can – you will taste the difference (fresh ricotta and Parmesan, add fresh parsley and basil etc) Enjoy! Also, make the sauce a day earlier to save time.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "lahisa"
          },
          "datePublished": "2009-04-26T14:30:35.650Z",
          "reviewBody": "WITH ALL DUE RESPECT TO THE OWNER OF THE RECIPE A 9 X 13 IS NOT BIG ENOUGH I ASSEMBLED IT VERY CAREFULLY FOLLOWING THE DIRECTIONS BUT AT THE 2ND LAYER THE PAN WAS TOPPED I COULD NOT FIT THE REST I TRANSFERED EVERYTHING TO A BIGGER PAN BIG MESS!!! THANK GOD I'M NOT HAVING ANYONE OVER SO MUCH WORK FOR A MESSY LASAGNA!!! VERY DISSAPOINTED",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Deanna Foote"
          },
          "datePublished": "2012-01-19T14:53:39.327Z",
          "reviewBody": "To me, this was just OK. I don't think there's nearly enough cheese and it was just so heavy with all the meat. I think it's just my personal tastes that I prefer a lighter version of lasagne. It was very expensive too, so I guess I expected it to taste out-of-this world and so I felt a bit let down.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "3"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "EKERR19"
          },
          "datePublished": "2007-09-04T21:41:12.473Z",
          "reviewBody": "This is a good basic start, however, I felt it calls for too much salt and sugar.\n\nI always add a pinch of sugar to neutralize the acid in tomato sauce, however, what I add is based on taste, and taste only. Some canned tomatoes and pastes have a sweeter taste than others, so I use taste as my only means for adding sugar.\n\nThis recipe was salt heavy for me - I've never added salt to ricotta and won't. Real ricotta has such a smooth, delicate flavor; I can't imagine what salt might do to it.\n\nThis is also very meaty. Though I prefer the blend of sausage/beef, I think it's a matter of personal preference. I also agree it needs more cheese, and we add different varities.\n\nThis is a good, basic recipe - add &amp; modify as you wish, it is a solid foundation.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Leeann"
          },
          "datePublished": "2025-08-25T17:44:55.147Z",
          "reviewBody": "I’ve made this more times than I can count!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "MaryEllen"
          },
          "datePublished": "2025-08-25T02:20:06.192Z",
          "reviewBody": "Great recipe!! I used 1 tsp salt instead on 1 TBSP and it was plenty. I also added a 1/2 tsp nutmeg and 1 tablespoon Parmesan cheese to the ricotta mixture.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rick Hansen"
          },
          "datePublished": "2025-08-24T20:10:39.988Z",
          "reviewBody": "Amazing lasagna, I use the sauce for spaghetti too.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "FeistyPan1681"
          },
          "datePublished": "2025-08-21T17:05:07.220Z",
          "reviewBody": "Homemade is always better",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "James"
          },
          "datePublished": "2025-08-15T21:36:03.972Z",
          "reviewBody": "I don’t use sausage and neither do Romans",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Morgan Boyd"
          },
          "datePublished": "2025-08-13T05:10:10.837Z",
          "reviewBody": "Although time consuming it's smells amazing and well worth it",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "susan"
          },
          "datePublished": "2025-08-11T13:51:23.875Z",
          "reviewBody": "The flavor was amazing",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "shellb"
          },
          "datePublished": "2025-08-11T13:38:36.740Z",
          "reviewBody": "I’ve been making this for several years and it is so worth the extra work. My family and friends favourite by far. I follow the recipe exactly, I do add extra mozzarella! Delicious!!!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Nikki"
          },
          "datePublished": "2025-08-10T20:50:58.979Z",
          "reviewBody": "Everyone loves this lasagna!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        }
      ],
      "totalTime": "PT195M",
      "video": {
        "@type": "VideoObject",
        "contentUrl": "https://content.jwplatform.com/videos/mQoXGcWf-K3AjnAEN.mp4",
        "description": "See how to make the world’s best lasagna from scratch! The secret to John Chandler’s recipe is the slow-simmering meat sauce!",
        "duration": "PT1M52S",
        "name": "World’s Best Lasagna",
        "thumbnailUrl": "https://cdn.jwplayer.com/v2/media/mQoXGcWf/poster.jpg?width=1280",
        "uploadDate": "2023-05-30T13:32:01.868-04:00"
      }
    }
  },
  {
    "id": 2,
    "websiteName": "Food Network",
    "thumbnailUrl": "/images/Gallery/chicken.webp",
    "recipeTitle": "Perfect Roast Chicken",
    "recipeUrl": "https://www.foodnetwork.com/recipes/ina-garten/perfect-roast-chicken-recipe-1940592",
    "recipeJson": {
      "@context": "http://schema.org",
      "@type": "Recipe",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.8,
        "reviewCount": 1753
      },
      "author": [
        {
          "@type": "Person",
          "name": "Ina Garten",
          "url": "https://www.foodnetwork.com/profiles/talent/ina-garten"
        }
      ],
      "cookTime": "P0Y0M0DT1H30M0.000S",
      "dateModified": "2015-02-04T15:34:33.183-05:00",
      "datePublished": "2014-12-16T04:15:15.231-05:00",
      "description": "For the perfect roast chicken dinner every time, try this popular recipe from Ina Garten, Food Network's Barefoot Contessa.",
      "headline": "Perfect Roast Chicken",
      "image": [
        {
          "@type": "ImageObject",
          "description": "Perfect Roast Chicken",
          "height": "1280",
          "url": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/23/0/FN_perfect-chicken-014_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1384540895467.webp",
          "width": "1280"
        },
        {
          "@type": "ImageObject",
          "description": "Perfect Roast Chicken",
          "height": "960",
          "url": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/23/0/FN_perfect-chicken-014_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1384540895467.webp",
          "width": "1280"
        },
        {
          "@type": "ImageObject",
          "description": "Perfect Roast Chicken",
          "height": "720",
          "url": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/23/0/FN_perfect-chicken-014_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1384540895467.webp",
          "width": "1280"
        }
      ],
      "keywords": "Roasted Chicken,Chicken Recipes,Poultry,Roasting,Roast Recipes,Fruit,Lemon,Carrot Recipes,Main Dish,Recipes for a Crowd,Gluten Free",
      "mainEntityOfPage": true,
      "name": "Perfect Roast Chicken",
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "615",
        "carbohydrateContent": "13g",
        "cholesterolContent": "203mg",
        "fatContent": "44g",
        "fiberContent": "4g",
        "proteinContent": "41g",
        "saturatedFatContent": "13g",
        "servingSize": "1 of 8 servings",
        "sodiumContent": "994mg",
        "sugarContent": "4g"
      },
      "prepTime": "P0Y0M0DT0H20M0.000S",
      "publisher": {
        "@type": "Organization",
        "logo": {
          "@type": "ImageObject",
          "height": "60",
          "url": "https://food.fnr.sndimg.com/etc/clientlibs/assets/images/food/fn-logo-flat-60x60.png",
          "width": "60"
        },
        "name": "Food Network",
        "url": "https://www.foodnetwork.com"
      },
      "recipeCategory": "main-dish",
      "recipeIngredient": [
        "1 (5 to 6 pound) roasting chicken",
        "Kosher salt",
        "Freshly ground black pepper",
        "1 large bunch fresh thyme, plus 20 sprigs",
        "1 lemon, halved",
        "1 head garlic, cut in half crosswise",
        "2 tablespoons (1/4 stick) butter, melted",
        "1 large yellow onion, thickly sliced",
        "4 carrots cut into 2-inch chunks",
        "1 bulb of fennel, tops removed, and cut into wedges",
        "Olive oil"
      ],
      "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Preheat the oven to 425 degrees F."
        },
        {
          "@type": "HowToStep",
          "text": "Remove the chicken giblets. Rinse the chicken inside and out. Remove any excess fat and leftover pin feathers and pat the outside dry. Liberally salt and pepper the inside of the chicken. Stuff the cavity with the bunch of thyme, both halves of lemon, and all the garlic. Brush the outside of the chicken with the butter and sprinkle again with salt and pepper. Tie the legs together with kitchen string and tuck the wing tips under the body of the chicken. Place the onions, carrots, and fennel in a roasting pan. Toss with salt, pepper, 20 sprigs of thyme, and olive oil. Spread around the bottom of the roasting pan and place the chicken on top."
        },
        {
          "@type": "HowToStep",
          "text": "Roast the chicken for 1 1/2 hours, or until the juices run clear when you cut between a leg and thigh. Remove the chicken and vegetables to a platter and cover with aluminum foil for about 20 minutes. Slice the chicken onto a platter and serve it with the vegetables."
        }
      ],
      "recipeYield": "8 servings",
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "AuntSandra"
          },
          "reviewBody": "OMG! This chicken! was so good! my family loved this recipie and thhey were so delicous when the7y sawl it ! This is yes made me very happy gow happened. Free tay k. % stars",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Donna B."
          },
          "reviewBody": "This is a great recipe! I only had two yellow onions for the vegetables and I added about a cup of chicken stock once they started browning in the pan. I also tented the chicken when it reached a golden brown. The onions with the broth tasted exactly like French Onion Soup! I will definitely make this again and again. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "rgoodfel"
          },
          "reviewBody": "I have made this recipe now four times and it is my go to way to roast a chicken. It turns out so good! ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Jennyabermurray"
          },
          "reviewBody": "I’m no chef, and this was my first attempt at roasting a chicken. It was just under 5 lbs so I reduced the cooking time a little, and it was honestly unreal. Some of the bites with browned onions and the drippings — I was making embarrassing groaning noises. This is going to be a staple in our home from now on!! ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "LifeIsGood"
          },
          "reviewBody": "Excellent method for roasting chicken and veggies. The chicken was cooked to perfection. I subbed potatoes for the fennel (family preference) and then went on to make a pan gravy once everything was out of the oven. Delicious. Thank you!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Meredith M."
          },
          "reviewBody": "I love making this - and everyone in my house loves eating it!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "tammyjune"
          },
          "reviewBody": "Easy, delicious and most tender roast chicken I’ve ever made. Thank you Ina!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "bkelly2505"
          },
          "reviewBody": "I have made this several times and the chicken is excellent!  Very juicy and tender.  I baste several times (every 15-20 minutes) and it comes out perfect.  This is my go-to for chicken now and I’m so happy I found this recipe! ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "New_Chef"
          },
          "reviewBody": "Very good",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "GBO"
          },
          "reviewBody": "Excellent recipe.  Easy and always delicious.  I have to agree that checking temp on chicken at the 60 minute mark gives a good idea of how much longer to leave it roasting.  ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Dora B."
          },
          "reviewBody": "We love this recipe. My kids call it 'lemon butt chicken' ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "ShanonP"
          },
          "reviewBody": "Perfection!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "basureramio"
          },
          "reviewBody": "I have never left a recipe review before, in part because I rarely cook. But when I do, this is what I make. In my house this is known as \"Mama's Secret Famous Roast Chicken\". It is a straightforward recipe that makes \"shove your sister away to pick at the carcass\" delicious chicken. The skin is crispy. I gave this recipe to a friend, who made it for her husband. He said it was so good that it made him feel like he should be wearing a tie in order to eat it. I do potatoes instead of fennel. Parboil them first. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "dahlia5jones"
          },
          "reviewBody": "I've made this multiple times and it's a crowd pleaser every time!!! Only addition is that I add a little chicken broth to the pan.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "klmcgin"
          },
          "reviewBody": "Perfect!  No fennel added whole small potatoes. Delish ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "SUSAN K."
          },
          "reviewBody": "Best chicken I’ve ever tasted or made. Wouldn’t change on thing about this recipe!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous"
          },
          "reviewBody": "An easy and delicious recipe for roast chicken. I modify the baste, adding olive oil to the butter. Also added baby gold potatoes to supply a starch to complement the carrots, fennel and onion. When done, it looks as good as it tastes!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "l_augenstein"
          },
          "reviewBody": "This was delicious and everyone raved about it! Omitted carrots and doubled the fennel, also added halved new potatoes. My husband wanted more carbs with dinner, so he sauteed a few pierogis in the roasting pan/chicken fat while the chicken and veggies were resting. Amazing.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "kim.peinado.howard"
          },
          "reviewBody": "Simple and so good. Add whatever veggies you have on hand — we like adding quartered Yukon Gold potatoes. I’ve made this as directed as well as on convection oven and I suggest not using convection because it cooks too fast and over-crisps the veggies. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous"
          },
          "reviewBody": "Very good eating",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous"
          },
          "reviewBody": "I have made this several times! Always soooo yummy! Making today on a cold and rainy day! PERFECT! ❤️",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "monicasauve"
          },
          "reviewBody": "It's a good recipe, no one can deny that. Easy prep but still not what I am looking for. however I didn't use the fennel. ( Allergic to it) and one of my guests doesn't like fennel.Added  6  yellow cut up potatoes for last hour of roasting.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 3,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous"
          },
          "reviewBody": "First time trying this recipe and will definitely add to my rotation.  Excellent. Definitely not your typical, boring roast chicken. Tasty, juicy and easy.  Doesn’t get much better than that. Can’t believe how much flavor the lemon adds. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "rsbelsky"
          },
          "reviewBody": "This was simple and so juicy and good. Not an overly seasoned chicken, so if you are looking for strong herbs, then jazz up this recipe. Was nervous to cook a whole chicken at 425 degrees and was fearful it would be dry. Nope, juices were delicious and do not skip the 20 minute rest at the end!!  Had to add chicken stock midway bc vegetables had caramelized and were beginning to burn to the pan. So be aware. Just delicious and I am a great cook and this blew me away!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "james_reid"
          },
          "reviewBody": "Good recipe, but butter burns and makes the skin bitter. Next time, I will use clarified butter, which has much higher smoke point than the cooking temp. Air dry the chicken overnight in the fridge for crispier skin. Maybe I will try leeks instead of fennel, and some small peeled potatoes with the carrots.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 4,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous"
          },
          "reviewBody": "Perfect every time! ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "kokobear2000"
          },
          "reviewBody": "Oh my! The best roast chicken I have ever made. Amazing flavour and the chicken was super moist.  Followed the recipe exactly and would not change a thing.   The fennel put it over the top. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "mml626"
          },
          "reviewBody": "I made Jeffrey’s Chicken last week and didn’t love the wine sauce. But this one? Winner winner chicken dinner, indeed! The recipe on the Barefoot Contessa website makes a gravy with the drippings and I will forever do this. Don’t skip on the fennel, wasn’t sure how we would like it, but it we most definitely did. YUM. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous"
          },
          "reviewBody": "So simple and easy and leaves everyone impressed!! Make this all the time for Sunday dinner.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous"
          },
          "reviewBody": "My kids love this chicken. I’ve made it several time, and will continue to.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "D R."
          },
          "reviewBody": "I have made this chicken over and over again for many years and each time it’s a winner! I only add tiny red potatoes to the roasting pan, everything else the same.  Thank you, Ina! ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "kmo49"
          },
          "reviewBody": "I usually make \"Jeffrey's Roast Chicken\" but tried this one yesterday. In Ina's \"The Barefoot Contessa Cookbook\" it did not call for fennel. I used the Spanish onion it called for and added the carrots and baby potatoes around the chicken. Absolutely delicious! The chicken was flavorful and tender (I use organic chicken). I will try it with the fennel next time -- and there will be a next time! My husband asked me to make it again.  ;o)",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "dme1023"
          },
          "reviewBody": "This is the best roast chicken and vegetables I've ever made! I made this in a cast iron skillet and the vegetables became so carmelized. Absolutely amazing. Thank you Ina you are definitely amazing 10 stars from me!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous"
          },
          "reviewBody": "Chicken is gggrereeaaattt! Mike Stice.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Erica Z."
          },
          "reviewBody": "It’s Amazing!!! Ina is AWESOME !!!<br />I have made it many times, and it does not disappoint!!!! Sometimes I cut up petite Yukon gold potatoes and toss them with the carrots, fennel &amp; onion.<br />It is delicious &amp; the house smells wonderful!!!<br />",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "PackerFan#80"
          },
          "reviewBody": "Wow! Juicy, perfectly crispy/browned skin. Used a cast iron skillet with celery/carrots/onions. Turned 45-degrees throughout roasting for even browning. Veggies were TASTY! Nice caramelization &amp; slight char which brought out sweetness of carrots. Hubby LOVED it. I should've taken a picture because it is photo worthy!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous"
          },
          "reviewBody": "This was one of the moistest chickens I’ve ever made. I followed the recipe to a tee with the exception of massaging the chicken breast under the skin with butter and then also massaged the skin with butter (I mean everything is better with butter!). Cooked a 5.7 pounder for 1.5 hours; rotated the pan every 30 minutes; and turned down the temperature to 375 at the hour mark. Let it sit when done for 15 minutes while I roasted some asparagus. The whole meal was outstanding. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rich Tomlinson"
          },
          "reviewBody": "It’s my go to meal when the weather turns chilly. No changes to the recipe needed. Simple and perfect as it is",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous"
          },
          "reviewBody": "Added parsnips, then made chicken soup the next day. Delicious!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Cheryl"
          },
          "reviewBody": "My son and his family were visiting when I made this chicken and they really liked the flavor! Everything was perfect except the carrots weren't quite done yet. I cut them too big.  I should have put the veggies back in the oven for a bit but it was late and we all just wanted to eat, lol.  That's probably why she put the veggies back in the oven on the video.  Wonderful meal!  Should be totally awesome next time if I just tweak a couple of things.  The recipe is really good, I just need to adjust Temps and time. But nothing was burnt and the chicken was done.  Not bad for the first try,  lol! ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Portia"
          },
          "reviewBody": "Checked in after an hour and the onions were completely burnt! Chicken was also done - perfectly. I advise checking halfway through!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 4,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "aks.siegel"
          },
          "reviewBody": "I only cooked 1:20 because my chicken was 4.5 lbs. It was the right amount of time for the chicken but it was bland and the vegetables were very overcooked.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 3,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Nancy M"
          },
          "reviewBody": "Delish!  Don't see any need to rinse a chicken nowadays because it spreads bacteria but to each his own.  I followed the recipe almost.  Forgot to pick up the head of garlic so I put a little over a tsp of garlic powder into the cavity.  My bunch of thyme was huge so I had enough for the cavity + the vegies which were perfectly done and a bit caramelized.  I added a large russet potato (unpeeled, 1\" cubed) for a little over the last half hour and the cubes were also perfectly done in the juice/butter/vegetable melange.  Trying to think what the whole thing tasted like and I'll have to settle for \"MORE\".",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Muffin O."
          },
          "reviewBody": "The best chicken I've ever had and the house smells so good as it's cooking. I wish I could give it more than 5 stars",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Marsha V."
          },
          "reviewBody": "I’ve made this roast chicken many times with perfect results.  I do dry brine it for a day before I roast it but, other than that,  I follow the recipe.  Perfect!  Juicy, flavourful, and tender every time. Time in the oven is adjusted for the size of the chicken. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "shellbelle234"
          },
          "reviewBody": "I’ve made this several times (and it’s great) but I have questions. First, I salted the bird then stuffed it, then put the butter on. By the time I’ve then tied the legs and attempted to tuck the wings it seems like all the butter is on my hands and not the bird. Also, any tips for “tucking the wings” under so they don’t burn? I end up with them covered with a piece of onion or something but I just can’t seem to get them neatly tucked under. Would love any tips. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rob"
          },
          "reviewBody": "Tasty, simple. Plainly written recipe with no hidden snags for most people. Follow the directions, bird sizes, and temperatures and you'll end up with a nice roasted chicken. Be sure to buy a good quality bird for this instead of the bargain brands that are pumped full of water. That's never going to be good.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "venessa L"
          },
          "reviewBody": "I have made this chicken several times! I use convection roast @400 for 15 min then reduce temp to 375 for 1 hr.  Tent as needed- but I like a crispy skin so do not usually need to. <br />This roast so tender and flavorful!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Cheryl H."
          },
          "reviewBody": "425° for an hour and a half... Well I know that's one way to make a chicken unrecognizable 🙄😒it burned up!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 1,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "gshell9"
          },
          "reviewBody": "I have made this twice as directed and it has been amazing both times!!!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rhonda S."
          },
          "reviewBody": "This chicken was really moist but my family and I agreed, even with the goodies inside, it wasn’t very flavorful.  Next time I plan to add minced garlic to softened butter to spread all over the chicken before baking.  I agree with many that baking at the full 1 and 1/2 hours at 425 degrees is too hot.  I set my timer for 30 minutes and turned the casserole dish every time the timer went off.  This kept the chicken and vegetables from charring too badly.  Everything turned out tender and moist ; again just not as flavorful as my family and I like.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 4,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "so good, this is one of our family favorites!  I like to make a gravy with the drippings while the chicken is resting.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "This is my go-to recipe for roast chicken. It never fails. I always add more veggies than the recipe calls for because my family LOVES them. I’ve substituted veggies but the OG (onion, fennel, and carrot) are truly the best. If your veggies are burning early on, your pan simply isn’t big enough. I typically lower the oven temperature after 15-20min, then crank back up for last 7-8min. Perfection, every single time. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "Made this last night. YUM! I made just a few revisions. First, I didn't have fresh thyme but I did have a beautiful bunch of dill. Second, after reading some reviews, I decided to start at 424 then decreased to 375. Don't know if I had too, but it worked and there was no burning of anything. I made the gravy and it was devine. Tasted like my Mom's and she was a fabulous cook. So good that I had a piece of bread with butter and just dipped it in the gravy....yummy.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "Made this using a 7 1/2 lb chicken, roasted for 2 hours.  Delicious!  I made a broth from the reserved neck/giblets while the chicken was roasting. After putting the chicken on a platter and scooping out the vegetables, I made a gravy from the reserved pan drippings and broth.  Next time, I think I would make LOTS more veggies - at least twice s many - they cook down - but are very delicious!!!  My veggies did NOT burn, but were covered by the chicken while roasting.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "This recipe is nearly perfect.<br />Only thing I would say is only roast at 425 for about the first 15 minutes, then you should turn down to 350 for the remainder. Baste a few times, and check it to ensure the veggies are okay. <br />I made a spice rub to add after brushing it with butter: parsley, sage, paprika, onion and garlic powder, ground pepper. The spices burned due to the high temp but the skin came out perfectly crispy.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 4,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "I have made this recipe several times now. Works great for me. I usually baste the chicken at about one hour. <br />Rest it for 20-30 minutes on a platter before carving ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "Yup. Absolutely perfect. Nothing more to say. Just make sure if you are using a convection oven that you set the temp to 400 (instead of 425). And cover as much of your veggies as you can with the chicken as they will burn a little bit, but honestly it doesnt really matter because it’s delicious either way. Don’t hesitate to make this recipe. Easy and delicious. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "I have never roasted a chicken before, but you would never know if you tried the chicken I just made! I followed the recipe *almost* exactly, using chicken and veggies from my local farmers market, swapped fennel for potatoes, and had a 3.25 lb bird so I cooked for about 65 min instead. My two year old ate an entire chicken breast herself- which, for those of you who are parents- will know that it’s often difficult to find something that both kids and adults can get down on! Leave it to Ina to give us a recipe so simple, yet so fabulous! ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "Do not rinse poultry!! Cooking the chicken will kill any bacteria, it does not need to be washed. You risk contaminating your kitchen and spreading germs to other food or utensils when rinsing any type of poultry in the sink. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 1,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "After one hour, the veggies were burning and I had to remove the burnt ones .  Chicken skin was getting burnt as well.  Followed the recipe to a T but it just didn't work out for me.  I ended up covering with foil and putting the chicken back in the oven at 350 for another 1/2 hour.  Disappointed.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 2,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "Best roasted chicken I’ve ever made! Family agreed! I added more carrots and also small potatoes.   I didn’t have fresh, so I just used dried thyme.  I also did a compound herb de Provence butter between the skin and the meat breast side for a delicious crispy brown skin. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "pattiem"
          },
          "reviewBody": "Made this using a 5 1/2 pount chicken.  It was overcooked at 1 1/2 hours.  Flavor of the veggies was excellent even though they were also over cooked and somewhat charred.  Next time I'll go with my better judgement and use a leave in thermometer and add the veggies part way through the cooking process or add some broth or wine to the pan during cooking.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 3,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "It was amazing. Tender juicy chicken, great flavors. My additions and substitutions made it perfect for us. Substituted leeks and shallots for the fennel. Added 2 thinly sliced (mandolin) russet potatoes on top to hold in moisture and create a perfect starch to mix with caramelized vegetables. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "I’m putting this in my top 5 roast chicken dishes. Simple and delicious. <br />Thanks Ina !",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "So far the best roast chicken recipe and very easy! I cooked mine in a Dutch oven, the veges didn’t burn because they sat right under the chicken &amp; I added small round potatoes.  The outcome was very moist and flavorful. I basted on hour into the cooking process. This was a winner!!!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "This is one of the best roast chicken recipes out there. A few modifications- peel and smash the garlic cloves before putting inside the chicken. The vegetables should be really coated in olive oil and placed under the chicken so that they don't burn. (I'm not sure why there are so many complaints about scorched veggies. My guess is that they are too exposed to air.) Use a large iron skillet instead of roast pan. The high sides keep the veggies together and in close contact with the chicken and the butter and oil fats.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "Fabulous and foolproof! And if you like cooked carrots and onions, make extra! They go super fast and are absolutely delicious. I do add a bit of seasoning with the salt and pepper (just a little Mrs. Dash or the like) because my husband likes more intense flavors, but this chicken is everything. I make it at least 1x a month and use the leftovers for soup or chicken pot pie!<br />",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Bonnie P."
          },
          "reviewBody": "Chicken was delicious and so moist. Skin was crispy and tasty with the butter and seasoning. The thyme makes a big difference - fresh is best. I will double the fennel which really makes the dish. Yes, my veggies got charred which was a huge disappointment. So, I'll wait to add them 25 mins in and put them under the bird at that time and will keep an eye out. Will also use a smaller pan to compact them more. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 4,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Eileen L."
          },
          "reviewBody": "I’m confused at first the recipe calls for 20 sprigs of thyme to be put inside the chicken, farther down the directions call to place the thyme outside the chicken with the carrots and fennel. Which one is it, in the chicken or out? I gave four stars because anything Ina makes is tasty!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 4,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "Tasty,  juicy, ...everything was perfect.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "This was my first time roasting a chicken and I thought this was a very delicious and easy recipe. I was not expecting my bird to still be partially frozen when I got it out of the refrigerator, so I looked online for some advice - it said I could cook the frozen bird at 350 for 4 hours. I ended up cooking it at 375 for 2.5 hours. The only thing that was mediocre was that the vegetables weren't soft enough. After reading the reviews on this recipe, I would have thought the lower temp would have made the veggies perfect (some of the reviews said the veggies were charred). ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 4,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "One of the best roasted chickens ever. My husband doesn't like chicken very much but he loves this one. The recipe was easy to follow; the chicken came out full of flavors, juicy, and crispy on the outside. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "Perfectly cooked and very juicy. I used potatoes instead of carrots and fennel and it was really good. I also didn't melt the butter, but softened it and then rubbed it all over the chicken. The breast was perfectly browned. I had to roast it about 15 minutes more for the thickest part of the chicken to be 165 degrees, but that might be due to my oven's temp accuracy. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "Perfectly cooked chicken! I followed the recipe, exactly other than chopping the vegetables into larger pieces due to some of the reviews. I will make this again and again. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "maryw"
          },
          "reviewBody": "The chicken was absolutely moist and delicious with wonderful flavor.  However, we found the veggies somewhat greasy, having absorbed  all the chicken fat.  Next time I will likely roast them separately.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 4,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "I’ve made this numerous times and the result is consistent. Perfectly roasted, moist chicken. <br /><br />It’s a great base recipe for those recipes needing shredded chicken in them especially soups. <br /><br />As others have mentioned, don’t roast with vegetables unless they are big chunks otherwise they burn.",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "so good..first time carving a chicken for me. I watched the video 10 times and it came out perfect!!  fennel gave it such a unique taste.  i followed recipe exactly and so good",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous"
          },
          "reviewBody": "This is my favorite roasted chicken so bomb every time and I also add little purple potatoes and rosemary comes out so good. This is my go to always definitely recommended ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "The chicken itself tasted good and was nicely moist, but putting vegetables in with it also at 425 degrees for 1.5 hours made them completely charred and inedible. I should have trusted my better judgement and put the veggies in separately halfway through cooking the chicken. ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 3,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Barb C."
          },
          "reviewBody": "THE best chicken ever! Now I know why Jeffrey wants this every week. We made this and it couldn't have been easier and more flavorful. I will not buy another rotisserie chicken from the store again. Thanks so much, Ina!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous"
          },
          "reviewBody": "First time making a whole chicken and this recipe  made it so easy. Chicken came out perfect!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "bellybeans"
          },
          "reviewBody": "I've cooked delicious roast chicken for near 50 years and usually LOVE Ina's recipes!  This was the worst chicken ever!  Timing was off, seasoning same, fed to my cats &amp; dog &amp; they hated it as well!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 1,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Josie R."
          },
          "reviewBody": "Ina does it again! This was a very easy recipe that require minimal ingredients.  The meat was tender and juicy and the skin was golden and crispy.  I will definitely make this again.  ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 4,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous"
          },
          "reviewBody": "An easy recipe and absolutely delicious!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "I did this last week. Amazing! Doing it again tonight. I think this time I’ll clean the garlic cloves and put them in the cavity individually instead of putting the whole bulb in. So very good and moist! ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "A.Seal26"
          },
          "reviewBody": "Perfect every time! I’ve made this recipe countless times and the chicken is tender and juicy every single time. Sometimes I forgo the vegetables on the bottom and sometimes I change them up. This truly is the only roast chicken recipe you’ll ever need! ",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "lovelyz"
          },
          "reviewBody": "Delicious and simple. Can't wait to make it again! I used dried thyme instead of fresh thyme because I forgot to get it at the store. I'm sure it would be better with the fresh stuff, but it was mighty tasty my way, too!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Michele with one l"
          },
          "reviewBody": "This is so tender and moist the meat fell off the drumsticks! Made per the recipe. Delicious",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Food Network User"
          },
          "reviewBody": "I researched recipes for roast chicken because they are so tricky. Either the white meat gets dry or the dark meat is underdone. The reviews for America's Test Kitchen recipe scared me off because of the phrases \"smoke alarms\" and \"spattered grease all over my oven\". So I tried this one. I don't need to try another. It was perfection! And so beautifully seasoned by everything in, on, and around it. And looked absolutely gorgeous when it came out of the oven. And so easy! <br />",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "BILL DORGAN"
          },
          "reviewBody": "Easy. Adaptable. Scrumptious. No left-overs!",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": 5,
            "worstRating": "1"
          }
        }
      ],
      "totalTime": "P0Y0M0DT2H10M0.000S",
      "url": "https://www.foodnetwork.com/recipes/ina-garten/perfect-roast-chicken-recipe-1940592",
      "video": {
        "@type": "VideoObject",
        "contentUrl": "https://www.foodnetwork.com/apps/api/playback?path=/etc/sni-asset/food/videos/0/01/010/0105/0105038",
        "description": "Food Network's Ina Garten shares her easy recipe for the perfect roast chicken with vegetables. You'll need a chicken, butter, garlic, fresh thyme, salt, pepper, and your choice of roasting vegetables.",
        "duration": "PT0H5M42S",
        "name": "Ina Garten's Easy Recipe for Perfect Roast Chicken and Vegetables",
        "thumbnailUrl": "https://food.fnr.sndimg.com/content/dam/images/food/video/0/01/010/0105/0105038.jpg.rend.hgtvcom.406.305.suffix/1660620061691.webp",
        "uploadDate": "2022-08-15T23:21:38.296-04:00"
      }
    }
  },
  {
    "id": 3,
    "websiteName": "Smitten Kitchen",
    "thumbnailUrl": "/images/Gallery/apple-cake.webp",
    "recipeTitle": "Mom's Apple Cake",
    "recipeUrl": "https://smittenkitchen.com/2008/09/moms-apple-cake/",
    "recipeJson": {
      "@context": "https://schema.org",
      "@type": "Recipe",
      "author": {
        "@type": "Person",
        "name": "Deb Perelman"
      },
      "cookTime": "PT90M",
      "datePublished": "2008-09-30",
      "description": "My mother makes the best apple cake, and has for as long as I can remember. Big cinnamon-y chunks of apple nestle into a coffee cake I would call “unbelievably” moist.",
      "keywords": "Apple, Best of Smitten Kitchen, Cake, Dairy-Free, Everyday Cakes, Fruit, Jewish",
      "name": "Mom’s Apple Cake",
      "prepTime": "PT20M",
      "recipeCategory": "Cake",
      "recipeIngredient": [
        "6 apples, Mom uses McIntosh apples, I use a mix of whatever looks good",
        "1 tablespoon ground cinnamon",
        "5 tablespoons (65 grams) granulated sugar",
        "2 3/4 cups (360 grams) flour",
        "1 tablespoon baking powder",
        "1 teaspoon fine sea or table salt",
        "1 cup (235 ml) vegetable oil (safflower, sunflower, olive and coconut oil also work, as does melted butter)",
        "2 cups (400 grams) granulated sugar",
        "1/4 cup (60 ml) orange juice",
        "2 1/2 (13 ml) teaspoons vanilla extract",
        "1 cup (130 grams) walnuts, chopped (optional and to be honest, we never use them)"
      ],
      "recipeInstructions": [
        "Heat oven to 350°F (175°C). Grease a tube pan. (I use this one or an equivalent one-piece tube.) Peel, core and chop apples into 1-inch chunks.Toss with cinnamon and 5 tablespoons sugar and set aside.",
        "Stir together flour, baking powder and salt in a large mixing bowl. In a separate bowl, whisk together oil, orange juice, sugar, vanilla and eggs. Mix wet ingredients into dry ones; scrape down the bowl to ensure all ingredients are incorporated.",
        "Pour half of batter into prepared pan. Spread half of apples (and their juices) over it. Pour the remaining batter over the apples and arrange the remaining apples on top. Bake for about 1 1/2 hours, or until a tester comes out clean.*",
        "Cool completely before running knife between cake and pan, and unmolding onto a platter."
      ],
      "recipeYield": "12-16 servings",
      "suitableForDiet": "https://schema.org/VegetarianDiet"
    }
  },
  {
    "id": 4,
    "websiteName": "America's Test Kitchen",
    "thumbnailUrl": "/images/Gallery/cookies.webp",
    "recipeTitle": "Perfect Chocolate Chip Cookies",
    "recipeUrl": "https://www.americastestkitchen.com/recipes/4737-perfect-chocolate-chip-cookies",
    "recipeJson": {
      "@context": "https://schema.org",
      "@type": "Recipe",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "reviewCount": 2210
      },
      "author": [
        {
          "@type": "Person",
          "name": "Charles Kelsey",
          "url": "https://www.americastestkitchen.com/authors/180-Charles-Kelsey"
        }
      ],
      "commentCount": 1301,
      "dateModified": "2025-08-25",
      "datePublished": "2013-05-15",
      "description": "We set out to achieve a cookie that was crisp at the edges, chewy in the middle, and full of rich toffee flavor. The result? One of our most popular recipes of all time. Our perfect chocolate chip cookie recipe had to produce a cookie that would be moist and chewy on the inside and crisp at the edges, with deep notes of toffee and butterscotch to balance its sweetness. Melting the butter gave us the chewiness we were looking for. Cutting back on the flour and eliminating an egg white also improved texture and brought the brown sugar flavor to the fore. To give our chocolate chip cookie recipe the crisp edges and toffee flavor we wanted, we let the sugar dissolve in the batter for 10 minutes, then baked the cookies at a high temperature so the edges darkened while the centers stayed soft.",
      "hasPart": {
        "@type": "WebPageElement",
        "cssSelector": ".detail-page-main",
        "isAccessibleForFree": false
      },
      "image": [
        {
          "@type": "ImageObject",
          "contentUrl": "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_1200/SFS_Perfect_Chocolate_Chip_Cookies-5380_j6fgh6.auto",
          "creditText": "America's Test Kitchen",
          "height": 1200,
          "representativeOfPage": true,
          "url": "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_1200/SFS_Perfect_Chocolate_Chip_Cookies-5380_j6fgh6.auto",
          "width": 1200
        }
      ],
      "isAccessibleForFree": false,
      "keywords": "Desserts or Baked Goods, Chocolate, Cookies",
      "name": "Perfect Chocolate Chip Cookies",
      "nutrition": {
        "@context": "http://schema.org",
        "@type": "NutritionInformation",
        "calories": 314,
        "carbohydrateContent": "35 grams",
        "cholesterolContent": "50 miligrams",
        "fatContent": "18 grams",
        "proteinContent": "3 grams",
        "saturatedFatContent": "9 grams",
        "sodiumContent": "155 miligrams",
        "sugarContent": "23 grams",
        "transFatContent": "0 grams",
        "unsaturatedFatContent": "7 grams"
      },
      "recipeCategory": "Desserts or Baked Goods, Cookies",
      "recipeIngredient": [
        "1 3/4 cups, unbleached all-purpose flour (8 3/4 ounces/248 grams)",
        "1/2 teaspoon, baking soda ",
        "14 tablespoons, unsalted butter (1 3/4 sticks)",
        "1/2 cup, granulated sugar (3 1/2 ounces/99 grams)",
        "3/4 cups, packed dark brown sugar (5 1/4 ounces/149 grams) (see note)",
        "1 teaspoon, table salt ",
        "2 teaspoons, vanilla extract ",
        "1 large, egg ",
        "1 , large egg yolk ",
        "1 1/4 cups, semisweet chocolate chips or chunks (see note)",
        "3/4 cup, chopped pecans or walnuts, toasted (optional)"
      ],
      "recipeInstructions": [
        {
          "@type": "HowToSection",
          "itemListElement": [
            {
              "@type": "HowToStep",
              "text": "Avoid using a nonstick skillet to brown the butter; the dark color of the nonstick coating makes it difficult to gauge when the butter is browned. Use fresh, moist brown sugar instead of hardened brown sugar, which will make the cookies dry. This recipe works with light brown sugar, but the cookies will be less full-flavored. For our winning brand of chocolate chips,  see related tasting ."
            },
            {
              "@type": "HowToStep",
              "text": "Adjust oven rack to middle position and heat oven to 375 degrees. Line 2 large (18- by 12-inch) baking sheets with parchment paper."
            },
            {
              "@type": "HowToStep",
              "text": "Whisk together  1¾ cups unbleached all-purpose flour  and  ½ teaspoon baking soda  in medium bowl; set aside."
            },
            {
              "@type": "HowToStep",
              "text": "Heat  10 tablespoons unsalted butter  in 10-inch skillet over medium-high heat until melted, about 2 minutes. Continue cooking, swirling pan constantly until butter is dark golden brown and has nutty aroma, 1 to 3 minutes."
            },
            {
              "@type": "HowToStep",
              "text": "Remove skillet from heat and use heatproof spatula to transfer browned butter to large heatproof bowl. Stir remaining  4 tablespoons unsalted butter  into hot butter until completely melted."
            },
            {
              "@type": "HowToStep",
              "text": "Add  ½ cup granulated sugar ,  ¾ cup packed dark brown sugar ,  1 teaspoon table salt , and  2 teaspoons vanilla extract  to bowl with butter and whisk until fully incorporated."
            },
            {
              "@type": "HowToStep",
              "text": "Add  1 large egg  and  1 large egg yolk  and whisk until mixture is smooth with no sugar lumps remaining, about 30 seconds. Let mixture stand for 3 minutes, then whisk for 30 seconds. Repeat process of resting and whisking 2 more times until mixture is thick, smooth, and shiny."
            },
            {
              "@type": "HowToStep",
              "text": "Using rubber spatula or wooden spoon, stir in flour mixture until just combined, about 1 minute.Stir in  1¼ cups semisweet chocolate chips or chunks  and  ¾ cup toasted and chopped pecans or walnuts , if using. Give dough final stir to ensure no flour pockets remain."
            },
            {
              "@type": "HowToStep",
              "text": "Divide dough into 16 portions, each about 3 tablespoons (or use #24 cookie scoop). Arrange 2 inches apart on prepared baking sheets, 8 dough balls per sheet. (Smaller baking sheets can be used, but will require 3 batches.)"
            },
            {
              "@type": "HowToStep",
              "text": "Bake cookies 1 tray at a time until cookies are golden brown and still puffy, and edges have begun to set but centers are still soft, 10 to 14 minutes, rotating baking sheet halfway through baking."
            },
            {
              "@type": "HowToStep",
              "text": "Transfer baking sheet to wire rack; cool cookies completely before serving."
            }
          ],
          "name": "Recipe Instructions",
          "position": "1"
        },
        {
          "@type": "HowToSection",
          "itemListElement": [
            {
              "@type": "HowToStep",
              "description": "Even a tablespoon too much or too little flour can have an impact on cookies. Heres how to measure accurately.",
              "itemListElement": [
                {
                  "@type": "HowToTip",
                  "text": "PREFERRED WEIGH FLOUR For the greatest accuracy weigh flour before using it. Put a bowl on a scale hit the tare button to set the scale to zero and scoop the flour into the bowl.",
                  "thumbnailUrl": "https://res.cloudinary.com/hksqkdlah/image/upload/7472_ilo-measuringdyingredients.jpg"
                },
                {
                  "@type": "HowToTip",
                  "text": "SECOND-BEST DIP AND SWEEP Dip a dry measuring cup into the flour sweeping away excess flour with a flat edge. This method yields more accurate results than spooning flour into a measuring cup.",
                  "thumbnailUrl": "https://res.cloudinary.com/hksqkdlah/image/upload/7473_ilo-leveling-measuringcup.jpg"
                }
              ],
              "name": "Measure It Right"
            },
            {
              "@type": "HowToStep",
              "description": "Heres how we improved on the Toll House classic to create an even better cookie.",
              "itemListElement": [
                {
                  "@type": "HowToTip",
                  "text": "TOLL HOUSE RECIPE Equal Amounts Brown and White SugarA ratio of brown to white sugar creates a cookie thats neither crisp nor chewy.",
                  "thumbnailUrl": "https://res.cloudinary.com/hksqkdlah/image/upload/7474_sil-sugar-brownwhite-02-htc.jpg"
                },
                {
                  "@type": "HowToTip",
                  "text": "OUR RECIPE More Brown SugarUsing more brown sugar than white makes for a chewier cookie.",
                  "thumbnailUrl": "https://res.cloudinary.com/hksqkdlah/image/upload/7475_sil-sugar-brownwhite-01-htc.jpg"
                },
                {
                  "@type": "HowToTip",
                  "text": "TOLL HOUSE RECIPE Creamed Solid Butter  Creaming butter creates a cakier texture in cookies.",
                  "thumbnailUrl": "https://res.cloudinary.com/hksqkdlah/image/upload/7476_sil-sticksbutter-chocochipcookies-02-htc.jpg"
                },
                {
                  "@type": "HowToTip",
                  "text": "OUR RECIPE Browned Melted Butter  Melting butter contributes to chewiness browning it enhances flavor.",
                  "thumbnailUrl": "https://res.cloudinary.com/hksqkdlah/image/upload/7477_sil-brownbutter-chocochipcookies-02-htc.jpg"
                },
                {
                  "@type": "HowToTip",
                  "text": "TOLL HOUSE RECIPE Whole Eggs  Whole eggs contribute to a drier texture.",
                  "thumbnailUrl": "https://res.cloudinary.com/hksqkdlah/image/upload/7478_sil-eggs-chocochipcookies-05-htc.jpg"
                },
                {
                  "@type": "HowToTip",
                  "text": "OUR RECIPE Whole Egg Yolk  Eliminating one egg white also boosts chewiness.",
                  "thumbnailUrl": "https://res.cloudinary.com/hksqkdlah/image/upload/7479_sil-eggs-chocochipcookies-04-htc.jpg"
                },
                {
                  "@type": "HowToTip",
                  "text": "TOLL HOUSE RECIPE Beat and Bake  Baking the dough immediately after mixing doesnt allow the sugar to dissolve as fully as possible.",
                  "thumbnailUrl": "https://res.cloudinary.com/hksqkdlah/image/upload/7197_sil-mixer-kitchenaid600.jpg"
                },
                {
                  "@type": "HowToTip",
                  "text": "OUR RECIPE Whisk and WaitWhisking sugar into the liquid ingredients and then waiting  minutes allows more of it to dissolve setting up better flavor and texture.",
                  "thumbnailUrl": "https://res.cloudinary.com/hksqkdlah/image/upload/7480_142x94-1000544-sbs-balloon-whisk-rosle-detail.jpg"
                },
                {
                  "@type": "HowToTip",
                  "text": "TOLL HOUSE RECIPE Less Dough  The smaller the cookie the more uniform its texture.",
                  "thumbnailUrl": "https://res.cloudinary.com/hksqkdlah/image/upload/Reprocessed Images for CIO/SIL_CookieDough_ChocoChipCookies_01.png"
                },
                {
                  "@type": "HowToTip",
                  "text": "OUR RECIPE More Dough  Three tablespoons of dough per cookie increases its crisp-chewy contrast.",
                  "thumbnailUrl": "https://res.cloudinary.com/hksqkdlah/image/upload/Reprocessed Images for CIO/SIL_CookieDough_ChocoChipCookies_02.png"
                }
              ],
              "name": "Creating a New Classic"
            },
            {
              "@type": "HowToStep",
              "description": "Baking two trays at a time may be convenient but it leads to uneven cooking. The cookies on the top tray are often browner around the edges than those on the bottom even when rotated halfway through cooking.",
              "itemListElement": [
                {
                  "@type": "HowToTip",
                  "text": "TOP RACK",
                  "thumbnailUrl": "https://res.cloudinary.com/hksqkdlah/image/upload/7483_sil-chocolatechipcookies-007-htc.jpg"
                },
                {
                  "@type": "HowToTip",
                  "text": "BOTTOM RACK",
                  "thumbnailUrl": "https://res.cloudinary.com/hksqkdlah/image/upload/7484_sil-chocolatechipcookies-0061-htc.jpg"
                }
              ],
              "name": "Don't Bake in Batches"
            }
          ],
          "name": "Test Kitchen Techniques",
          "position": "2"
        }
      ],
      "recipeYield": [
        16,
        "Makes 16 cookies"
      ],
      "tool": [
        {
          "@type": "HowToTool",
          "image": "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_150/32616_sil-hightempspatula-rubbermaidcomm",
          "name": "Silicone Spatulas"
        },
        {
          "@type": "HowToTool",
          "image": "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_150/32402_web-sil-rimmed-baking-sheets-nordic-ware-bakers-half-sheet-pan-43100",
          "name": "Rimmed Baking Sheets"
        },
        {
          "@type": "HowToTool",
          "image": "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_150/22997_sil-whisk-oxogoodgrips-74191-1",
          "name": "All-Purpose Whisks"
        },
        {
          "@type": "HowToTool",
          "image": "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_150/13366_sil-coolingrack-cia-bakeware-detail",
          "name": "Cooling Racks"
        },
        {
          "@type": "HowToTool",
          "image": "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_150/1163_sil-digitalscale-oxo-detail",
          "name": "Digital Scales"
        }
      ],
      "totalTime": "PT1H20M",
      "url": "https://www.americastestkitchen.com/recipes/4737-perfect-chocolate-chip-cookies",
      "video": {
        "@type": "VideoObject",
        "description": "We set out to perfect the back-of-the-bag classic with a cookie that was crisp at the edges, chewy in the middle, and full of rich toffee flavor.",
        "name": "Perfect Chocolate Chip Cookies",
        "thumbnailUrl": [
          "https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_150/28299_sfs-chocolate-chip-cookie-75"
        ],
        "uploadDate": "2011-09-08T10:49:00.000Z"
      }
    }
  },
];
