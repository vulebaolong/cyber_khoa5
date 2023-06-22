import { BaseApi, GROUP_ID } from "./BaseApi";
class QuanLyRap extends BaseApi {
    getTheaterSystem = () => {
        return this.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
    };
}

export const quanLyRap = new QuanLyRap();
