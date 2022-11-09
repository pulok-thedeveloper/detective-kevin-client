import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: ()=> fetch('http://localhost:5000/services'),
                element: <AllServices></AllServices>
            },
            {
                path: '/services/:id',
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetail></ServiceDetail>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
        ]
    }
])

export default router;