import React from "react";
import axios from 'axios';


const PostKweetTest = () => {

  const kweetstate = {
    userid: "",
    username: "",
    text: "",
    created: Date.now.json,
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const kweet = {
      userid: kweetstate.userid,
      username: kweetstate.username,
      text: kweetstate.text,
      created: kweetstate.created,
    };

    axios.post(window.location.origin + `/api/kweet/kweet`, kweet,
    ).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const handleChange = (event) => {
    kweetstate.text = event.target.value
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
