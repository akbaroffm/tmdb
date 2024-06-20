import axios from 'axios'
import React, { useEffect } from 'react'
import { ENV_HTTP, ENV_KEY, ENV_TOKEN } from '../hook/useRequest'
import { useDispatch, useSelector } from 'react-redux'
import { getNowPlayingFilm } from '../redux/getFilmSlice'
import NowFilms from '../components/NowFilms/NowFilms'
import Navbar3 from '../components/Navbar/Navbar3'

function TopRated() {
  const dispatch = useDispatch()
  const popularFilms = useSelector(state => state.films)

  useEffect(() =>{
    axios.get(`${ENV_HTTP}/movie/top_rated?key=${ENV_KEY}`, {
      headers:{
        'Authorization': `Bearer ${ENV_TOKEN}`
      }
    }).then(res =>{
      dispatch(getNowPlayingFilm(res.data.results))
    })
  },[])
  return (
    <>
    <Navbar3/>
    <div className='flex items-center flex-wrap justify-around gap-x-10 gap-y-16 mt-[50px]'>
      {popularFilms.map(item =>(
        <NowFilms id={item.id} image={`${item.poster_path}`} overview={item.overview} release_date={item.release_date} title={item.title}/>
      ))}
    </div>
    </>
  )
}

export default TopRated