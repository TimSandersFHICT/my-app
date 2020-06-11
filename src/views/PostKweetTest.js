import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import axios from 'axios';


const PostKweetTest = () => {

  const { getIdTokenClaims } = useAuth0();
  var idTokenRaw = "";

  const kweetstate = {
    userid: "",
    username: "",
    text: "",
    created: Date.now.json,
  };

  const getUserToken = async () => { 
    const idToken = await getIdTokenClaims();
    idTokenRaw = idToken.__raw;
    kweetstate.userid = idToken.sub;
    kweetstate.username = idToken.name;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const kweet = {
      userid: kweetstate.userid,
      username: kweetstate.username,
      text: kweetstate.text,
      created: kweetstate.created,
    };

    axios.post(`http://localhost:7000/kweet-api/kweet`, kweet,{
      headers: {
        'Authorization': `Bearer ${idTokenRaw}`
      }
    }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const handleChange = (event) => {
    kweetstate.text = event.target.value
    getUserToken()
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Kweet content:
            <input type="text" name="text" onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default PostKweetTest;
