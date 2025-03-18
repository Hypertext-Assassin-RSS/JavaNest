import { FC, useState } from "react";
import GoogleMapPicker from "react-google-map-picker";
import Background from '@/app/assets/modal-background.jpg';

interface DeliveryModalProps {
  handleClose: () => void;
}

// Default coordinates (you can update with a more relevant default)
const DefaultLocation = { lat: 40.73061, lng: -73.935242 };
const DefaultZoom = 10;
const GOOGLE_MAPS_API_KEY = "AIzaSyC3fyuWN3_7_OUbXxUrwg7eWBe73u7dmzA";

const DeliveryModal: FC<DeliveryModalProps> = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process the submitted delivery details (e.g., send to an API)
    console.log("Delivery Details:", { name, email, mobile, location });
    // Close the modal after submission
    handleClose();
  };

  const openMap = () => {
    setIsMapOpen(true);
  };

  const closeMap = () => {
    setIsMapOpen(false);
  };

  const handleChangeLocation = (lat: number, lng: number) => {
    setLocation(`${lat}, ${lng}`);
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
          </div>
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
            <label className="block text-white text-sm mb-1 basis-1/3" htmlFor="location">
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
                onClick={openMap}
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

      {isMapOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-60">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeMap}
          ></div>
          <div className="bg-white rounded-lg p-4 z-70 w-11/12 md:w-3/4 lg:w-1/2">
            <h3 className="text-lg font-bold mb-2">Select Delivery Location</h3>
            <GoogleMapPicker
              defaultLocation={DefaultLocation}
              zoom={DefaultZoom}
              onChangeLocation={handleChangeLocation}
              apiKey={GOOGLE_MAPS_API_KEY}
            />
            <button
              onClick={closeMap}
              className="mt-4 w-full rounded-lg bg-blue-500 py-2 text-white font-semibold hover:bg-blue-600"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryModal;