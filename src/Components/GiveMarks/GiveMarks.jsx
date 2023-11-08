import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const GiveMarks = () => {
  const data = useLoaderData();
  console.log(data);
  const { user } = useContext(AuthContext);

  const { pdfLink } = data;
  const examinee = user?.email;

  const handleSubmitMarks = (e) => {
    e.preventDefault();
    const form = e.target;
    const obtainMarks = form.obtainMarks.value;
    const feedback = form.feedback.value;
    const updatedSubmission = {
      examinee,
      obtainMarks,
      feedback,
    };

    fetch(`http://localhost:5000/submittedAssignments/${data._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedSubmission),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Good job!", "You publish result", "success");
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className=" bg-base-200">
        <div className="max-w-6xl py-3 mx-auto md:w-3/4 lg:w-1/2 flex-col md:flex-row">
          <div className="card w-full overflow-x-auto bg-base-100 shadow-xl">
          <div className="text-[#CB6CE6] text-center text-lg md:text-xl">PDF: <br />
                <span>{pdfLink}</span> </div>
            <form className="card-body" onSubmit={handleSubmitMarks}>
              <div className="flex flex-col md:flex-col lg:flex-row gap-1 ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#CB6CE6]  text-xl">
                      ObtainMarks:
                    </span>
                  </label>
                  <input
                    type="marks"
                    placeholder="obtainMarks"
                    name="obtainMarks"
                    className="input text-[#52BA5D] input-bordered border-[#CB6CE6] "
                    required
                  />
                </div>
              </div>
              <div className=""></div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#CB6CE6]  text-xl">
                    FeedBack
                  </span>
                </label>
                <textarea
                  className="border-2 text-[#52BA5D]  border-[#CB6CE6]"
                  name="feedback"
                  id="quickNote"
                  rows="5"
                  placeholder="Write your feedback"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn text-white hover:bg-[#CB6CE6] bg-[#CB6CE6]"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveMarks;
