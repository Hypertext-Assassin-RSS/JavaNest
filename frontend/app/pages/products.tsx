import React from "react";
import Cappuccino from "../../assets/cappuccino.png"
import CafeLatte from "../../assets/cafe-latte.png"
import BlackCoffee from "../../assets/black-coffee.png"

const coffeeItems = [
  {
    name: "Cappuccino",
    price: "$4.20",
    image: Cappuccino.src,
    bgColor: "bg-[#9C6B44]",
  },
  {
    name: "Cafe Latte",
    price: "$3.15",
    image: CafeLatte.src,
    bgColor: "bg-[#6F7D5F]",
  },
  {
    name: "Dark Coffee",
    price: "$2.75",
    image: BlackCoffee.src,
    bgColor: "bg-[#2D241F]",
  },
];

const CoffeeCard = ({ name, price, image, bgColor }: any) => {
  return (
    <div className={`rounded-2xl p-6 text-center shadow-lg ${bgColor} text-white`}>
      <img src={image} alt={name} className="mx-auto mb-4 h-40 object-contain" />
      <h2 className="text-xl font-bold">{price}</h2>
      <h3 className="text-2xl font-semibold">{name}</h3>
      <p className="text-sm opacity-80 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
      </p>
      <button className="mt-4 w-full rounded-lg bg-white py-2 text-black font-semibold hover:bg-gray-200">
        Get Delivery
      </button>
    </div>
  );
};

const CoffeeMenu = () => {
  return (
    <section>
        <section className="flex flex-col text-white text-center justify-center py-12 px-6 rounded-lg">
            <h2 className="text-4xl font-bold">Drinks</h2>
            <div className="w-12 h-1 bg-white mx-auto mt-2"></div>
            <p className="mt-4 text-lg text-center w-3/5 mx-auto text-gray-200">
              Coffee drinks come in various styles, each offering a unique flavor and texture. Popular options include Espresso, a strong and concentrated shot; Americano, a diluted espresso for a milder taste.
            </p>
            <a href="#" className="group mt-6 text-lg font-semibold text-white  flex items-center justify-center gap-2">
                All Drinks<span className="transition-transform duration-200 group-hover:translate-x-[5px]">→</span>
            </a>
        </section>
        <div className="flex justify-center gap-6 p-6 bg-[#0A0A0A]">
        {coffeeItems.map((item, index) => (
            <CoffeeCard key={index} {...item} />
        ))}
    </div>
    </section>
  );
};

export default CoffeeMenu;
