import Axios, { AxiosInstance } from "axios";

class Communicator{
    public _axios: AxiosInstance;

    constructor()
    {
        this._axios = Axios.create({
            baseURL:"http://localhost:7000/",
            headers: {
                common: {        // can be common or any other method
                  Authorization: "Bearer"
                }
              }
        })
    }

    get axios(): AxiosInstance {
        return this._axios;
    }

}
export default Communicator;