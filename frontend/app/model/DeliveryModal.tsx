import { FC, useState } from "react";
import Background from '@/app/assets/modal-background.jpg';

interface DeliveryModalProps {
  handleClose: () => void;
}

const DeliveryModal: FC<DeliveryModalProps> = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Delivery Details:", { name, email, mobile, location });
    handleClose();
  };

  const selectLocation = () => {
    const selectedLocation = prompt(
      "Enter your location coordinates (e.g., lat, long) or address:"
    );
    if (selectedLocation) {
      setLocation(selectedLocation);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleClose}
      ></div>
      <div
        className="bg-black rounded-lg p-6 z-10 w-96"
        style={{ backgroundImage: `url(${Background.src})` }}
      >
        <h2 className="text-xl font-bold mb-4 text-white">Delivery Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-row items-center">
            <label className="block text-white text-sm mb-1 basis-1/3" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 rounded basis-2/3 border"
            />
          </div >
          <div className="flex flex-row items-center">
            <label className="block text-white text-sm mb-1 basis-1/3" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 rounded basis-2/3 border"
            />
          </div>
          <div className="flex flex-row items-center">
            <label className="block text-white text-sm mb-1 basis-1/3" htmlFor="mobile">
              Mobile No
            </label>
            <input
              id="mobile"
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className="w-full p-2 rounded basis-2/3 border"
            />
          </div>
          <div className="flex flex-row items-center">
            <label
              className="block text-white text-sm mb-1 basis-1/3"
              htmlFor="location"
            >
              Location
            </label>
            <div className="flex basis-2/3">
              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Select location from map"
                required
                className="w-full p-2 rounded border"
              />
              <button
                type="button"
                onClick={selectLocation}
                className="ml-2 p-2 bg-white text-black rounded hover:bg-gray-200"
              >
                Map
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="cursor-pointer mt-4 w-full rounded-lg bg-[#8B5A2B] px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-[#a57242]"
          >
            Submit
          </button>
        </form>
        <button
          onClick={handleClose}
          className="cursor-pointer mt-4 w-full rounded-lg border border-white px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-white hover:text-black"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeliveryModal;