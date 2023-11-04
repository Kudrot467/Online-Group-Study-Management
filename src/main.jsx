import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//#98198E
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Registration from './Components/Registration/Registration.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
