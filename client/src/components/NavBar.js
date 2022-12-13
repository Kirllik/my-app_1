import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {Context} from "../index";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/consts";
import s from "../CSS/NavNar.module.css"
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
          {/*  <Container>*/}
                <NavLink to={SHOP_ROUTE} className={s.brand}>Auto_Components</NavLink>
                {/*<Navbar.Brand  href='/' className={s.brand}>Auto Сomponents</Navbar.Brand>*/}

                <Form className={s.form}>
                    <FormControl type="text" placeholder="Search"/>
                    <Button variant="outline-info" className={s.button_search}>Search</Button>
                </Form>
                {user.isAuth ?
                    <Nav className={s.nav}>
                        <Button variant="outline-info">Админ панель</Button>
                        <Button variant="outline-info" className={s.button_1}>Войти</Button>
                    </Nav>
                    :
                    <Nav className={s.nav}>
                        <Button
                            variant="outline-info"
                            className={s.button_2}
                            onClick={() => user.setIsAuth(true)}>Авторизация
                        </Button>
                    </Nav>
                }
            {/*</Container>*/}
        </Navbar>
    );
});

export default NavBar;