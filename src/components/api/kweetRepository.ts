import Communicator from "./communicator";
import Kweet from "../../models/Kweet";

class kweetRepository
{

    communicator:Communicator;

    constructor()
    {
        this.communicator = new Communicator();
        this.communicator.axios.defaults.baseURL="http://localhost:7000/";
    }

    public async getKweet(id:string)
    {
        let response = await this.communicator.axios.get("kweet-api/kweet/"+id);
        return response.data as Kweet;
    }

    public async postKweet(userID:number, text:string)
    {
        return await this.communicator.axios.post("kweet-api/kweet/",
            {
                UserID:userID,
                text:text
            }
            );
    }
}
export default kweetRepository;