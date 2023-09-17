import React, {useEffect, useState} from 'react'
import './style.css'
import itemService from '../../services/item'
import Edit from '../Edit/Edit';

export default function Item2({name, category, color, size, price, description, images, item}) {
    const [edit, setEdit] = useState(false);
    const [items, setItems]= useState([]);
    const handleEdit = () => {
        setEdit(true);
        itemService.update(item.id, name, category, color, size, price, description, images ).then(response => {
            setItems([...items]);
        })
    }
    const handleDelete = () => {
        itemService.delItem(item.id, item).then( response => {
            setItems((preValue) => {
              return [...preValue.filter((item, index) => index !== item.id)];
            });
          })
        alert('Item Deleted');
    }

    const handleHover = () => {
      setEdit((edit)=>{
        edit=!edit
        console.log(edit)
      })
    }
  return (
    <>
    <div className="">
  <div className="">
    <div className="">
      <div className="el-wrapper">
        <div onClick={handleHover} className="box-up">
          <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt=""/>
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
              <span  className="txt">Contact Buyer</span>
            </span>
          </a>
        </div>
        <div className="box-down">
          <div className="h-bg">
            <div className="h-bg-inner"></div>
          </div>

          <a className="cart" href="#">
            <span onClick={handleEdit} className="price">Edit</span>
            <span className="add-to-cart">
              <span onClick={handleDelete} className="txt">Delete</span>
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
