import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ENV_HTTP, ENV_KEY, ENV_TOKEN, ENV_IMG_URL } from '../../hook/useRequest';
import Youtube from 'react-youtube';

function SingleCard({ id, image, release_date, title, overview }) {
  const [video, setVideo] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${ENV_HTTP}/movie/${id}/videos?language=en-US&api_key=${ENV_KEY}`, {
          headers: {
            Authorization: `Bearer ${ENV_TOKEN}`,
          },
        });
        if (response.data.results.length > 0) {
          setVideo(response.data.results[0].key);
        }
      } catch (error) {
        console.error('Error');
      }
    };

    fetchVideos();
  }, [id]);

  const [actors, setActors] = useState([])
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${ENV_HTTP}/movie/${id}/credits?language=en-US&api_key=${ENV_KEY}`, {
          headers: {
            Authorization: `Bearer ${ENV_TOKEN}`,
          },
        });
        if (response) {
          setActors(response.data.cast.slice(0, 5));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchVideos();
  }, [id]);

  return (
    <div className='flex'>
      <div className='w-[54%]'>
        <img
          className='object-cover rounded-[20px] m-[12px]'
          src={`${ENV_IMG_URL}${image}`}
          alt='image'
          style={{ width: '90%', height: '100vh' }}
        />
      </div>
      <div className='pr-[20px] w-[44%] mt-[12px] flex flex-col'>
        {video && <Youtube videoId={video} />}
        <span className='font-[700] text-white leading-[40px] text-[42px] mt-10 mb-3'>{title}</span>
        <span className='mb-2 text-[14px] leading-[22px] text-gray-500 font-[500]'>{release_date}</span>
        <span className='mb-7 text-[14px] leading-[22px] text-white font-[500]'>{overview}</span>
        <div className='flex flex-wrap space-x-10'>
        {actors.map(item =>(
            <div className='flex items-center justify-around' key={item.id}>
                <div className='flex flex-col '>
                <img className='object-fill rounded-[50%] w-[70px] h-[70px]' src={ENV_IMG_URL + item.profile_path} alt="actor" />
                <span className=' mb-7 text-[14px] leading-[22px] text-white font-[500]'>{item.name}</span>
                </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
