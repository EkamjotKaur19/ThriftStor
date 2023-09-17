import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import userService from '../../services/user'
import itemService from '../../services/item'
import messageService from '../../services/message'
import Item2 from '../Item/Item2';
import './style.css'
import Notification from '../Notification/Notification';
import Pickup from '../Pickup/Pickup'

export default function Posted() {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [msgs, setMsgs] = useState([]);
    const [pick, setPick] = useState(false);
    const [notify, setNotify] = useState(false)
    const [order, setOrders]=useState([]);
    const [user, setUser] = useState('');
    const handleCreate = () => {
        navigate('/create')
    }
    const handleNotify = () => {
      setNotify(!notify)
    }
    const handlePickup = () => {
      navigate('/pickup')
    }
    useEffect(() => {
      const loggedUserJSON = window.localStorage.getItem('loggeditemappUser')
      const user = JSON.parse(loggedUserJSON)
      console.log(user)
      setUser(user)
      messageService.setToken(user.id)
      userService.getOne(user.id).then(
        noteList => {
          for(let i=0; i<noteList.length; i++){
            setItems((prevValue)=>{
             if(prevValue){
               return [...prevValue, noteList[i]];
             }
             else{
               return [noteList[i]]
             }
            })
           }
        }
      )
      async function fetchMessages() {
        try {
          const messages = await messageService.getOne(user.id);
          setMsgs(messages);
          
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      }
      fetchMessages();
        
      

      

      }, [])
  return (
    <>
    <div className='sell' >
      <button className='sale-head-btn' onClick={handleCreate} >Sell an Item</button>
    </div>
    <div>
      <div className="notify">
      <i onClick={handleNotify} className="bell fa-solid fa-envelope"></i>
      <p className='length'  >{Array.isArray(msgs.data) && msgs.data.length>1 ? msgs.data.length : 0}</p>
      </div>
      {notify && <Notification msgs={msgs} handlePickup={handlePickup} />}
      <div className="sale">

      <h2 className='sale-head'>See items put on sale by you</h2>
      
        {items ? items.map((item, idx) => (
          <Item2 key={idx} 
            name={item.name}
            category={item.category}
            color={item.color}
            size={item.size}
            price={item.price}
            description={item.description}
            images={item.images}
            item={item}
            />
        )): console.log('none')}
      <button onClick={handlePickup} >pick</button>
        {pick && <Pickup  /> }
      

    </div>
    </div>
    </>
  )
}
