import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div>
            <div className="mx-auto flex justify-center flex-col md:flex-row">
            <img className="w-[250px] h-[250px]" src="https://i.ibb.co/z8rw6ht/Blue-Elegant-Concept-Foundation-Logo-removebg-preview.png" alt="" />
             </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;