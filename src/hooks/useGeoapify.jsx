import { useState, useEffect } from 'react';

const useGeoapify = (category = 'tourism.sights', limit = 20) => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `https://api.geoapify.com/v2/places?categories=${category}&filter=circle:116.4074,39.9042,5000&limit=${limit}&apiKey=fc488afb0df64ffdb34735de63bb76af`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPlaces(data.features);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [category, limit]);

  return { places, loading, error };
};

export default useGeoapify;
