import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {Context} from "../index";
import {Button, Container, Image, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, AUTH_ROUTE, SHOP_ROUTE} from "../utils/consts";
import avatar from "../assets/avatar.png"
import s from "../CSS/NavNar.module.css"
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        console.log("logOut()")
        user.setUser({})
        console.log("user =", user)
        user.setIsAuth(false)
        localStorage.removeItem('token') //Затирание токена по ключу
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE}
                         style={{color: 'white', textDecoration: 'none', fontSize: 'larger'}}>Auto_Components</NavLink>

                {user.isAuth ?
                    <Nav className="m-1" style={{color: 'white'}}>
                        <Button
                            variant="outline-info"
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>

                        {/*----------------------------------------------------------------*/}
                        <Button
                            variant="outline-info"
                            className="ms-2"
                            onClick={logOut}
                        >
                            Выйти
                        </Button>
                        <Image className={s.round} src={avatar}/>
                    </Nav>
                    :
                    <Nav className="ml-auto mt-2">
                        <Button
                            variant="outline-info"
                            style={{color: 'white'}}
                            onClick={() => navigate(AUTH_ROUTE)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                }

            </Container>
        </Navbar>
    );
});

export default NavBar;