import React, { useMemo } from 'react';
import useCommonsImages from '../hooks/useCommonsImage';

const SightCard = ({ sight }) => {
  const name = sight.name;
  const mapLink = `https://www.openstreetmap.org/?mlat=${sight.lat}&mlon=${sight.lon}`;

  const topic = useMemo(() => {
    return `北京${name}`;
  }, [name]);

  const imageUrls = useCommonsImages(topic);
  const imageUrl = imageUrls[0];

  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <img
        src={imageUrl}
        alt={name}
        className="card-img-top"
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <a
          href={mapLink}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Map
        </a>
      </div>
    </div>
  );
};

export default SightCard;
