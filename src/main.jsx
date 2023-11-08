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
        loader:()=>fetch('http://localhost:5000/difficulties')
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
        element:<AssignmentDetails></AssignmentDetails>,
        loader:()=>fetch("http://localhost:5000/assignments")
      },
      {
        path:'/createAssignment',
        element:<CreateAssignment></CreateAssignment>
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
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
        path:'/takeAssignments/:id',
        element:<SubmissionForm></SubmissionForm>,
        loader:({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
      },
      {
        path:'/myAssignments',
        element:<PrivateRoutes><MyAssignments></MyAssignments></PrivateRoutes>
      },
      {
        path:'/submittedAssignments',
        element:<SubmittedAssignments></SubmittedAssignments>,
        loader:()=>fetch('http://localhost:5000/submittedAssignments')
      },
      {
        path:'/giveMarks/:id',
        element:<GiveMarks></GiveMarks>,
        loader:()=>fetch('http://localhost:5000/submittedAssignments')
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
