import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {AUTH_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from "react-router-dom";

const Auth = () => {
    const location = useLocation() //Для выуживания pathname из строки с URL
    const isLogin = location.pathname === AUTH_ROUTE
    console.log(location, isLogin);

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
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
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