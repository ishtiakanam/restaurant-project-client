import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Menu from '../Pages/Menu/Menu';
import Order from '../Pages/Order/Order';
import SignUp from '../Pages/SIgnUp/SignUp';
import Main from './../Layout/Main';
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Secret from '../Pages/Shared/Secret';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
            {
                path: 'order/:category',
                element: <Order />
            },
        ]
    },
]);