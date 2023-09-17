import React, {useState, useEffect, useContext} from 'react';
import loginService from '../../services/login'
import userService from '../../services/user'
import itemService from '../../services/item'
import { useNavigate, Link  } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
}
from 'mdb-react-ui-kit';
import './style.css'
import login from '../../assets/login.png'

export default function Login() {
  const { loggedIn, setLoggedIn, cook, setCook } = useContext(AuthContext);
    const navigate=useNavigate();
    const [items, setItems] = useState([]);
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('') 
    const [user, setUser] = useState(false)
    const handleLogin = async (event) => {
        event.preventDefault()
        console.log('logging in with', username, password);
        try {
              const user = await loginService.login({
              username, password,
              
            })
            console.log(user)
            alert(`Successfully logged in. Fetching items`);
            setLoggedIn(true)
            setCook(true)
            window.localStorage.setItem(
              'loggeditemappUser', JSON.stringify(user)
            )
            itemService.setToken(user.token)
            setUser(user)
            setUsername('')
            setPassword('');
            console.log(user.id)
            
            navigate('/')
            userService.getOne(user.id).then(itemList => {
              for(let i=0; i<itemList.length; i++){
               setItems((prevValue)=>{
                if(prevValue){
                  return [...prevValue, itemList[i]];
                }
                else{
                  return [itemList[i]]
                }
               })
              }
            
          })
          } 
          catch (exception) {
            alert(`Wrong Credentials`);
          }
      }
  return (
    <div>
        <form onSubmit={handleLogin} > 
      <MDBContainer fluid className="p-3  my-2">
  
        <MDBRow >
  
          <MDBCol col='6' md='6'>
            <img src={login} className="img-fluid" alt=''/>
          </MDBCol>
  
          <MDBCol col='6' md='5'>
          <p className="text-center h2 fw-bold mx-1 mx-md-3 mt-1 mb-3">Sign In</p>
  
  
            <MDBInput className='mb-0' wrapperClass='mb-0' label='Username' id='formControlLg' type='text' size="lg" value={username} onChange={({ target }) => setUsername(target.value)}/>
            
            <MDBInput className='mb-0' wrapperClass='mb-0' label='Password' id='formControlLgg' type='password' size="lg" value={password} onChange={({ target }) => setPassword(target.value)}/>
            <button className="mt-2 mb-2 w-100 log-btn" size="lg">Sign in</button>
  
            <Link to='/signup' >
            <button  className="mb-5 w-100 log-btn" size="lg" >
              New User? Register First
            </button>
            </Link>
          </MDBCol>
  
        </MDBRow>
  
      </MDBContainer>
      </form>
      
    </div>
  )
}
