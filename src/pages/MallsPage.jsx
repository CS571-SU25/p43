import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MallsPage() {
  return (
    <>
      <Navbar />
      <div className="flex-grow-1 container py-5">
        <div className="container mt-5">
          <h2>Shopping Malls in Beijing</h2>
          <p>Browse popular malls like Sanlitun, Wangfujing, and more.</p>
          {/* Add cards or map markers here later */}
        </div>

      </div>

      <Footer />
    </>
  );
}

export default MallsPage;
