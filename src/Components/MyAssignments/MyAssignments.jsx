import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyAssignments = () => {
  const { user } = useContext(AuthContext);
  const [submittedAssignments, setSubmittedAssignments] = useState([]);
  console.log(user)

  const url = `https://1001-ogsf-server.vercel.app/submittedAssignments?email=${user?.email}`;

  useEffect(() => {
    fetch(url,{credentials:'include'})
      .then((res) => res.json())
      .then((data) => {
        setSubmittedAssignments(data);
      });
  }, [url]);
  console.log(submittedAssignments);
  return (
    <div className="max-w-6xl mx-auto ">
      <h3 className="text-2xl text-[#52BA5D] font-bold"> Ouantity of Your Submission: {submittedAssignments.length}</h3>
      <div>
        {submittedAssignments.map((submittedAssignment) => (
          <div key={submittedAssignment._id}>
            <div className="collapse bg-base-200 my-2">
            <Link to="/"><button  className="btn text-white bg-[#5ee96c] ">Home</button></Link>
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-[#52BA5D] text-xl peer-checked:bg-[#52BA5D] peer-checked:text-xl text-white font-semibold">
               Submitted by user({user?.email})
              </div>
              <div className="collapse-content bg-[#5ee96c] text-xl peer-checked:bg-[#CB6CE6] peer-checked:text-xl">
                <p className="text-white font-semibold">This is your submission</p>
                <div 
                className="card lg:card-side w-full overflow-x-auto bg-base-100 shadow-xl"
              >
                <div className="card-body">
                  <h2 className="card-title text-[#52BA5D]">{submittedAssignment.title}</h2>
                  <p>{submittedAssignment?.obtainMarks.length>0 ? <p className="text-green-600 font-bold"> <span className="text-[#CB6CE6] text-xl"> Status:</span>Completed</p> : <p className="text-red-500"><span className="text-[#CB6CE6] text-xl"> Status:</span>Pending</p>}</p>
                  <p className="text-[#52BA5D]">Marks:{submittedAssignment?.marks}</p>
                  <p className="text-[#52BA5D]"> Obtain Marks:{submittedAssignment?.obtainMarks.length===0 ? <p>not check yet by examinee</p>:<p>{submittedAssignment?.obtainMarks}</p> }</p>
                 <p>{submittedAssignment?.examinee ? <p>{submittedAssignment?.examinee.slice(0,-10)} </p>:""}</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAssignments;
