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

const getOpeningHours = (name) => {
  const lower = name?.toLowerCase() || '';

  if (lower.includes('故宫')) return '8:30 – 17:00 (Closed Mondays)';
  if (lower.includes('天安门广场') || lower.includes('天安门') || lower.includes('人民英雄纪念碑')) return 'Open 24 hours';
  if (lower.includes('毛主席纪念堂')) return '8:00 – 12:00 (Closed Mondays)';
  if (lower.includes('祈年殿') || lower.includes('皇穹宇') || lower.includes('圆丘') || lower.includes('圜丘')) return '8:00 – 17:30';
  if (lower.includes('孔庙') || lower.includes('国子监')) return '8:30 – 17:00';
  if (lower.includes('智化寺')) return '9:00 – 16:30';
  if (lower.includes('永定门') || lower.includes('正阳门') || lower.includes('箭楼')) return '9:00 – 17:00';

  return 'Hours not available';
};

const getOfficialWebsite = (name) => {
  const lower = name?.toLowerCase() || '';

  if (lower.includes('故宫')) return 'https://www.dpm.org.cn/Home.html';
  if (lower.includes('孔庙') || lower.includes('国子监')) return 'https://english.beijing.gov.cn/specials/ticketing/index.html';
  if (lower.includes('毛主席纪念堂')) return 'https://english.beijing.gov.cn/specials/ticketing/index.html';
  if (lower.includes('天安门')) return 'https://english.beijing.gov.cn/specials/ticketing/index.html';
  if (lower.includes('祈年殿') || lower.includes('皇穹宇') || lower.includes('圆丘') || lower.includes('圜丘')) return 'https://english.beijing.gov.cn/specials/ticketing/index.html';

  return null;
};

const SightCard = ({ sight }) => {
  const originalName = sight.name || 'Unnamed Place';
  const translatedName = nameTranslations[originalName] || originalName;
  const mapLink = `https://www.openstreetmap.org/?mlat=${sight.lat}&mlon=${sight.lon}`;
  const gaodeLink = `https://uri.amap.com/navigation?to=${sight.lon},${sight.lat},${encodeURIComponent(originalName)}&mode=car&policy=1&callnative=1`;
  const hours = getOpeningHours(originalName);
  const website = getOfficialWebsite(originalName);

  const firstsearch = `北京${originalName}`;
  const secondsearch = `Beijing${translatedName}`;
  const imageUrls = useCommonsImages(firstsearch) || useCommonsImages(secondsearch);
  const imageUrl = imageUrls[0];

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
        <p><strong>Opening Hours:</strong> {hours}</p>
        {website ? (
          <p>
            <a href={website} target="_blank" rel="noopener noreferrer">
              Visit Official Website
            </a>
          </p>
        ) : (
          <p>No official website available</p>
        )}
        <a
          href={mapLink}
          className="btn btn-primary me-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Map
        </a>
        <a
          href={gaodeLink}
          className="btn btn-outline-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Navigate with 高德地图
        </a>
      </div>
    </div>
  );
};

export default SightCard;
