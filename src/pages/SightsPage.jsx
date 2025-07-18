import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SightsPage() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2>Popular Sights in Beijing</h2>
        <p>Explore famous landmarks like the Forbidden City, Temple of Heaven, and more.</p>
        {/* Add cards or map here later */}
      </div>
      <Footer />
    </>
  );
}

export default SightsPage;
