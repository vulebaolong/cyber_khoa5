import { BaseApi } from "./BaseApi";
class QuanLyPhim extends BaseApi {
    getListBanner = () => {
        return this.get(`/QuanLyPhim/LayDanhSachBanner`);
    };
}

export const quanLyPhim = new QuanLyPhim();
