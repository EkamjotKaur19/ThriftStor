import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/orders'

let token = null
const getAll =async  () =>{
    const response = await axios.get(baseUrl);
    console.log(response);
    return response;
}

const setToken = newToken => {
    token = `bearer ${newToken}`
  }
  
  const getOne = (id ) => {
    return axios.get(`${baseUrl}/${id}`)
  }

const getUserOrders = (id ) => {
    return axios.get(`${baseUrl}/${id}`)
}

const create = async (newObject) => {
    console.log('token', token)
    const config = {
      headers: { Authorization: token },
    }
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}
  
const expObj= { getAll, getOne, setToken, getUserOrders, create};
export default expObj;