import React from 'react'
import Watch from '../../assets/images/play.svg'
import Save from '../../assets/images/save.svg'

function Hero({title, over}) {
  return (
    <div className='container mx-auto px-5 py-1 '>
        <div className='w-[550px]'>
            <h1 className='font-[700] text-white leading-[40px] text-[42px] mb-3'>{title}</h1>
            <p className='mb-2 text-[14px] leading-[22px] text-gray-500 font-[500]'>9 Episodes • 2022 • Fantasy • Actions</p>
            <p className='mb-7 text-[14px] leading-[22px] text-white font-[500]'>{over}</p>
            <div className='flex items-center space-x-5'>
                <button className='flex items-center py-[12px] px-[25px] rounded-[10px] bg-green-600 text-white'>
                    <img className='mr-2' src={Watch} alt="watch" />
                    Watch Trailer
                </button>
                <button className='flex items-center py-[11px] px-[25px] rounded-[10px] border border-white text-white'>
                <img className='mr-2' src={Save} alt="save" />
                    Add Watchlist
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero