import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import  userRepository from "../components/api/userRepository";
import axios from 'axios';


const PostKweetTest = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently } = useAuth0();
  const { getIdTokenClaims } = useAuth0();
  

  const kweetstate = {
    userid: "",
    username: "",
    text: "",
    created: Date.now.json,
  };

  const userstate = {
    id: "",
    username: "",
    email: "",
    bio: "You still need to edit your bio!",
    location: "",
    createdAt: ""
  };

  const getUserToken = async () => { 
    const idToken = await getIdTokenClaims();
    console.log(idToken);
    kweetstate.userid = idToken.sub;
    kweetstate.username = idToken.name;
  }

  const setUserState = async () => {
    const idToken = await getIdTokenClaims();
    userstate.email = idToken.email;
    userstate.id = idToken.sub;
    userstate.username = idToken.name;
    userstate.location = idToken.locale;
    userstate.createdAt = Date.now;
  }

  

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
        id: userstate.id,
        username: userstate.username,
        email: userstate.email,
        bio: userstate.bio,
        location: userstate.location,
        createdAt: userstate.createdAt
    };
    const kweet = {
      userid: kweetstate.userid,
      username: kweetstate.username,
      text: kweetstate.text,
      created: kweetstate.created,
    };

    axios.get(`http://localhost:7000/user-api/user/` + userstate.id)
    .then(res => {
        console.log("User already exists")
    })
   
    
    axios.post(`http://localhost:7000/kweet-api/kweet`, kweet).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const handleChange = (event) => {
    kweetstate.text = event.target.value
    getUserToken()
    setUserState()
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
