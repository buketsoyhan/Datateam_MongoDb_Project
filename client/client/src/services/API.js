import axios from 'axios'

export default () => {
  return axios.create({
    // 8081 portu da olabilir dene
    baseURL: 'http://localhost:5000/'
  })
}
