"use client"
import Image from 'next/image';


const Cook = () => {

    return (
        <section className='relative' id="about-section">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className='absolute right-0 bottom-[-18%] hidden lg:block'>
                    <Image src='/images/Cook/burger.png' alt="burger-image" width={463} height={622} />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
                    <div className='col-span-6 flex justify-start'>
                        <Image src="/images/Cook/cook.png" alt="nothing" width={636} height={808} />
                    </div>
                    <div className='col-span-6 flex flex-col justify-center'>
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase text-center md:text-left'>cook with us</p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-center md:text-left">
                        Recipes without the reading.
                        </h2>
                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-center md:text-left mt-6'>No more squinting at screens with messy hands! Our Chrome extension turns any online recipe into a hands-free, voice-guided experience. Just install, select your recipe, and let AI walk you through step by step—so you can focus on cooking, not reading.</p>
                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-center md:text-left'>Need to pause? Just ask. Wondering “What&apos;s the next step?” or “What can I substitute for this ingredient?”—our AI has the answers. Whether you&apos;re chopping, stirring, or adjusting on the fly, your voice assistant is there to help.</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Cook;
