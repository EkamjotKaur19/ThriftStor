import React from 'react'
import western from '../../assets/western.png'
import ethnic from '../../assets/ethnic.png'
import footwear from '../../assets/footwear.png'
import bags from '../../assets/bags.png'
import './style.css'

export default function Categories() {
  return (
    <>
    <div className="head">
    <h2 className='cat-head' >Categories We Accept</h2>
    </div>

      <div className="card-deck">
        
  <div className="card">
    <img src={western} className="cat card-img-top" alt="..."/>
  </div>
  <div className="card">
    <img src={ethnic} className="cat card-img-top" alt="..."/>
  </div>
  <div className="card">
    <img src={footwear} className="cat card-img-top" alt="..."/>
  </div>
  <div className="card">
    <img src={bags} className="cat card-img-top" alt="..."/>
  </div>
    </div>
    </>
  )
}
