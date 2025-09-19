"use client"
import Image from 'next/image';
import { featuredRecipes, FeaturedRecipe } from '@/app/api/data';
import Masonry from 'react-masonry-css';
import Link from 'next/link';
import { useRecipe } from '@/context/RecipeContext';
import { useRouter } from 'next/navigation';

const Gallery = () => {
    const { setRecipe } = useRecipe();
    const router = useRouter();

    const handleViewRecipe = (recipe: FeaturedRecipe) => {
        setRecipe(recipe.recipeJson);
        router.push('/recipe');
    };

    return (
        <section id="cook-section">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md' id='gallery-section'>
                <div className="text-center">
                    <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Featured Recipes</p> {/* Updated heading */}
                    <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
                        Cook recipes from around the web
                    </h2>
                </div>
                <div className="my-16 px-6">
                    <Masonry
                        breakpointCols={{ 'default': 2, '700': 2, '500': 1 }}
                        className="flex gap-6"
                        columnClassName="masonry-column"
                    >
                        {featuredRecipes.map((item: FeaturedRecipe) => (
                            <div key={item.id} className="overflow-hidden rounded-3xl mb-6 relative group">
                                <Image
                                    src={item.thumbnailUrl}
                                    alt={item.recipeTitle}
                                    width={600}
                                    height={500}
                                    className="object-cover w-full h-full"
                                />
                                <div className="w-full h-full absolute bg-black/40 top-full group-hover:top-0 duration-500 p-8 flex flex-col items-start gap-4 justify-end"> {/* Adjusted padding and gap */}
                                    <h3 className='text-white text-xl font-semibold'>
                                        {item.recipeTitle}
                                    </h3>
                                    <div className="flex items-center justify-between w-full">
                                        <p className='text-white text-base'>
                                            Source: <a href={item.recipeUrl} target="_blank" rel="noopener noreferrer" className='font-medium underline'>{item.websiteName}</a>
                                        </p>
                                        <button
                                            onClick={() => handleViewRecipe(item)}
                                            className='text-white rounded-full bg-primary border border-primary py-2 px-5 text-sm hover:bg-primary/40 hover:backdrop-blur-sm' // Adjusted padding/text size
                                        >
                                            View Recipe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
