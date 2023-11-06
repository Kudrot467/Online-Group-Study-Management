import {  Link, useLoaderData, useParams } from "react-router-dom";

const AssignmentDetails = () => {
    const data=useLoaderData();
    console.log(data)
    const {id}=useParams();
    console.log(id);
    const detail = data.find((detail) => detail._id == id);
    console.log(detail)
    const {title,image_url,type,marks,short_description}=detail;
    // console.log(detail)
    return (
        <div className="max-w-7xl mx-auto">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={image_url} className="w-1/2 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-4xl font-bold text-[#52BA5D]">{title}</h1>
              <h2 className="text-2xl font-bold text-[#AD66D9]">Difficulty:{type}</h2>
              <h3 className="text-2xl font-bold text-[#52BA5D]">Marks:{marks}</h3>
              <p className="py-6">
                {short_description} <br />
               {" "}
              </p>
              <Link to={`/myAssignments`}>
                <button className="btn bg-[#52BA5D] text-white hover:text-[#52BA5D]">
                  Take Assignment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AssignmentDetails;