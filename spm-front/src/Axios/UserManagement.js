import axios from "axios";

const URL = "http://localhost:8090/api/v1/"

const addNewUser = (data) => {
    return axios.post(URL + "user_um", data)
}

export default { addNewUser }