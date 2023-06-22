import { BaseApi, GROUP_ID } from "./BaseApi";
class QuanLyPhim extends BaseApi {
    getListBanner = () => {
        return this.get(`/QuanLyPhim/LayDanhSachBanner`);
    };
    getListFilms = () => {
        return this.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
    };
}

export const quanLyPhim = new QuanLyPhim();
