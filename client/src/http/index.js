import axios from "axios";

//Instans

//Instance without authorization
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

//Instance with authorization
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

//Инрерцептор (функция которая параметром принимает конфиг) для подставления токена к запросу в headers.authorization
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}