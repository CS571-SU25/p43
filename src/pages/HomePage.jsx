import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';

const categories = [
  { title: 'Popular Sights', image: '/images/sights.jpg', link: '/sights' },
  { title: 'Foods', image: '/images/foods.jpg', link: '/foods' },
  { title: 'Malls', image: '/images/malls.jpg', link: '/malls' },
  { title: 'Activities', image: '/images/activities.jpg', link: '/activities' },
];

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <h1>Welcome to Beijing Compass</h1>
        <p className="lead">Your guide to exploring the capital city of China</p>
        <div className="row mt-4">
          {categories.map((cat, idx) => (
            <div className="col-md-6 col-lg-3 mb-4" key={idx}>
              <CategoryCard {...cat} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
