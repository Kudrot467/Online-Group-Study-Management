import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyAssignments = () => {
  const { user } = useContext(AuthContext);
  const [submittedAssignments, setSubmittedAssignments] = useState([]);
  console.log(user)

  const url = `http://localhost:5000/submittedAssignments?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSubmittedAssignments(data);
      });
  }, [url]);
  console.log(submittedAssignments);
  return (
    <div className="max-w-6xl mx-auto ">
      <h3 className="text-3xl">This is {submittedAssignments.length}</h3>
      <div>
        {submittedAssignments.map((submittedAssignment) => (
          <div key={submittedAssignment._id}>
            <div className="collapse bg-base-200 my-2">
            <button  className="btn bg-[#5ee96c] ">thinking</button>
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-[#52BA5D] text-xl peer-checked:bg-[#52BA5D] peer-checked:text-xl text-white font-semibold">
               Submitted by user({user?.email})
              </div>
              <div className="collapse-content bg-[#5ee96c] text-xl peer-checked:bg-[#CB6CE6] peer-checked:text-xl">
                <p>hello</p>
                <div 
                className="card lg:card-side w-full overflow-x-auto bg-base-100 shadow-xl"
              >
                <div className="card-body">
                  <h2 className="card-title text-[#52BA5D]">{submittedAssignment.title}</h2>
                  <p>{submittedAssignment?.obtainMarks.length>0 ? <p className="text-green-600 font-bold"> <span className="text-[#CB6CE6] text-xl"> Status:</span>Completed</p> : <p className="text-red-500"><span className="text-[#CB6CE6] text-xl"> Status:</span>Pending</p>}</p>
                  <p>Marks:{submittedAssignment?.marks}</p>
                  <p> Obtain Marks:{submittedAssignment?.obtainMarks.length===0 ? <p>not check yet by examinee</p>:<p>{submittedAssignment?.obtainMarks}</p> }</p>
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
