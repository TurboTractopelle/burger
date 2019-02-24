import axios from "axios"

const instance = axios.create({
    baseURL: "https://burger-0219.firebaseio.com" 
})

// Clé API Web : AIzaSyBQPz7UZoAUosQIFutJpkDXKsfoa_LYpKc

export default instance