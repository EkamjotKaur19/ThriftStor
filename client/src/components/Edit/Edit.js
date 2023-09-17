import React, { useState } from 'react'
import './style.css'

export default function Edit({item, handleEdit, edit, setEdit}) {
    const [inpCon, setInpCon]=useState(item.price);
    const handleClose = () => {
        setEdit(false)
    }


    const handleChange= (e) => {
        setInpCon(e.target.value);
    }

  return (
    <div >
        <div className="popup-box">
            <form
                onSubmit={handleEdit}
                className={edit ? "edit-form show" : " hide"}>
                <input placeholder="name"  />
                <input placeholder="price" value={inpCon} onChange={handleChange} />
                <input type="submit" />
                <input type="button" onClick={handleClose} value="Close"/>
            </form>
            </div>
            </div>
  )
}
