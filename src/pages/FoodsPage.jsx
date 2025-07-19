import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function FoodsPage() {
  return (
    <>
      <Navbar />
      <div className="d-flex flex-column min-vh-100">

        <div className="container mt-5">
          <h2>Foods of Beijing</h2>
          <p>Discover local dishes like Peking Duck, Zhajiangmian, and street snacks.</p>
          {/* Add cards or Yelp/Wikipedia content here later */}
        </div>


      </div>

      <Footer />
    </>
  );
}

export default FoodsPage;
