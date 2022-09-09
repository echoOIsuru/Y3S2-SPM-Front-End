import axios from "axios";

const URL = "http://localhost:8090/api/v1/"

const addNewUser = (data) => {
    return axios.post(URL + "user_um", data)
}

const getAllUsers = () => {
    return axios.get(URL + "all_users_um")
}

const loginUser = (data) => {
    return axios.post(URL + "user_validate", data)
}

export default { addNewUser, getAllUsers, loginUser }