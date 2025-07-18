import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';

const categories = [
  { title: 'Beijing Sights', SearchTitle: 'Forbidden City', link: '/sights' },
  { title: 'Beijing Cuisine', SearchTitle: 'Beijing Hot pot', link: '/foods' },
  { title: 'Beijing Malls', SearchTitle: 'Beijing WangFuJing', link: '/malls' },
  { title: 'Beijing Culture', SearchTitle: 'Beijing HuTong', link: '/activities' },
];

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="flex-grow-1 container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">
            Welcome to <span className="text-primary">Beijing Compass</span>
          </h1>
          <p className="lead text-muted">
            Your guide to exploring the capital city of China
          </p>
        </div>

        <div className="row g-4">
          {categories.map((cat, idx) => (
            <div className="col-sm-12 col-md-6 col-lg-3" key={idx}>
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
