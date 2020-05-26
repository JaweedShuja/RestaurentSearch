import axios from 'axios'

export default axios.create({
    baseURL:'https://developers.zomato.com/api/v2.1',
    headers:{
        'user-key':'2406827678ae97d13213c0eb04c513a7'
    }
})