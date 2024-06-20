import React from 'react';
import { ENV_IMG_URL } from '../../hook/useRequest';
import { Link } from 'react-router-dom';

function NowFilms({ image, overview, title, release_date, id }) {
  const extract = (overview) => {
    if (!overview) return ''; // Check if overview is undefined

    const words = overview.split(' ');
    return words.slice(0, 20).join(' ');
  };

  return (
    <div className='w-[280px] flex flex-col justify-center items-start'>
      <Link to={`/film/${id}`}>
        <img className='object-cover rounded-[16px] mb-[12px]' src={`${ENV_IMG_URL}${image}`} alt="image" style={{ width: '280px', height: '180px' }} />
      </Link>
      <span className='text-[12px] text-gray-300'>{release_date}</span>
      <span className='text-white text-[18px] font-[600]'>{title}</span>
      {overview && <span className='text-[14px] text-gray-300'>{extract(overview)}</span>}
    </div>
  );
}

export default NowFilms;
