import React from 'react';
import axios from 'axios';
import userRepository from '../components/api/userRepository';




export default class PostKweet extends React.Component {
  userRepo = new userRepository();
  
  state = {
    userid: "",
    text: "",
    created: Date.now.json,
  }
 
  handleChange = event => {
    //console.log(event.target.value)
     this.setState({ text: event.target.value}, () => console.log(this.state) );
     //this.setState({ userId: this.userId})
     
  }

  handleSubmit = event => {
    event.preventDefault();
    const kweet = {
      userid: this.state.userid,
      text: this.state.text,
      created: this.state.created
    };
    
    axios.post(`http://localhost:7000/kweet-api/kweet`, kweet )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Kweet content:
            <input type="text" name="text" onChange={this.handleChange}/>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}