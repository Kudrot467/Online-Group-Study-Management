import { Link, useLoaderData } from "react-router-dom";
import PropTypes from 'prop-types';

const Difficulty = () => {
    const difficulties=useLoaderData();
   
  
  return (
    <div>
      
        {
            difficulties.map(difficulty=>
                <div key={difficulty.id}>
                    <Link to={`/allAssignments/${difficulty.type}`}>
            <div 
                className="card lg:card-side w-full overflow-x-auto bg-base-100 shadow-xl"
                data-aos="fade-right"
              >
                <figure className="h-[150px]">
                  <img className="w-full h-full md:h-auto" src={difficulty.pic} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-[#52BA5D]">{difficulty.type}</h2>
                </div>
              </div>
              </Link>
                </div>)
        }
    </div>
  );
};
Difficulty.propTypes={
    difficulty:PropTypes.object
}
export default Difficulty;
