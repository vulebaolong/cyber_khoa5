// https://tailblocks.cc/
// https://mambaui.com/

import axios from "axios";

// https://movieapi.cyberlearn.vn/swagger/index.html

const DOMAIN = "https://movieapi.cyberlearn.vn/api";
export const TOKEN = "access_token";
export const USER_LOGIN = "USER_LOGIN";

export const STATE_CODE = {
    SUCCESS: 200,
};

export class BaseApi {
    get = (url) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "GET",
        });
    };
}
