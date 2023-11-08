import { useContext, useState} from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const AllAssignments = () => {
  const allAssignments = useLoaderData();
  const [assignments,setAssignments]=useState(allAssignments);
  const {user}=useContext(AuthContext);
  console.log(allAssignments);

 const handleDelete=id=>{
        fetch(`https://1001-ogsf-server.vercel.app/assignments/${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if (data.deletedCount>0) {
                    Swal.fire(
                       "Deleted!",
                       "Your file has been deleted.",
                       "success"
                    );
                   
                    const remaining=allAssignments.filter(assignment=>assignment._id!==id);
                    setAssignments(remaining);
                  }
                
        })
 }

  return (
    <div className="max-w-6xl mx-auto">
       
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {assignments.map((assignment) => (
          <div key={assignment._id}>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img className="w-full h-[250px]" src={assignment.image_url} alt="Shoes" />
              </figure>
              <div className="card-body h-full md:h-[250px] lg:h-[270px]">
                <h2 className="card-title text-[#CB6CE6]">{assignment.title}</h2>
                <p className="text-lg font-semibold">Difficulty: <span className="text-red-500">{assignment.type}</span> <br />
                <span className="text-lg text-green-500 font-semibold">Marks: <span className="text-green-500">{assignment.marks}</span> </span>
                 </p>
                <p>
                  {assignment.short_description.length > 70 ? (
                    <p>
                      {assignment.short_description.slice(0, 70)}
                      <Link to={`/assignmentDetails/${assignment._id}`}>
                        .....<button className="text-xl underline text-[#CB6CE6]">View Details</button>
                      </Link>
                    </p>
                  ) : (
                    <p>{assignment.short_description}</p>
                  )}
                </p>
                <div className="card-actions justify-end md:h-[200px]">
                  {
                    user?.email===assignment.email ? <div className="flex items-center">
                      <p className="text-[#52BA5D] mr-2">You can update or delete the Assignment</p>
                      <Link to={`/update/${assignment._id}`}>
                    <button className="btn text-[#52BA5D] mr-2 hover:bg-[#CB6CE6] hover:text-white">
                      Update
                    </button>
                  </Link>
                  <button onClick={()=>handleDelete(assignment._id)} className="btn text-white bg-red-600 hover:bg-red-600 hover:text-white">
                     Delete
                    </button>
                    </div>: <div className="flex items-center">
                      <p className="text-red-600 mr-2">You cannot update&delete,
                      because this was created by others.
                      </p>
                    <button disabled className="btn text-[#52BA5D] mr-2 hover:bg-[#CB6CE6] hover:text-white">
                      Update
                    </button>
                    <button disabled className="btn text-white bg-red-600 hover:bg-red-600 hover:text-white">
                     Delete
                    </button>
                    </div>
                  }
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAssignments;
