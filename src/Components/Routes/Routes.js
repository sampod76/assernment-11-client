import Addservice from "../Addservice/Addservice";
import SingleService from "../PrivitePage/AddService";
import AddService from "../PrivitePage/AddService";
import Profile from "../PrivitePage/Profile/Profile";
import ReviewAll from "../PrivitePage/review/ReviewAll";
import ReviewCard from "../PrivitePage/review/ReviewCard";
import ReviewUpdate from "../PrivitePage/review/ReviewUpdate";
import EnvelideRout from "../Share/404Rout";
import Priviteroutes from "./Priviteroutes";
const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Home/Home");
const { default: Main } = require("../Mian/Main");
const { default: Delivery } = require("../PrivitePage/Delivery/Delivery");
const { default: Bloge } = require("../Share/Bloge");
const { default: Login } = require("../Share/Login");
const { default: Register } = require("../Share/Register");

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',

                element: <Home></Home>
            },
            {
                path: '/home',

                element: <Home></Home>
            },
            {
                path: '/delivery',
                element: <Delivery></Delivery>
            },
            {
                path: '/delivery/:id',
                element: <SingleService></SingleService>
            },
            {
                path: '/reviews',
                element: <Priviteroutes><ReviewAll></ReviewAll></Priviteroutes>
            },
            {
                path: '/reviews/updates/:id',
                element: <Priviteroutes><ReviewUpdate></ReviewUpdate></Priviteroutes>
            },
            {
                path: '/addservices',
                element: <Priviteroutes><Addservice></Addservice></Priviteroutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Bloge></Bloge>
            },
            {
                path:'/profile',
                element:<Priviteroutes><Profile></Profile></Priviteroutes>
            }

        ]
    },
    {
        path: '*',
        element: <EnvelideRout></EnvelideRout>
    }

])