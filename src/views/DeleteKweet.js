import React from "react";
import axios from 'axios';


const DeleteKweet = () => {

  const kweetstate = {
    id: 0,
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.delete(window.location.origin + `/kweet-api/kweet/${kweetstate.id}`,
    ).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const handleChange = (event) => {
    kweetstate.id = event.target.value
    console.log(kweetstate.id);
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
