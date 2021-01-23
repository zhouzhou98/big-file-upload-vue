import axios from 'axios'
export default {
  check(key){
    return axios({
      url: '/api/check',
      method: 'get',
      key
    })
  },
  upload(totalParam, config){
    return axios({
      url: '/api/upload',
      method: 'post',
      totalParam, 
      config
    })
  }
}