
import { FC, useState, useEffect } from "react";
import Background from '@/app/assets/modal-background.jpg';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

interface DeliveryModalProps {
  handleClose: () => void;
}

const DeliveryModal: FC<DeliveryModalProps> = ({ handleClose }) => {
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
    console.log("Delivery Details:", { name, email, mobile, location });
    handleClose();
  };

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setSelectedCoords({ lat, lng });
      setLocation(`${lat}, ${lng}`);
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
                className="w-full p-2 rounded border"
              />
              <button
                type="button"
                onClick={() => setIsMapOpen(true)}
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
      {isMapOpen && isLoaded && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setIsMapOpen(false)}></div>
          <div className="bg-white rounded-lg p-6 z-10 w-96 h-96">
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={center}
              zoom={10}
              onClick={handleMapClick}
            >
              {selectedCoords && <Marker position={selectedCoords} />}
            </GoogleMap>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryModal;
