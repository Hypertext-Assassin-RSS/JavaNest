import Image from 'next/image'
import AboutLogo from '../../assets/coffee-cup.png'


export default function About(){


    return (
        <section className="flex flex-col items-center justify-evenly lg:flex-row min-h-screen">
          <div className='flex flex-col items-center justify-evenly'>
            <h1 className="text-4xl font-bold">About Us</h1>
            <span className="text-xl font-semibold text-gray-700 dark:text-gray-500 mt-2">
              Enjoy Your Day With Refreshing Coffee From
            </span>
            <span className="text-xl font-semibold text-gray-700 dark:text-gray-500 mt-0">
            JavaNest
            </span>
          </div>
          <div className='flex justify-center'>
            <Image src={AboutLogo.src} alt='about logo'  width={500} height={800} />
          </div>
        </section>
    )
}