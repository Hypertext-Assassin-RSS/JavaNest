import Image from "next/image";
import { useState } from "react";
import DeliveryModal from "@/app/model/DeliveryModal";

interface CoffeeCardProps {
  name: string;
  price: string;
  imageUrl: string;
  bgColor: string;
}

export function CoffeeCard({ name, price, imageUrl, bgColor }: CoffeeCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={`rounded-2xl p-6 text-center shadow-lg ${bgColor} text-white`}>
      <Image
        src={imageUrl}
        alt={name}
        width={500}
        height={500}
        className="mx-auto mb-4 h-40 object-contain"
      />
      <h2 className="text-xl font-bold">Rs {price}</h2>
      <h3 className="text-2xl font-semibold">{name}</h3>
      <p className="text-sm opacity-80 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
      </p>
      <button
        onClick={openModal}
        className="cursor-pointer mt-4 w-full rounded-lg bg-white py-2 text-black font-semibold hover:bg-gray-200"
      >
        Get Delivery
      </button>

      {isModalOpen && <DeliveryModal handleClose={closeModal} />}
    </div>
  );
};