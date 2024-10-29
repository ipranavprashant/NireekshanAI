import { GoogleMap, useLoadScript } from '@react-google-maps/api';

// Your Google Map styles JSON (example green-themed style)
const mapStyles = [
  {
    elementType: "geometry",
    stylers: [{ color: "#e0f7e0" }]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#ffffff" }]
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#4caf50" }]
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#aed581" }]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#b2dfdb" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#00acc1" }]
  }
];

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 28.6139, // Default center coordinates (New Delhi)
  lng: 77.2090,
};

function GreenThemedMap() {
  // Load the script for Google Maps with your API Key
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBTVzsxuZw6C67E5pap2Tt1eY3cADyvryI',
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      options={{
        styles: mapStyles, // Apply the custom styles
      }}
    >
      {/* Other map components like markers can go here */}
    </GoogleMap>
  );
}

export default GreenThemedMap;
