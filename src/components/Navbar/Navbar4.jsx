import React from 'react'
import { NavLink } from 'react-router-dom';
import Avatar from '../../assets/images/avatar.svg'
import Notification from '../../assets/images/notification.svg'
import Search from '../../assets/images/search.svg'
import Logo from '../../assets/images/Logo.png'
import Hero from '../Hero/Hero';

function Navbar() {
  return (
    <>
    <div className='bg-hero4'>
        <div className='container mx-auto px-5 py-2'>
            <div className='flex items-center justify-between mb-[300px]'>
                <div>
                    <a href="/">
                        <img src={Logo} alt="logo" width={120} height={70}/>
                    </a>
                </div>
                <div>
                    <ul className='flex items-center space-x-[32px]'>
                        <li className='text-white font-[500]'>
                            <NavLink to={'/'}>Now Playing</NavLink>
                        </li>
                        <li className='text-white font-[500]'>
                            <NavLink to={'/popular'}>Popular</NavLink>
                        </li>
                        <li className='text-white font-[500]'>
                            <NavLink to={'/top-rated'}>Top Rated</NavLink>
                        </li>
                        <li className='text-white font-[500]'>
                            <NavLink to={'/upcoming'}>Upcoming</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center space-x-[15px]'>
                    <img src={Search} alt="search" />
                    <img src={Notification} alt="Notification" />
                    <img src={Avatar} alt="avatar" />
                </div>
            </div>
            <Hero title={'Black Panthere'} over={'Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU). '}/>
        </div>
    </div>
    </>
  )
}

export default Navbar