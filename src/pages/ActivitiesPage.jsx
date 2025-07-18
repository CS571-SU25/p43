import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ActivitiesPage() {
  return (
    <>
      <Navbar />
      <div className="flex-grow-1 container py-5">
        <div className="container mt-5">
          <h2>Things to Do in Beijing</h2>
          <p>Find fun activities like hutong tours, tea ceremonies, and cultural shows.</p>
          {/* Add interactive elements later */}
        </div>


      </div>

      <Footer />
    </>
  );
}

export default ActivitiesPage;
