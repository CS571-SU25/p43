import React from 'react';
import useCommonsImages from '../hooks/useCommonsImage';

const nameTranslations = {
  '宁寿宫': 'Palace of Tranquil Longevity',
  '斋宫': 'Palace of Abstinence',
  '奉先殿': 'Hall of Ancestral Worship',
  '皇穹宇': 'Imperial Vault of Heaven',
  '永定门': 'Yongding Gate',
  '圆丘': 'Circular Mound Altar',
  '毛主席纪念堂': 'Mao Zedong Memorial Hall',
  '故宫': 'Forbidden City',
  '孔庙': 'Confucius Temple',
  '智化寺': 'Zhihua Temple',
  '祈年殿': 'Hall of Prayer for Good Harvests',
  '南新仓': 'Nanxin Cang',
  '人民英雄纪念碑': "Monument to the People's Heroes",
  '天安门': 'Tiananmen',
  '天安门广场': 'Tiananmen Square',
  '端门': 'Duanmen Gate',
  '正阳门': 'Zhengyang Gate',
  '国子监': 'Imperial College (Guozijian)',
  '新华门': 'Xinhua Gate',
  '正阳门箭楼': 'Zhengyangmen Arrow Tower',
  '圜丘': 'Circular Mound Altar',
};




const SightCard = ({ sight }) => {
  const originalName = sight.name || 'Unnamed Place';
  const translatedName = nameTranslations[originalName] || originalName;
  const mapLink = `https://www.openstreetmap.org/?mlat=${sight.lat}&mlon=${sight.lon}`;

  const firstsearch = `北京${originalName}`;
  const secondsearch = `Beijing${translatedName}`;
  const imageUrls = useCommonsImages(firstsearch) || useCommonsImages(secondsearch);
  const imageUrl = imageUrls[0] || 'https://via.placeholder.com/286x180?text=Beijing+Sight';

  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <img
        src={imageUrl}
        alt={translatedName}
        className="card-img-top"
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{translatedName}</h5>
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
