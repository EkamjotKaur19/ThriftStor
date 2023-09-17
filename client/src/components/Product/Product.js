import React, {useState, useEffect} from 'react'
import itemService from '../../services/item'
import Item from '../Item/Item';
import './style.css'

export default function Product() {
    const [items, setItems]=useState([])
    useEffect(() => {
      const fetchItems = async () => {
        console.log('ekam');
        try {
          const response = await itemService.getAllItems();
          console.log(response);
          setItems(response.data);
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      };
  
      fetchItems();
    }, []);
  return (
    <div className='' >
        {items ? items.map((item, idx) => (
        <Item key={idx} 
          name={item.name}
          category={item.category}
          color={item.color}
          size={item.size}
          price={item.price}
          description={item.description}
          images={item.images}
          seller={item.seller}
          />
      )): console.log('none')}
      
    </div>
  )
}
