import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {AUTH_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from "react-router-dom";
import {Context} from "../index";
import {login, registration} from "../http/userAPI";

const Auth = () => {
    const location = useLocation() //Для выуживания pathname из строки с URL
    const isLogin = location.pathname === AUTH_ROUTE
    //console.log(location, isLogin);
    const {user} = useContext(Context)
    // console.log(user)
    const [inputType, setInputType] = useState("password")
    // console.log(inputType);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        if (isLogin) {
            const response = await login()
        } else {
            console.log('click')
            const response = await registration(email, password)
            console.log(response);
            console.log(response.data.token);
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center "
            style={{height: window.innerHeight - 54}}  /*ЦЕНТР = высота всего браузера - высота NawBar*/
        >
            <Card style={{width: 600}} className="p-3">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type={inputType}

                    />
                    <Form.Check
                        className="mt-2"
                        type="switch"
                        label="Показать пароль"
                        onChange={() =>
                            inputType === "password"
                                ?
                                setInputType("text")
                                :
                                setInputType("password")}

                    />
                    <div className="d-flex justify-content-between mt-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={AUTH_ROUTE}>Войдите</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-info"}
                            onClick={click}
                        >
                            {isLogin ? "Войти" : "Регистрация"}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;