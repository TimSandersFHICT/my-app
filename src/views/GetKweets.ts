import {Component, default as React} from "react";
import userRepository from "../components/api/userRepository";
import User from "../models/User";



class GetKweets extends Component{

 
    state = {
        user:null,
    }

  

    async componentDidMount(): Promise<void> {
        //let userrepository = new userRepository();
        //let id = this.Id;
        //let user:User = await userrepository.getProfile(id);
        //this.setState({user:user});
        return;
    }
}

export default GetKweets;