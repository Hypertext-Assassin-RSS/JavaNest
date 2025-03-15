
"use client"

import { useState } from "react";
import CoffeeCup from '@/app/assets/coffee-cup.png'
import Background from '@/app/assets/coffee-background.png'
import Image from "next/image";

export default function TableBooking() {
  const [formData, setFormData] = useState({
    date: "",
    time: "18:00",
    people: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
    subscribe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative  flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat px-6 lg:px-20"
      style={{ backgroundImage: `url(${Background.src})` }}>
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-black">BOOKING</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="date" 
              name="date" 
              className="p-2 border rounded text-black" 
              required 
              onChange={handleChange} 
            />
            <select 
              name="time" 
              className="p-2 border rounded text-black" 
              value={formData.time} 
              onChange={handleChange}>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
            </select>
          </div>
          <input 
            type="text" 
            name="people" 
            placeholder="People" 
            className="w-full p-2 border rounded text-black placeholder-gray-600" 
            required 
            onChange={handleChange} 
          />
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" 
              name="firstName" 
              placeholder="First name" 
              className="p-2 border rounded text-black placeholder-gray-600" 
              required 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last name" 
              className="p-2 border rounded text-black placeholder-gray-600" 
              required 
              onChange={handleChange} 
            />
          </div>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="w-full p-2 border rounded text-black placeholder-gray-600" 
            required 
            onChange={handleChange} 
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone" 
            className="w-full p-2 border rounded text-black placeholder-gray-600" 
            required 
            onChange={handleChange} 
          />
          <textarea 
            name="comments" 
            placeholder="Comments (optional)" 
            className="w-full p-2 border rounded text-black placeholder-gray-600" 
            onChange={handleChange}>
          </textarea>
          <div className="flex items-center">
            <input 
              type="checkbox" 
              name="subscribe" 
              className="mr-2" 
              onChange={handleChange} 
            />
            <label className="text-black">Subscribe me to the newsletter</label>
          </div>
          <button 
            type="submit" 
            className="w-full rounded-lg cursor-pointer bg-[#8B5A2B] px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-[#a57242]">
            Book a table
          </button>
        </form>
      </div>
      <div className="hidden lg:block">
        <Image 
          src={CoffeeCup} 
          alt="Coffee Cup" 
          width={500} 
          height={500} 
          className="drop-shadow-lg" 
        />
      </div>
    </div>
  );
}
