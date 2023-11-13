import {Authorization} from "../Pages/authorization/Authorization";
import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../Pages/homePage/HomePage";


export const createRouter = () => {
    return createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/authorization',
            element: <Authorization />,
        }
    ]);
};