import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ENV_HTTP, ENV_KEY, ENV_TOKEN } from '../hook/useRequest';
import SingleCard from '../components/SingleCard/SingleCard';

function SingleFilm() {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${ENV_HTTP}/movie/${id}?api_key=${ENV_KEY}`, {
          headers: {
            Authorization: `Bearer ${ENV_TOKEN}`,
          },
        });
        setSingleData(response.data);
      } catch (error) {
        console.error('Error');
      }
    };

    fetchData();
  }, [id]);

  return (
    <SingleCard
      id={id}
      image={singleData.poster_path}
      release_date={singleData.release_date}
      title={singleData.title}
      overview={singleData.overview}
    />
  );
}

export default SingleFilm;
