import React, {useContext} from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../routes";
import {Context} from "../index";


const AppRouter = () => {
    const {user} = useContext(Context) //Достаём user / destruct user из Context

    console.log(user);
    return (
        <Routes>
            {user.isAuth && privateRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
        </Routes>
    );
};

export default AppRouter;