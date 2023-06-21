import { STATE_CODE } from "../../Api/BaseApi";
import { quanLyPhim } from "../../Api/quanLyPhim";
import { GET_LIST_BANNER } from "../constants/QuanLyPhimContants";

export const getListBannerAction = (data) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhim.getListBanner();
            console.log({ data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch({
                type: GET_LIST_BANNER,
                payload: data.content,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
