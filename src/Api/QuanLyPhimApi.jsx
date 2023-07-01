import { BaseApi, GROUP_ID } from "./BaseApi";
class QuanLyPhimApi extends BaseApi {
    getListBanner = () => {
        return this.get(`/QuanLyPhim/LayDanhSachBanner`);
    };
    getListFilms = () => {
        return this.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
    };
    getOneFilm = (data) => {
        return this.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${data}`);
    };
    addFilm = (data) => {
        return this.post(data, `/QuanLyPhim/ThemPhimUploadHinh`);
    };
    getInfoFilm = (data) => {
        return this.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${data}`);
    };
    editFilm = (data) => {
        return this.post(data, `/QuanLyPhim/CapNhatPhimUpload`);
    };
    deleteFilm = (data) => {
        return this.delete(`/QuanLyPhim/XoaPhim?MaPhim=${data}`);
    };
}

export const quanLyPhimApi = new QuanLyPhimApi();
