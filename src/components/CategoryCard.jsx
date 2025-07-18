import { Link } from 'react-router';
import { Carousel } from 'react-bootstrap';
import useCommonsImages from '../hooks/useCommonsImage';

function CategoryCard({ title, SearchTitle, link }) {
    const images = useCommonsImages(SearchTitle);
    return (
        <div className="card h-100 shadow-sm">
            {images.length > 0 && (
                <Carousel interval={4000} indicators={false}>
                    {images.map((url, idx) => (
                        <Carousel.Item key={idx}>
                            <img
                                src={url}
                                className="d-block w-100"
                                alt={`${SearchTitle} ${idx + 1}`}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Explore more about {title}.</p>
                <Link to={link} className="btn btn-primary mt-3">
                    Explore
                </Link>
            </div>
        </div>
    );
}

export default CategoryCard;
