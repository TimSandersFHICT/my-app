import React, { useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import axios from 'axios';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { getIdTokenClaims } = useAuth0();

  const PostNewUser = async () => {
    const idToken = await getIdTokenClaims();
  
    const userstate = {
      id: "",
      username: "",
      email: "",
      bio: "You still need to edit your bio!",
      location: "",
      createdAt: ""
    };
  
    userstate.email = idToken.email;
    userstate.id = idToken.sub;
    userstate.username = idToken.name;
    userstate.location = idToken.locale;
    userstate.createdAt = Date.UTC;
    axios.get(`http://localhost:7000/user-api/user/` + userstate.id, {
      headers: {
        'Authorization': `Bearer ${idToken.__raw}`
      }
    })
    .then(res => {
        //console.log("IDToken: " + idToken.name + " | response name: " + res.data.username)
        //Check if username is still the same as last time
        if(res.data.username === idToken.name)
        {
          console.log("Username hasn't changed");
        }
        else{
          console.log("Username has changed");
          userstate.username = idToken.name;
          axios.put(`http://localhost:7000/user-api/user/` + userstate.id, userstate, {
            headers: {
              'Authorization': `Bearer ${idToken.__raw}`
            }
          })
        }
    })
    .catch(res => {
        axios.post(`http://localhost:7000/user-api/user`, userstate, {
          headers: {
            'Authorization': `Bearer ${idToken.__raw}`
          }
        }).then((res) => {
            console.log(res);
            console.log(res.data);
          });
    });
  };
  
  useEffect(() => {
    // If authentication is complete, save if new user
    if(isAuthenticated)
    {
      PostNewUser()
    }
  });
 

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})} >Log in</button>
      )}
      {isAuthenticated && <button onClick={() => logout()} >Log out</button>}
      {isAuthenticated && (
        <span>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/profile">Profile</Link>&nbsp;
          <Link to="/kweet-api">Kweet API</Link>&nbsp;
          <Link to="/user-api">User API</Link>&nbsp;
          <Link to="/post-kweet">Post Kweet</Link>&nbsp;
          <Link to="/delete-kweet">Delete Kweet</Link>&nbsp;
          <Link to="/delete-user">Delete User</Link>&nbsp;
        </span>
      )}
    </div>
  );
};

export default NavBar;
