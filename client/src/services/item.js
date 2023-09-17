import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/items'

let token = null
const getAllItems =async  () =>{
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

const getUserItems = (id ) => {
    return axios.get(`${baseUrl}/${id}`)
}

const create = async newObject => {
    console.log('token', token)
    const config = {
      headers: { Authorization: token },
    }
  
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const upload = async newObject => {
  console.log('token', token)
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${baseUrl}/upload-image`, newObject, config)
  return response.data
}

const update = async (id, newObject) => {
    const request = await axios.put(`${ baseUrl }/${id}`, newObject)
    return request;
}
  
const delItem = (id, note) => {
    return axios.delete(`${baseUrl}/${id}`, {data : note});
}
  
const expObj= { getAllItems, getOne, setToken, getUserItems, create, update, delItem };
export default expObj;