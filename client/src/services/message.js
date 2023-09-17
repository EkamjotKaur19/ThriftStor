import axios from 'axios'
const baseUrl = 'https://thridtstorebackend.onrender.com/api/msgs'

let token = null
const getAll =async  () =>{
    const response = await axios.get(baseUrl);
    return response;
}

const setToken = newToken => {
    token = `bearer ${newToken}`
  }
  
  const getOne = (id ) => {
    console.log(id);
    return axios.get(`${baseUrl}/${id}`)
  }

  
const expObj= { getAll, getOne, setToken};
export default expObj;