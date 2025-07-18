import { Link } from 'react-router';

function CategoryCard({ title, image, link }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{title}</h5>
        <Link to={link} className="btn btn-primary mt-3">Explore</Link>
      </div>
    </div>
  );
}

export default CategoryCard;
