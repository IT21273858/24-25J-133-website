import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-[#9370DBFF] text-white p-4 shadow-lg w-screen">
      <div className="flex justify-between items-center mx-auto">
        <h1 className="text-xl font-bold text-left">Dyslexia Support App</h1>
        <ul className="flex space-x-4 text-black">
          <li><Link to="/" className="hover:underline text-black! font-serif">Home</Link></li>
          <li><Link to="/domain" className="hover:underline text-black! font-serif">Domain</Link></li>
          <li><Link to="/milestones" className="hover:underline text-black! font-serif">Milestones</Link></li>
          <li><Link to="/documents" className="hover:underline text-black! font-serif">Documents</Link></li>
          <li><Link to="/presentations" className="hover:underline text-black! font-serif">Presentations</Link></li>
          <li><Link to="/about" className="hover:underline text-black! font-serif">About Us</Link></li>
          <li><Link to="/contact" className="hover:underline text-black! font-serif">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
