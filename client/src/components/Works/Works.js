import React from 'react'
import works from '../../assets/works.png'
import './style.css'

export default function Works() {
  return (
    <div className='works'>
        <div className="head">
            <h2 className='cat-head' >How It Works</h2>
        </div>
        <img className='work-img' src={works} alt='.' />
    </div>
  )
}
