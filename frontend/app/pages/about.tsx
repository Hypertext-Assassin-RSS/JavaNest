import Image from 'next/image'
import Background from '../../assets/cffee-background.png'
import CoffeeCup from '../../assets/coffee-cup.png'

export default function About() {
    return (
        <section className="relative flex items-center justify-center min-h-screen  bg-cover bg-center bg-no-repeat px-6 lg:px-20" 
            style={{ backgroundImage: `url(${Background.src})` }}>
            <div className="max-w-2xl text-white">
                <h3 className="text-lg font-semibold uppercase tracking-wide text-gray-300">
                    Welcome to JavaNest
                </h3>
                <h1 className="mt-2 text-5xl font-bold leading-tight sm:text-6xl">
                    Enjoy Your Morning <br /> Coffee Shot
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                    Start your day with a fresh coffee made with 100% Arabica beans. Indulge in rich flavors and aromas that awaken your senses.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                    <button className="rounded-lg cursor-pointer bg-[#8B5A2B] px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-[#a57242]">
                        Book a Table
                    </button>
                    <button className="rounded-lg border cursor-pointer border-white px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-white hover:text-black">
                        Visit Our Shop
                    </button>
                </div>
            </div>
            <div className="">
                <Image src={CoffeeCup.src} alt="Coffee Cup" width={500} height={500} className="drop-shadow-lg" />
            </div>
        </section>
    )
}
