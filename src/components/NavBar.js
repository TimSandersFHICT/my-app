import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  
  useEffect(() => {
    // If authentication is complete, save if new user
  
  });
 

  return (
    <div>
        <span>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/profile">Profile</Link>&nbsp;
          <Link to="/kweet-api">Kweet API</Link>&nbsp;
          <Link to="/user-api">User API</Link>&nbsp;
          <Link to="/post-kweet">Post Kweet</Link>&nbsp;
          <Link to="/delete-kweet">Delete Kweet</Link>&nbsp;
          <Link to="/delete-user">Delete User</Link>&nbsp;
        </span>
    </div>
  );
};

export default NavBar;
