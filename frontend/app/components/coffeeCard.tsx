

export default function CoffeeCard  ({ name, price, image, bgColor }: any)  {
    return (
      <div className={`rounded-2xl p-6 text-center shadow-lg ${bgColor} text-white`}>
        <img src={image} alt={name} className="mx-auto mb-4 h-40 object-contain" />
        <h2 className="text-xl font-bold">{price}</h2>
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-sm opacity-80 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
        </p>
        <button className="cursor-pointer mt-4 w-full rounded-lg bg-white py-2 text-black font-semibold hover:bg-gray-200">
          Get Delivery
        </button>
      </div>
    );
  };