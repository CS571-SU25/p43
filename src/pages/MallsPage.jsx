
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


const getMallWebsite = (name) => {
  const lower = (name || '').toLowerCase().replace(/\s+/g, '').replace(/购物中心|商场|大厦|广场/g, '');

  if (lower.includes('sanlitun')) return 'https://www.taikoolisanlitun.com/en';
  if (lower.includes('joycity')) return 'http://www.joycitydc.com/';
  if (lower.includes('theplace') || lower.includes('世贸天阶')) return 'http://www.theplacebeijing.com/';
  if (lower.includes('chinaworld') || lower.includes('中国世界')) return 'http://www.chinaworldmall.com.cn/';
  if (lower.includes('wfcentral') || lower.includes('王府中环') || lower.includes('芳草地') || lower.includes('侨福')) return 'https://www.wfcentral.cn/';
  if (lower.includes('apm') || lower.includes('北京apm')) return 'http://www.beijingapm.cn/';
  if (lower.includes('indigo')) return 'http://www.indigobeijing.com/';
  if (lower.includes('东方新天地')) return 'https://www.orientalplaza.com/';
  if (lower.includes('来福士')) return 'https://www.rafflescitybeijing.com.cn/';
  if (lower.includes('百盛')) return 'https://www.parkson.com.cn/';
  if (lower.includes('新世界')) return 'http://www.newworldbj.com/';
  if (lower.includes('金融街')) return 'http://www.thefinancialstreet.com/';
  if (lower.includes('蓝岛')) return 'http://www.landao.com.cn/';
  if (lower.includes('悠唐')) return 'http://www.utown.com.cn/';
  if (lower.includes('银泰') || lower.includes('in88')) return 'http://www.yintai.com/';
  if (lower.includes('百荣')) return 'http://www.bairongcn.com/';
  if (lower.includes('燕莎')) return 'http://www.yanshaoutlets.com/';
  if (lower.includes('新光天地')) return 'http://www.shinkong-place.com/';
  if (lower.includes('solana') || lower.includes('蓝色港湾')) return 'http://www.solana.com.cn/';

  return null;
};


const getMallHours = (name) => {
  const lower = (name || '').toLowerCase();

  if (lower.includes('apm') || lower.includes('北京apm')) return '10:00 – 22:00';
  if (lower.includes('sanlitun')) return '10:00 – 22:00';
  if (lower.includes('东方新天地')) return '10:00 – 22:00';
  if (lower.includes('wf central') || lower.includes('王府中环')) return '10:00 – 22:00';
  if (lower.includes('来福士')) return '10:00 – 22:00';
  if (lower.includes('侨福') || lower.includes('芳草地')) return '10:00 – 22:00';
  if (lower.includes('新世界')) return '10:00 – 22:00';
  if (lower.includes('百盛')) return '10:00 – 22:00';
  if (lower.includes('悠唐')) return '10:00 – 22:00';
  if (lower.includes('蓝岛')) return '10:00 – 21:30';
  if (lower.includes('百荣')) return '09:30 – 19:00';

  return 'Hours not available';
};

function MallsPage() {
  const { places, loading, error } = useGeoapify('commercial.shopping_mall', 50);

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
      <div className="container mt-5">
        <h2>Shopping Malls in Beijing</h2>
        <p>Browse popular malls like Sanlitun, Wangfujing, and more.</p>
        {loading && <p>Loading malls...</p>}
        {error && <p>Error loading malls.</p>}
        {!loading && !error && (
          <MapContainer
            center={[39.9042, 116.4074]}
            zoom={13}
            className="leaflet-container"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmaptributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {places.map((place) => {
              const name = place.properties.name || "Unnamed Mall";
              const website = getMallWebsite(name);
              const hours = getMallHours(name);
              return (
                <Marker
                  key={place.properties.place_id}
                  position={[place.properties.lat, place.properties.lon]}
                >
                  <Popup>
                    <strong>{name}</strong><br />
                    {website ? (
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Official Website
                      </a>
                    ) : (
                      <span>No website available</span>
                    )}
                    <br />
                    <span><strong>Opening Hours:</strong> {hours}</span>
                    <br />
                    <a
                      href={`https://uri.amap.com/navigation?to=${place.properties.lon},${place.properties.lat},${encodeURIComponent(name)}&mode=car&policy=1&callnative=1`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on 高德导航
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

export default MallsPage;
