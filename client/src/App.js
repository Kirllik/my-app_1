import React, {useContext, useEffect, useState} from "react";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import s from "./CSS/Auth.module.css"

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {   //Имитация плохого соединения
            check().then(data => {  //Если функция check() успешна, в методе .then(меняем состояния в сторе)
                console.log("data= ", data)
                user.setUser(true)
                user.setIsAuth(true)
            }).finally(() => setLoading(false))  //и вне зависимости от успешности или нет функции check(), исполняем метод .finally
        }, 1000)
    }, [])

    if (loading) {
        return <div className={s.center}><Spinner animation="border" variant="primary"/></div>
    }

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;
