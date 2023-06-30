// component
// https://tailblocks.cc/
// https://mambaui.com/
// https://react-slick.neostack.com/
// https://movie-booking-project.vercel.app/
// https://mellow-stroopwafel-86c9e7.netlify.app/

// mới https://movienew.cybersoft.edu.vn/swagger/index.html => https://movienew.cybersoft.edu.vn/api
// cũ https://movieapi.cyberlearn.vn/swagger/index.html = > https://movieapi.cyberlearn.vn/api

import axios from "axios";

export const DOMAIN = "https://movieapi.cyberlearn.vn/api";
export const TOKEN = "accessToken";
export const USER_LOGIN = "USER_LOGIN";
export const STATE_CODE = { SUCCESS: 200 };
export const GROUP_ID = "GP00";
export const TOKEN_CYBER =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NCIsIkhldEhhblN0cmluZyI6IjA5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjA4MDAwMDAwMCIsIm5iZiI6MTY3MjQxOTYwMCwiZXhwIjoxNzAyMjI3NjAwfQ.P5fJSMdFWDXkAXi_Hm7kZhuXoxo6xtTzIno_q6kp38I";

const getUserLogin = () => {
    if (!JSON.parse(localStorage.getItem(USER_LOGIN))) return "";
    return JSON.parse(localStorage.getItem(USER_LOGIN))[TOKEN];
};
getUserLogin();
export class BaseApi {
    get = (url) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem(TOKEN))}`,
                TokenCybersoft: TOKEN_CYBER,
            },
        });
    };
    put = (data, url) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "PUT",
            data,
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem(TOKEN))}}`,
                TokenCybersoft: TOKEN_CYBER,
            },
        });
    };
    post = (data, url) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "POST",
            data,
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem(TOKEN))}`,
                TokenCybersoft: TOKEN_CYBER,
            },
        });
    };
    delete = (url) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem(TOKEN))}`,
                TokenCybersoft: TOKEN_CYBER,
            },
        });
    };
}
