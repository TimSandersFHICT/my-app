import React from "react";
import axios from 'axios';


const DeleteUser = () => {



  const userstate = {
    id: 0,
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    axios.delete(window.location.origin + `/api/user/user/${userstate.id}`,
    ).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const handleChange = (event) => {
    userstate.id = event.target.value
    console.log(userstate.id);

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
