import { useEffect, useState } from 'react';

function useCommonsImages(topic) {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(
      topic
    )}&gsrnamespace=6&gsrlimit=4&prop=imageinfo&iiprop=url&origin=*`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.query?.pages) {
          const urls = Object.values(data.query.pages)
            .map((page) => page.imageinfo?.[0]?.url)
            .filter(Boolean);
          setImageUrls(urls);
        }
      })
      .catch((err) => {
        console.error('Wikimedia Commons fetch error:', err);
      });
  }, [topic]);

  return imageUrls;
}

export default useCommonsImages;
