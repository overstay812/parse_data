import Axios from "axios"

const API_KEY = "AIzaSyDinhqe5zx_3pR-K54QWnzvasq_A__5UB4"

export default Axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key: API_KEY
    },
    headers:{}
})