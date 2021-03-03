/* eslint-disable import/no-anonymous-default-export */
//dependencies
import Axios from "axios";

//this makes the API call to retrieve 20 users
export default {
    search: function () {
        return Axios.get("https://randomuser.me/api/?results=20&nat=us");
    },
};