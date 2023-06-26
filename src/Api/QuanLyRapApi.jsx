import { BaseApi, GROUP_ID } from "./BaseApi";
class QuanLyRapApi extends BaseApi {
    getTheaterSystem = () => {
        return this.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
    };
    layThongTinLichChieu = (data) => {
        return this.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${data}`);
    };
}

export const quanLyRapApi = new QuanLyRapApi();
