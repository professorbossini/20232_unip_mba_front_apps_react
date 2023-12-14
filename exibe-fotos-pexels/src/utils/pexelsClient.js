import axios from 'axios'
export default axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  headers: {
    Authorization: '563492ad6f91700001000001e00b21ab6afb45a18c1d44a759556f14'
  }
})