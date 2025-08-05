import useGeoapify from '../hooks/useGeoapify';
import SightCard from '../components/SightCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SightsPage = () => {
  const { places, loading, error } = useGeoapify();

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="my-4">Popular Sights in Beijing</h1>
        {loading && <p>Loading sights...</p>}
        {error && <p>Error loading sights.</p>}
        <div className="row">
          {places.map(place => (
            <div className="col-md-4" key={place.properties.place_id}>
              <SightCard sight={place.properties} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SightsPage;
