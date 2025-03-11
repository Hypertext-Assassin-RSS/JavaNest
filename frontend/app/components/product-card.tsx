import espresso  from '../../assets/espresso.png'



export default function ProductCard( product:any ) {


    return(
        <section className="flex  w-80 h-40 m-5 mx-auto p-6 bg-orange-200 rounded-lg shadow-md">
            <div className='w-40' style={{ 
                backgroundImage: `url(${espresso.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
                }}> 
            </div>
            <div className='flex flex-col w-full items-center justify-evenly'>
                <h3 className="text-lg text-blue-600">5.00</h3>
                <p className="text-sm text-black">Coffee</p>
            </div>
        </section>
    )

}