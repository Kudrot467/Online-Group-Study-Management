import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//#98198E
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Registration from './Components/Registration/Registration.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import CreateAssignment from './Components/CreateAssignment/CreateAssignment.jsx';
import AllAssignments from './Components/AllAssignments/AllAssignments.jsx';
import MyAssignments from './Components/MyAssignments/MyAssignments.jsx';
import AssignmentsDifficulty from './Components/AssignmentsDifficulty/AssignmentsDifficulty.jsx';
import AssignmentDetails from './Components/AssignmentDetails/AssignmentDetails.jsx';
import Update from './Components/Update/Update.jsx';
import SubmissionForm from './Components/SubmissionForm/SubmissionForm.jsx';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes.jsx';
import SubmittedAssignments from './Components/SubmittedAssignments/SubmittedAssignments.jsx';
import GiveMarks from './Components/GiveMarks/GiveMarks.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('https://1001-ogsf-server.vercel.app/difficulties')
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
        path:'/assignmentDetails/:id',
        element:<PrivateRoutes><AssignmentDetails></AssignmentDetails></PrivateRoutes>,
        loader:()=>fetch("https://1001-ogsf-server.vercel.app/assignments")
      },
      {
        path:'/createAssignment',
        element:<PrivateRoutes><CreateAssignment></CreateAssignment></PrivateRoutes>
      },
      {
        path:'/update/:id',
        element:<PrivateRoutes><Update></Update></PrivateRoutes>,
        loader:({params})=>fetch(`https://1001-ogsf-server.vercel.app/assignments/${params.id}`)
      },
      {
        path:'/allAssignments',
        element:<AllAssignments></AllAssignments>,
        loader:()=>fetch("https://1001-ogsf-server.vercel.app/assignments")
      },
      {
        path:'/allAssignments/:type',
        element:<AssignmentsDifficulty></AssignmentsDifficulty>,
        loader:()=>fetch("https://1001-ogsf-server.vercel.app/assignments")
      },
      {
        path:'/takeAssignments/:id',
        element:<PrivateRoutes><SubmissionForm></SubmissionForm></PrivateRoutes>,
        loader:({params})=>fetch(`https://1001-ogsf-server.vercel.app/assignments/${params.id}`)
      },
      {
        path:'/myAssignments',
        element:<PrivateRoutes><MyAssignments></MyAssignments></PrivateRoutes>
      },
      {
        path:'/submittedAssignments',
        element:<PrivateRoutes><SubmittedAssignments></SubmittedAssignments></PrivateRoutes>,
        loader:()=>fetch('https://1001-ogsf-server.vercel.app/submittedAssignments')
      },
      {
        path:'/giveMarks/:id',
        element:<PrivateRoutes><GiveMarks></GiveMarks></PrivateRoutes>,
        loader:({params})=>fetch(`https://1001-ogsf-server.vercel.app/submittedAssignments/${params.id}`)
      },
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
