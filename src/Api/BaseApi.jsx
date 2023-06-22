// component
// https://tailblocks.cc/
// https://mambaui.com/
// https://react-slick.neostack.com/

import axios from "axios";

// https://movieapi.cyberlearn.vn/swagger/index.html

const DOMAIN = "https://movieapi.cyberlearn.vn/api";
export const TOKEN = "access_token";
export const USER_LOGIN = "USER_LOGIN";
export const STATE_CODE = { SUCCESS: 200 };
export const GROUP_ID = "GP01";

export class BaseApi {
    get = (url) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "GET",
            headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
        });
    };
    put = (data, url) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "PUT",
            data,
            headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
        });
    };
    post = (data, url) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "POST",
            data,
            headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
        });
    };
    delete = (url) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "DELETE",
            headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
        });
    };
}
