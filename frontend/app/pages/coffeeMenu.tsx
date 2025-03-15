import React, { useEffect, useState } from "react";
import axios from "axios";
import Cappuccino from "@/app/assets/cappuccino.png";
import CafeLatte from "@/app/assets/cafe-latte.png";
import BlackCoffee from "@/app/assets/black-coffee.png";
import { CoffeeCard } from "@/app/components/coffeeCard";

interface CoffeeItem {
  name: string;
  price: string;
  imageUrl: string;
  bgColor: string;
}

export function CoffeeMenu() {
  const staticCoffeeItems: CoffeeItem[] = [
    {
      name: "Cappuccino",
      price: "$4.20",
      imageUrl: Cappuccino.src,
      bgColor: "bg-[#9C6B44]",
    },
    {
      name: "Cafe Latte",
      price: "$3.15",
      imageUrl: CafeLatte.src,
      bgColor: "bg-[#6F7D5F]",
    },
    {
      name: "Dark Coffee",
      price: "$2.75",
      imageUrl: BlackCoffee.src,
      bgColor: "bg-[#2D241F]",
    },
  ];

  const [coffeeItems, setCoffeeItems] = useState<CoffeeItem[]>(staticCoffeeItems);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/products", {
      headers: { "Accept": "application/json" },
      maxBodyLength: Infinity
    })
      .then(response => {
        setCoffeeItems(response.data);
      })
      .catch(error => {
        console.error("Error fetching coffee items:", error);
        setError("Failed to load coffee items.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <section className="flex flex-col text-white text-center justify-center py-12 px-6 rounded-lg">
        <h2 className="text-4xl font-bold">Drinks</h2>
        <div className="w-12 h-1 bg-white mx-auto mt-2"></div>
        <p className="mt-4 text-lg text-center w-3/5 mx-auto text-gray-200">
          Coffee drinks come in various styles, each offering a unique flavor and texture. Popular options include Espresso, a strong and concentrated shot; Americano, a diluted espresso for a milder taste.
        </p>
        <a href="#" className="group mt-6 text-lg font-semibold text-white flex items-center justify-center gap-2">
          All Drinks<span className="transition-transform duration-200 group-hover:translate-x-[5px]">→</span>
        </a>
      </section>

      {loading && <p className="text-center text-white">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      
      <div className="flex flex-col justify-center gap-6 p-6 bg-[#0A0A0A] lg:flex-row">
        {coffeeItems.map((item, index) => (
          <CoffeeCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}