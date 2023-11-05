import { useLoaderData } from "react-router-dom";

const AllAssignments = () => {
  const allAssignments = useLoaderData();
  // console.log(allAssignments);
  return (
    <div>
      <h2 className="4xl">
        This is All Assignments section{allAssignments.length}
      </h2>
      {allAssignments.map((assignment) => (
        <div key={assignment._id}>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={assignment.image_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{assignment.title}</h2>
              <p>{assignment.short_description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllAssignments;
