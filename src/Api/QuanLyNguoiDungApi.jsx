import { BaseApi } from "./BaseApi";
class QuanLyNguoiDungApi extends BaseApi {
    dangNhap = (data) => {
        return this.post(data, `/QuanLyNguoiDung/DangNhap`);
    };
}

export const quanLyNguoiDungApi = new QuanLyNguoiDungApi();
