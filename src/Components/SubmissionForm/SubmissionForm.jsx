import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SubmissionForm = () => {
  const takenAssignments = useLoaderData();
  const {user}=useContext(AuthContext);
  const { title } = takenAssignments;

  const handleSubmitAssignment=e=>{
    e.preventDefault();
    const form=e.target;
    const email=user?.email;
    const pdfLink=form.pdfLink.value;
    const quickNote=form.quickNote.value;
    const submitted={
        email,
        pdfLink:pdfLink,
        quickNote:quickNote
    }

    fetch('http://localhost:5000/submittedAssignments',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(submitted)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if (data.insertedId) {
            Swal.fire("Thank You!", "Submitted Successfully", "success");
           
            }
    })


  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200"> 
        <div className="hero-content md:w-3/4 lg:w-full flex-col md:flex-row">
        <img src="https://i.ibb.co/gMTkXBn/images.jpg" alt="" />
          <div className="card flex-shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
            <h2 className="text-2xl text-center font-semibold p-2 text-[#52BA5D]">{title}</h2>
            <form className="card-body" onSubmit={handleSubmitAssignment}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#CB6CE6]  text-xl">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  defaultValue={user?.email}
                  className="input text-[#52BA5D] input-bordered border-[#CB6CE6]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#CB6CE6]   text-xl">PDF Link</span>
                </label>
                <input className="input input-bordered text-[#52BA5D] border-[#CB6CE6]" type="url" name="pdfLink" id="pdfLink" placeholder="Enter PDF link" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#CB6CE6]  text-xl">Quick Notes</span>
                </label>
                <textarea className="border-2 text-[#52BA5D]  border-[#CB6CE6]" name="quickNote" id="quickNote" rows="5" placeholder="Write a quick note (optional)"></textarea>
              </div>
              <div className="form-control mt-6">
               <input className="btn text-white hover:bg-[#CB6CE6] bg-[#CB6CE6]" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionForm;
