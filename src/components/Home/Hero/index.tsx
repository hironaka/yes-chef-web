"use client"
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {

    return (
        <section id="home-section" className='bg-gray-50 dark:bg-gray-700'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
                    <div className='col-span-6'>
                        <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-black dark:text-white md:4px lg:text-start text-center">
                        Turn recipes into conversations
                        </h1>
                        <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>Convert any online recipe into a voice-guided experience. No more messy screens—just smooth cooking.</p>
                        <div className='flex gap-4 items-center justify-center lg:justify-start'>
                            <Link href='/recipe' className='text-xl flex-1 font-medium rounded-full text-white py-5 px-6 bg-primary hover:text-primary lg:px-14 border border-primary hover:bg-transparent text-center'>Get Started</Link>
                            <Link href='/pricing' className='flex border flex-1 border-primary justify-center text-center rounded-full text-xl font-medium items-center py-5 px-10 text-primary hover:text-white hover:bg-primary'>Upgrade to Pro</Link>
                        </div>
                    </div>
                    <div className='col-span-6 flex justify-center relative'>
                        <Image src="/images/hero/banner-image.png" alt="nothing" width={1000} height={805} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
