import Communicator from "./communicator";
import User from "../../models/User";


class userRepository
{
    
    communicator:Communicator;

    constructor()
    {
         
        this.communicator = new Communicator();
        //Changes base url in communicator
        this.communicator.axios.defaults.baseURL="http://localhost:7000/";
    }

    public async getProfile(id:string)
    {
        let response = await this.communicator.axios.get("api/users/"+id);
        return response.data as User;
    }

}
export default userRepository;