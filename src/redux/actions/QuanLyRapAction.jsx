import { STATE_CODE } from "../../Api/BaseApi";
import { quanLyRap } from "../../Api/QuanLyRapApi";
import { GET_THEATER_SYSTEM } from "../constants/QuanlyRapContants";

//getTheaterSystem
export const getTheaterSystem = (data) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyRap.getTheaterSystem();
            console.log("getTheaterSystem", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch({
                type: GET_THEATER_SYSTEM,
                payload: data.content,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
