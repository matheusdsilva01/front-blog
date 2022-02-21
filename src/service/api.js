import axios from 'axios';

const restClient = axios.create({
    baseURL: "https://matheusdsilva01-blog.herokuapp.com/",
})

export default restClient;