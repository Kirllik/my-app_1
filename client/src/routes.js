import Admin from "./pages/Admin";
import {ADMIN_ROUTE, AUTH_ROUTE, BASKET_ROUTE, DEVISE_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Auth from "./pages/Auth";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";

export const privateRoutes = [
    {path: ADMIN_ROUTE, Component: Admin},
    {path: BASKET_ROUTE, Component: Basket}
]

export const publicRoutes = [
    {path: SHOP_ROUTE, Component: Shop},
    {path: AUTH_ROUTE, Component: Auth},
    {path: REGISTRATION_ROUTE, Component: Auth},
    {path: DEVISE_ROUTE + '/:id', Component: ProductPage}

]