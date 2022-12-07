import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../routes";


const AppRouter = () => {
    const isAuth = true
    return (
        <Routes>
            {isAuth && privateRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
        </Routes>
    );
};

export default AppRouter;