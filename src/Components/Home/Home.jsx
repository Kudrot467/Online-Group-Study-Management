import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import MeetingPlatform from "../MeetingPlatform/MeetingPlatform";
import FAQ from "../FAQ/FAQ";


const Home = () => {
    const difficulties=useLoaderData();


    return (
      <div>
        <Banner></Banner>
         <div className="max-w-6xl mx-auto bg-base-200 p-2 rounded-lg my-2">
        <h1 className="text-2xl font-semibold text-[#CB6CE6]">Assignments based on Difficulty</h1>
         <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
       {
        difficulties?.map(difficulty=><div key={difficulty.id}>
            <Link to={`/allAssignments/${difficulty.type}`}>
            <div 
                className="card lg:card-side w-full overflow-x-auto bg-base-100 shadow-xl"
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
       </div>
       <div className="max-w-6xl mx-auto">
       <MeetingPlatform></MeetingPlatform>
       </div>
       <div className="max-w-xl mx-auto my-2">
        <FAQ></FAQ>
       </div>
      </div>
    );
};

export default Home;