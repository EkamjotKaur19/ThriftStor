import React from 'react'
import { useNavigate } from 'react-router-dom'
import orderService from '../../services/order'
import messageService from '../../services/message'
import './style.css'

export default function Item({name, category, color, size, price, description, images, seller}) {
  const navigate = useNavigate();
  const handleBuy = () => {
    const loggedUserJSON = window.localStorage.getItem('loggeditemappUser')
    const user = JSON.parse(loggedUserJSON)
    orderService.setToken(user.token)
    const order = {
      name:name,
      price:price,
      buyer:user.id,
      seller:seller
    }
    orderService.create(order)
    alert('The seller will get a message that you want to buy the product')
    
    

  }
  return (
    <>
<div className="">
  <div className="">
    <div className="">
      <div className="el-wrapper">
        <div className="box-up">
          <img className="img" src={images} alt=""/>
          <div className="img-info">
            <div className="info-inner">
              <span className="p-name">{name}</span>
              <span className="p-company">{category}</span>
              <span className="p-desc">{description}</span>
            </div>
            <div className="a-size">Available sizes : <span className="size">{size}</span></div>
            <div className="a-color">Color : <span className="color">{color}</span></div>
          </div>
        </div>

        <div className="box-down">
          <div className="h-bg">
            <div className="h-bg-inner"></div>
          </div>

          <a className="cart" href="#">
            <span className="price">INR {price}</span>
            <span className="add-to-cart">
              <span onClick={handleBuy} className="txt">Contact Buyer</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
