import React from 'react'
import './style.css'
export default function Pickup() {
  const handleSubmit = () => {
    
  }
  return (
    <>
    <div className="container-create">
  <form onSubmit={handleSubmit} > 
    <div className="row">
      <h4>Schedule Pickup</h4>
      <div className="input-group input-group-icon">
        <input type="date" placeholder="Date" />
        <div className="input-icon">
          <i className="fa fa-calendar"></i>
        </div>
      </div>
      <div className="input-group input-group-icon">
        <input type="email" placeholder="Email" />
        <div className="input-icon">
          <i className="fa fa-envelope"></i>
        </div>
      </div>
      <div className="input-group input-group-icon">
        <input type="number" placeholder="Phone Number" />
        <div className="input-icon">
          <i className="fa fa-phone"></i>
        </div>
      </div>
      <div className="input-group input-group-icon">
        <input type="text" placeholder="Address" />
        <div className="input-icon">
          <i className="fa-solid fa-home"></i>
        </div>
      </div>
      

        <input className='submit' type="submit" placeholder="Schedule Pickup" />
      
    </div>
  </form>
</div>

    </>
  );
}

