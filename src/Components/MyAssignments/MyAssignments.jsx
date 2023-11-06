import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyAssignments = () => {
    const {user}=useContext(AuthContext);
    const [submittedAssignment,setSubmittedAssignment]=useState([]);

    const url=`http://localhost:5000/submittedAssignments?email=${user.email}`
    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    },[])
    return (
        <div>
            <h3 className="text-3xl">This is MyAssignments</h3>
        </div>
    );
};

export default MyAssignments;