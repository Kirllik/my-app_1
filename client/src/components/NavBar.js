import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, AUTH_ROUTE, SHOP_ROUTE} from "../utils/consts";
import s from "../CSS/NavNar.module.css"
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE}
                         style={{color: 'white', textDecoration: 'none', fontSize: 'larger'}}>Auto_Components</NavLink>

                {user.isAuth ?
                    <Nav className="ms-auto" style={{color: 'white'}}>
                        <Button
                            variant="outline-info"
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        {/*----------------------------------------------------------------*/}
                        <Button
                            variant="outline-info"
                            className={s.button_1}
                            onClick={() => navigate(AUTH_ROUTE)}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button
                            variant="outline-info"
                            style={{color: 'white'}}
                            onClick={() => user.setIsAuth(true)}>Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;