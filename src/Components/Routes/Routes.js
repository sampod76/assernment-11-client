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
    element:<Main></Main>,
    children: [
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/delivery',
            element:<Delivery></Delivery>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/bloge',
            element:<Bloge></Bloge>
        }
    ]
    }

])