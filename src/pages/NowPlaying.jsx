import React, { useEffect, useState } from 'react'
import NowFilms from '../components/NowFilms/NowFilms'
import axios from 'axios'
import {ENV_HTTP, ENV_KEY, ENV_TOKEN} from '../hook/useRequest'
import { useDispatch, useSelector } from 'react-redux'
import { getNowPlayingFilm } from '../redux/getFilmSlice'
import { Pagination } from '@mui/material'
import Navbar from '../components/Navbar/Navbar'

function NowPlaying() {
  const [nowPage, setNowPage] = useState(false)
  const NowPlayingList = useSelector(state => state.films)
  const dispatch = useDispatch()

  useEffect(() =>{
    axios.get(`${ENV_HTTP}/movie/now_playing?api_key=${ENV_KEY}`, {
      headers: {
        Authorization: `Bearer ${ENV_TOKEN}`
      }
    }).then(res => {
      setNowPage(res.data.total_pages)
      dispatch(getNowPlayingFilm(res.data.results))
    })
  },[])
  return (
    <>
      <Navbar/>
    <div className='flex items-center flex-wrap justify-around gap-x-10 gap-y-16 mt-[50px]'>
      {NowPlayingList.map(item =>(
        <NowFilms id={item.id} image={`${item.poster_path}`} overview={item.overview} title={item.title} release_date={item.release_date} />
      ))}
    </div>
      <div className='my-10 flex justify-center'>
      <Pagination sx={{ padding: '10px', borderRadius: '8px', backgroundColor: 'lightblue' }} count={nowPage} variant="outlined" color="primary" />
      </div>
    </>
  )
}

export default NowPlaying