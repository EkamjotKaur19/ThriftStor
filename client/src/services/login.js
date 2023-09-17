import axios from 'axios'
const baseUrl = 'https://thridtstorebackend.onrender.com/api/login'

const login = async credentials => {
    console.log('trying')
  const response = await axios.post(baseUrl, credentials)
  console.log(response)
  return response.data
}

export default { login }