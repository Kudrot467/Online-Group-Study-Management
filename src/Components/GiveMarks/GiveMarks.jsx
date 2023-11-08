import { useLoaderData, useParams } from "react-router-dom";



const GiveMarks = () => {
   const data=useLoaderData();
   const {id}=useParams();
   const markingAssignments=data.find(markingAssignment=>markingAssignment._id==id)
   console.log(markingAssignments);
   const{pdfLink}=markingAssignments;
    const handleSubmitMarks=(id)=>{
         console.log(id)
    }

    return (
        <div>
             <div className="hero min-h-screen bg-base-200"> 
        <div className="hero-content md:w-3/4 lg:w-full flex-col md:flex-row">
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
                  placeholder="marks"
                  className="input text-[#52BA5D] input-bordered border-[#CB6CE6]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#CB6CE6]   text-xl">PDF Link:{pdfLink}</span>
                </label>
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#CB6CE6]  text-xl">FeedBack</span>
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

export default GiveMarks;