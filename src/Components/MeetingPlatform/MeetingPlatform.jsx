import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const MeetingPlatform = () => {
  const [platforms, setPlatforms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/meetingPlatforms")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlatforms(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {platforms.map((platform) => (
        <div key={platform._id}>
          <div className="card lg:card-side w-full overflow-x-auto bg-base-100 shadow-xl">
            <figure className="h-[150px]">
              <img
                className="w-full h-full md:h-auto"
                src={platform.imageUrl}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#52BA5D]">
                Arrange a meeting with
              </h2>
              <NavLink
                className="bg-[#CB6CE6] text-white font-medium rounded-lg p-2"
                to={platform.joinLink}
              >
                {platform.title}
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetingPlatform;
