import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SubmittedAssignments = () => {
  const { user } = useContext(AuthContext);
  const submittedAllAssignments = useLoaderData();
  const usersSubmission = submittedAllAssignments.filter(
    (assignment) => assignment?.ownerEmail === user?.email
  );
  //   console.log(usersSubmission);
  console.log(user);
  return (
    <div className="max-w-6xl mx-auto ">
      {usersSubmission.map((userSubmission) => (
        <div key={userSubmission._id}>
          <div className="collapse bg-base-200 my-2">
            <Link to={`/giveMarks/${userSubmission._id}`}>
              <button className="btn  w-full bg-[#5ee96c] text-white font-medium hover:text-[#CB6CE6] ">
                Give Mark
              </button>
            </Link>
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-[#52BA5D] text-xl peer-checked:bg-[#52BA5D] peer-checked:text-xl text-white font-semibold">
              Submitted By {userSubmission.email}
            </div>
            <div className="collapse-content bg-[#5ee96c] text-xl peer-checked:bg-[#CB6CE6] peer-checked:text-xl">
              <h1 className="text-white font-bold">Work-Details</h1>
              <div className="card lg:card-side w-full overflow-x-auto bg-base-100 shadow-xl">
                <h2 className="card-title text-[#52BA5D] ml-1">
                  {userSubmission.title}
                </h2>
                <div className="card-body">
                  <p className="text-xl text-[#52BA5D]">
                    {" "}
                    <span className="text-xl text-[#CB6CE6] font-medium">
                      Marks:
                    </span>{" "}
                    {userSubmission.marks}
                  </p>

                  <p className="text-xl text-red-600 font-semibold">
                    {userSubmission?.obtainMarks.length > 0 ? (
                      <span>completed</span>
                    ) : (
                      <span>pending</span>
                    )}
                  </p>
                  <p className="text-xl text-[#CB6CE6] font-medium">
                    {" "}
                    Obtain Marks:
                    {userSubmission?.obtainMarks.length === 0 ? (
                      <p className="text-xl text-[#52BA5D]">
                        not check yet by examinee
                      </p>
                    ) : (
                      <p className="text-xl text-[#52BA5D]">
                        {userSubmission?.obtainMarks}
                      </p>
                    )}
                  </p>

                  <span className="text-xl text-[#52BA5D]">
                    {userSubmission?.feedback ? (
                      <p className="text-xl text-[#CB6CE6] font-medium">
                        Feedback: {userSubmission?.feedback}{" "}
                      </p>
                    ) : (
                      ""
                    )}
                  </span>

                  <p className="text-xl text-[#52BA5D]">
                    {" "}
                    <span className="text-xl text-[#CB6CE6] font-medium">
                      Examinee:
                    </span>{" "}
                    {user?.displayName
                      ? user?.displayName
                      : user?.email.slice(0, -10)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubmittedAssignments;
