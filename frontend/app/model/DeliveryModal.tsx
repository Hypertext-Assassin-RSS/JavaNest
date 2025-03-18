import { FC } from "react";
import Background from '@/app/assets/modal-background.jpg'

interface DeliveryModalProps {
  handleClose: () => void;
}

const DeliveryModal: FC<DeliveryModalProps> = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={handleClose}></div>
      <div className="bg-black rounded-lg p-6 z-10 w-80"
        style={{ backgroundImage: `url(${Background.src})` }}
      >
        <h2 className="text-xl font-bold mb-4 ">Delivery Details</h2>
        <p className="">This is where you can enter your delivery details.</p>
        <button
          onClick={handleClose}
          className="cursor-pointer mt-4 w-full rounded-lg bg-white py-2 text-black font-semibold hover:bg-gray-200" >
          Close
        </button>
      </div>
    </div>
  );
};

export default DeliveryModal;