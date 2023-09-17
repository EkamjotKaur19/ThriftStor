import React, {useState, useEffect, useContext} from 'react';
import itemService from '../../services/item'
import userService from '../../services/user'
import { AuthContext } from '../AuthContext';
import './style.css'
export default function Create() {
  const { loggedIn, setLoggedIn,  cook, setCook } = useContext(AuthContext);
  const [item, setItem] = useState({
    name: '',
    category: '',
    price: '',
    size: '',
    color: '',
    description: '',
    images: '',
  });
  const [items, setItems] = useState([])
  const [user, setUser] = useState(false)

  const [name, setName] = useState('');
  const [file, setFile] = useState()
  const handleNameChange = () => {
    setName(name)
  }
  const handleChange = (e) => {
    const { name, value, images } = e.target;
    console.log(images)
    setItem({ ...item, [name]: value });
  };

  const addItem = (newItem) =>{ 
    const item_new = {
      name: newItem.name,
      color: newItem.color,
      category: newItem.category,
      size: newItem.size,
      price: newItem.price,
      description: newItem.description,
      images: newItem.images,
    };
    const loggedUserJSON = window.localStorage.getItem('loggeditemappUser')
    const user = JSON.parse(loggedUserJSON)
    itemService.setToken(user.token)
    setUser(user)
  
    itemService.create(item).then(response => setItems((prevValue) => {
      if(prevValue){
        return [...prevValue, item_new];
      }
      else{
        return [item_new]
      }
    })
    );
    
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageName = file.name; // Extract the file name
      setItem({ ...item, images: imageName }); // Set just the file name
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
    addItem(item)
  };

  return (
    <>
    <div className="container-create">
  <form onSubmit={handleSubmit} >
    <div className="row">
      <h4>Create Item</h4>
      <div className="input-group input-group-icon">
      <input
              type="text"
              placeholder="Name"
              name="name"
              value={item.name}
              onChange={handleChange}
            />
        <div className="input-icon">
          <i className="fa fa-user"></i>
        </div>
      </div>
      <div className="input-group input-group-icon">
        <input type="text" placeholder="Size" name="size"
              value={item.size}
              onChange={handleChange} />
        <div className="input-icon">
          <i className="fa-solid fa-ruler"></i>
        </div>
      </div>
      <div className="input-group input-group-icon">
        <input type="text" placeholder="color" name="color"
              value={item.color}
              onChange={handleChange}/>
        <div className="input-icon">
          <i className="fa-solid fa-droplet"></i>
        </div>
      </div>
      <div className="input-group input-group-icon">
        <input type="text" placeholder="Category" name="category"
              value={item.category}
              onChange={handleChange} />
        <div className="input-icon">
          <i className="fa-solid fa-list"></i>
        </div>
      </div>
      <div className="input-group input-group-icon">
        <input type="text" placeholder="Price in Rupees" name="price"
              value={item.price}
              onChange={handleChange} />
        <div className="input-icon">
        <i className="fa-solid fa-indian-rupee-sign"></i>
        </div>
      </div>
      <div className="input-group input-group-icon">
        <input type="textbox" placeholder="Descrption" name="description"
              value={item.description}
              onChange={handleChange}/>
        <div className="input-icon">
        <i className="fa-solid fa-comment"></i>
        </div>
      </div>

      <div className="input-group input-group-icon">
      <input
            type="file"
            name="image"
            accept="image/*"
            value={item.images}
            
            onChange={handleChange}
          />
        <div className="input-icon">
        <i className="fa-solid fa-image"></i>
        </div>
      </div>

        <input  className='submit' type="submit" placeholder="Create Item" />
      
    </div>
  </form>
</div>

    </>
  );
};

