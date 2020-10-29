import axios from "axios"


const KEY = "AIzaSyCk1NCWeyG_pqA_OlMqyDKZhXDsNeDegJ8"

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults: 10,
        key: KEY,
        
    },
    headers:{}
})
