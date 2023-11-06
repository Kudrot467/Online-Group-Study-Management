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
import CreateAssignment from './Components/CreateAssignment/CreateAssignment.jsx';
import AllAssignments from './Components/AllAssignments/AllAssignments.jsx';
import MyAssignments from './Components/MyAssignments/MyAssignments.jsx';
import SubmittedLinks from './Components/SubmittedLinks/SubmittedLinks.jsx';
import AssignmentsDifficulty from './Components/AssignmentsDifficulty/AssignmentsDifficulty.jsx';
import Difficulty from './Components/Difficulty/Difficulty.jsx';
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
      },
      {
        path:'/difficulty',
        element:<Difficulty></Difficulty>,
        loader:()=>fetch('http://localhost:5000/difficulties')
      },
      {
        path:'/createAssignment',
        element:<CreateAssignment></CreateAssignment>
      },
      {
        path:'/allAssignments',
        element:<AllAssignments></AllAssignments>,
        loader:()=>fetch("http://localhost:5000/assignments")
      },
      {
        path:'/allAssignments/:type',
        element:<AssignmentsDifficulty></AssignmentsDifficulty>,
        loader:()=>fetch("http://localhost:5000/assignments")
      },
      {
        path:'/myAssignments',
        element:<MyAssignments></MyAssignments>
      },
      {
        path:'/submittedLinks',
        element:<SubmittedLinks></SubmittedLinks>
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
