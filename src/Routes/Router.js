import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

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
                loader: ()=> fetch('https://detective-kevin-server-pulok-thedeveloper.vercel.app/services'),
                element: <AllServices></AllServices>
            },
            {
                path: '/services/:id',
                loader: ({params})=> fetch(`https://detective-kevin-server-pulok-thedeveloper.vercel.app/services/${params.id}`),
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
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
        ]
    }
])

export default router;