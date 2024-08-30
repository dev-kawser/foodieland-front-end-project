import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Working from "../Shared/Working/Working";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/recipes",
                element: <Working></Working>
            },
            {
                path: "/blog",
                element: <Working></Working>
            },
            {
                path: "/contact",
                element: <Working></Working>
            },
            {
                path: "/about",
                element: <Working></Working>
            },
        ]
    },
]);

export default router;