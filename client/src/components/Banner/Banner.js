import React from 'react'
import './style.css'
import ban1 from '../../assets/ban1.png'
import ban2 from '../../assets/ban2.png'
import ban3 from '../../assets/ban3.png'
import ban4 from '../../assets/ban4.png'
import ban5 from '../../assets/ban5.png'
import ban6 from '../../assets/ban6.png'

export default function Banner() {
  return (
    <div className='ban-card'>
        <div className="heads">
        <h2 className='ban-head'>How to Sell and Earn</h2>
        </div>

        <div className="cards">
            <div className="cards card-group">
                <div className="card ban-2-card">
                    <img src={ban1} className="ban-img card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">List what you no longer need</h5>
                    </div>
                </div>
                <div className="card ban-2-card">
                    <img src={ban2} className="ban-img card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Pack and ship to buyers with our free shipping label</h5>
                    </div>
                </div>
                <div className="card ban-2-card">
                    <img src={ban3} className="ban-img card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Receive money directly in UPI accounts</h5>
                    </div>
                </div>
            </div>
        </div>

        

    </div>
  )
}
