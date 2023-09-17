import React from 'react'
import banner from '../../assets/banner.png'
import './style.css'

export default function Hero() {
  return (
    <div className='hero' >
      <img className='banner' src={banner} alt='hero' />
    </div>
  )
}
