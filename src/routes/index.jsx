import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {NowPlaying, Popular, SingleFilm, TopRated, UpComing} from '../pages'

function index() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NowPlaying/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/top-rated' element={<TopRated/>}/>
        <Route path='/upcoming' element={<UpComing/>}/>
        <Route path='/film/:id' element={<SingleFilm/>}/>
    </Routes>
    </div>
  )
}

export default index