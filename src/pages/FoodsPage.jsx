import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useGeoapify from '../hooks/useGeoapify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function FoodsPage() {
  const { places, loading, error } = useGeoapify('catering.restaurant', 100);

  const chainKeywords = [
    'mcdonald', 'starbucks', 'kfc', 'burger king', 'subway',
    'pizza hut', 'dunkin', 'taco bell', 'domino', 'papa john',
    'costa', 'tim hortons', 'wendy', 'jollibee'
  ];

  const localPlaces = places.filter(place => {
    const name = place.properties.name?.toLowerCase() || '';
    return !chainKeywords.some(chain => name.includes(chain));
  });

  return (
    <>
      <Navbar />
      <style>{`
        .leaflet-container {
          width: 100%;
          height: 600px;
          border-radius: 8px;
          margin-top: 20px;
        }
        .container {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
        }
      `}</style>
      <div className="container mt-4">
        <h2>Foods of Beijing</h2>
        <p>Explore authentic local restaurants on the map below.</p>
        {loading && <p>Loading food places...</p>}
        {error && <p>Error loading food places.</p>}
        {!loading && !error && (
          <MapContainer
            center={[39.9042, 116.4074]}
            zoom={13}
            className="leaflet-container"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">rs'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {localPlaces.map((place) => {
              const name = place.properties.name || "Unnamed Restaurant";
              const gaodeLink = `https://uri.amap.com/navigation?to=${place.properties.lon},${place.properties.lat},${encodeURIComponent(name)}&mode=car&policy=1&callnative=1`;

              return (
                <Marker
                  key={place.properties.place_id}
                  position={[place.properties.lat, place.properties.lon]}
                >
                  <Popup>
                    <strong>{name}</strong><br />
                    <a
                      href={`https://www.openstreetmap.org/?mlat=${place.properties.lat}&mlon=${place.properties.lon}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Map
                    </a>
                    <br />
                    <a
                      href={gaodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Navigate with 高德地图
                    </a>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        )}
      </div>
      <Footer />
    </>
  );
}

export default FoodsPage;
