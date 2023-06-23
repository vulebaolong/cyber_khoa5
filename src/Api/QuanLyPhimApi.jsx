import { BaseApi, GROUP_ID } from "./BaseApi";
class QuanLyPhim extends BaseApi {
    getListBanner = () => {
        return this.get(`/QuanLyPhim/LayDanhSachBanner`);
    };
    getListFilms = () => {
        return this.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
    };
    getOneFilm = (data) => {
        return this.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${data}`);
    };
}

export const quanLyPhim = new QuanLyPhim();
