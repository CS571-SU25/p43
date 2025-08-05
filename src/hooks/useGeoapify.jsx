import { useState, useEffect } from 'react';

const useGeoapify = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://api.geoapify.com/v2/places?categories=tourism.sights&filter=circle:116.4074,39.9042,5000&limit=20&apiKey=fc488afb0df64ffdb34735de63bb76af";

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
  }, []);

  return { places, loading, error };
};

export default useGeoapify;
