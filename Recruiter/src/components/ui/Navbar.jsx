import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const { user } = useSelector((state) => state.profile); 
const apiUrl = "http://localhost:4000";
  const handleLogout = async () => {
    try {
      console.log(apiUrl);

      const response = await fetch(`${apiUrl}/api/auth/logout`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        
        },
        
     
      });

      if (response.ok) {
      
        console.log("Logout successful...");
 
        localStorage.removeItem("token"); 
        localStorage.removeItem("user"); 

        window.location.href = "/auth/login";
      } else {
        const errorData = await response.json();
        console.error("Error logging out:", errorData.message);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white hover:text-yellow-400 text-lg font-semibold">
          Home
        </Link>
        <ul className="flex space-x-4">
          {!user ? (
            <>
              <li>
                <Link to="/auth/login" className="text-white hover:text-yellow-400 ">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/auth/signup" className="text-white hover:text-yellow-400 ">
                  Signup
                </Link>
              </li>
            </>
          ) : (
            <>
            <li>
            <Link to="/search" className="text-white hover:text-yellow-400">
                  Search
                </Link>
            </li>
             
              <li>
                <button  className="text-white hover:text-yellow-400" onClick={() => {
                  handleLogout();
                }}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
