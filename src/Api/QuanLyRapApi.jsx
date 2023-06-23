import { BaseApi, GROUP_ID } from "./BaseApi";
class QuanLyRap extends BaseApi {
    getTheaterSystem = () => {
        return this.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
    };
    layThongTinLichChieu = (data) => {
        return this.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${data}`);
    };
}

export const quanLyRap = new QuanLyRap();
