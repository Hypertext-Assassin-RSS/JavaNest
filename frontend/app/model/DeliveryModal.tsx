import { FC, useState, useEffect } from "react";
import Background from '@/app/assets/modal-background.jpg';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

interface Product {
  name: string;
  price: string;
  quantity: number;
}

interface DeliveryModalProps {
  handleClose: () => void;
  product: Product;
}

const DeliveryModal: FC<DeliveryModalProps> = ({ handleClose, product }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [selectedCoords, setSelectedCoords] = useState<{ lat: number, lng: number } | null>(null);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [center, setCenter] = useState<{ lat: number, lng: number }>({ lat: -3.745, lng: -38.523 });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  // Fetch user's current location to center the map on page load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentCenter = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCenter(currentCenter);
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    } else {
      console.warn("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Include product details along with delivery details when processing the order.
    console.log("Delivery Details:", { customer: { name, email, mobile, location }, product });
    handleClose();
  };

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setSelectedCoords({ lat, lng });
    }
  };

  const confirmLocation = () => {
    if (selectedCoords) {
      setLocation(`${selectedCoords.lat}, ${selectedCoords.lng}`);
      setIsMapOpen(false);
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
        {/* Display the selected product details */}
        <div className="mb-4 p-2 bg-gray-800 rounded">
          <p className="text-white">Product: <span className="font-semibold">{product.name}</span></p>
          <p className="text-white">Price: Rs {product.price}</p>
          <p className="text-white">Quantity: {product.quantity}</p>
        </div>
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
                className="w-full p-2 rounded border hidden"
              />
              <button
                type="button"
                onClick={() => setIsMapOpen(true)}
                className="ml-2 cursor-pointer mt-4 w-full rounded-lg border border-white px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-white hover:text-black"
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
      {isMapOpen && isLoaded && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setIsMapOpen(false)}></div>
          <div className="bg-white rounded-lg p-6 z-10 w-96 h-96 flex flex-col">
            <div className="flex-grow">
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={center}
                zoom={10}
                onClick={handleMapClick}
              >
                {selectedCoords && <Marker position={selectedCoords} />}
              </GoogleMap>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={confirmLocation}
                disabled={!selectedCoords}
                className={`px-4 py-2 rounded ${selectedCoords ? 'bg-[#8B5A2B] hover:bg-[#a57242] text-white' : 'bg-gray-300 text-gray-700 cursor-not-allowed'}`}
              >
                Confirm Location
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryModal;