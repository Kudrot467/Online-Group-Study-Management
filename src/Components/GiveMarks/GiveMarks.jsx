import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const GiveMarks = () => {
   const data=useLoaderData();
   console.log(data)
   
   const {pdfLink}=data;

//    const{id}=useParams();
//    const markingAssignments=data.find(markingAssignment=>markingAssignment._id==id)
//    console.log(markingAssignments);
//    const{pdfLink}=markingAssignments;

    const handleSubmitMarks=(e)=>{
        e.preventDefault();
        const form=e.target;
        const obtainMarks=form.obtainMarks.value;
        const feedback=form.feedback.value;
        const updatedSubmission={
           obtainMarks,
            feedback
        };


        fetch(`http://localhost:5000/submittedAssignments/${data._id}`,{
            
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedSubmission)
              
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.modifiedCount>0) {
                Swal.fire(
                  "Good job!",
                  "You publish result",
                  "success"
                );
                form.reset();
              }
        })
         
    }

    return (
        <div >
             <div className=" mx-auto bg-base-200"> 
        <div className="hero-content flex flex-col md:flex-row">
        <img src="" alt="" />
          <div className="card flex-shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
            <h2 className="text-2xl text-center font-semibold p-2 text-[#52BA5D]">{}</h2>
            <form className="card-body" onSubmit={handleSubmitMarks}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#CB6CE6]  text-xl">ObtainMarks:</span>
                </label>
                <input
                  type="marks"
                  placeholder="obtainMarks"
                  name="obtainMarks"
                  className="input text-[#52BA5D] input-bordered border-[#CB6CE6]  w-3/4 md:w-full lg:w-1/2"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
             
                  <span className="label-text text-[#CB6CE6] mx-auto text-lg md:text-xl">
                    <span>PDF Link:{pdfLink}</span>
                   </span>
                </label>
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#CB6CE6]  text-xl">FeedBack</span>
                </label>
                <textarea className="border-2 text-[#52BA5D]  border-[#CB6CE6]  w-3/4 md:w-full lg:w-1/2" name="feedback" id="quickNote" rows="5" placeholder="Write your feedback"></textarea>
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

export default GiveMarks;