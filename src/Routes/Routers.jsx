import Home from '../Pages/Home/Home';
import Main from './../Layout/Main';
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
]);