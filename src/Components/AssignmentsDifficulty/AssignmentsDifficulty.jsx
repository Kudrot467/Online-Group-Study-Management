import { Link, useLoaderData, useParams } from "react-router-dom";
const AssignmentsDifficulty = () => {
  const allAssignments = useLoaderData();

  const { type } = useParams();

  const assignments = allAssignments.filter(
    (assignments) => assignments.type === type
  );
  return (
    <div>
      {assignments.map((assignment) => (
        <div key={assignment._id}>
          <div key={assignment._id}>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full h-[250px]"
                  src={assignment.image_url}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#CB6CE6]">
                  {assignment.title}
                </h2>
                <p className="text-lg font-semibold">
                  Difficulty:{" "}
                  <span className="text-red-500">{assignment.type}</span> <br />
                  <span className="text-lg text-green-500 font-semibold">
                    Marks:{" "}
                    <span className="text-green-500">{assignment.marks}</span>{" "}
                  </span>
                </p>
                <p>
                  {assignment.short_description.length > 70 ? (
                    <p>
                      {assignment.short_description.slice(0, 70)}
                      <Link to="/assignmentDetails">
                        .....
                        <button className="text-xl underline text-[#CB6CE6]">
                          View Details
                        </button>
                      </Link>
                    </p>
                  ) : (
                    <p>{assignment.short_description}</p>
                  )}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssignmentsDifficulty;
