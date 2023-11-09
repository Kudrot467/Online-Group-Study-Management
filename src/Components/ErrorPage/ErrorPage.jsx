import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center flex flex-col justify-center items-center">
            <img className="w-full" src="https://i.ibb.co/pvtsYVW/notfound.png" alt="" />
            <Link to='/' className="text-6xl text-green-600 underline">Go Home</Link>
        </div>
    );
};

export default ErrorPage;