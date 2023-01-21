import {$host, $authHost} from "./index";
import jwtDecode from "jwt-decode";
import data from "bootstrap/js/src/dom/data";

export const registration = async (email, password) => {
    /*console.log("registration  ", email, password)*/
    const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    // console.log("data in registr = ", data)
    localStorage.setItem('token', data.token)  //Сохранение токена в localStorage
    return jwtDecode(data.token)   //Декодирование токена в объект user{...}
}

export const login = async (email, password) => {
    const {data} = await $host.post     //Метод запроса к бэку
    (
        'api/user/login',    //Урл запроса
        {email, password}   //Данные отправляемые
    )
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const response = await $host.post('api/user/auth')
    return response
}