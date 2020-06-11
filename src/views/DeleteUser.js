import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import axios from 'axios';


const DeleteUser = () => {

  const { getIdTokenClaims } = useAuth0();
  var idTokenRaw = "";

  const userstate = {
    id: 0,
  };

  const getUserToken = async () => { 
    const idToken = await getIdTokenClaims();
    idTokenRaw = idToken.__raw;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.delete(`http://localhost:7000/user-api/user/${userstate.id}`,{
      headers: {
        'Authorization': `Bearer ${idTokenRaw}`
      }
    }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const handleChange = (event) => {
    userstate.id = event.target.value
    console.log(userstate.id);
    getUserToken()
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            User id to delete:
            <input type="text" name="text" onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default DeleteUser;
