import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import PrivateRoute from "../../Pages/Register/PrivateRoute/PrivateRoute";
import Register from "../../Pages/Register/Register";
import User from "../../Shared/User/User";

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
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/appointment',
            element: <Appointment></Appointment>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
         {
            path: '/user',
            element: <User></User>
         },

      ]
   },
   {
      path: '/dashboard',
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
   }
])
export default router;