import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import axios from 'axios';


const DeleteKweet = () => {

  const { getIdTokenClaims } = useAuth0();
  var idTokenRaw = "";

  const kweetstate = {
    id: 0,
  };

  const getUserToken = async () => { 
    const idToken = await getIdTokenClaims();
    idTokenRaw = idToken.__raw;
    console.log(idTokenRaw);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.delete(`http://localhost:7000/kweet-api/kweet/${kweetstate.id}`,{
      headers: {
        'Authorization': `Bearer ${idTokenRaw}`
      }
    }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const handleChange = (event) => {
    kweetstate.id = event.target.value
    console.log(kweetstate.id);
    getUserToken()
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Kweet id to delete:
            <input type="text" name="text" onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default DeleteKweet;
