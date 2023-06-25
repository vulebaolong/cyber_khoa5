import { BaseApi, GROUP_ID } from "./BaseApi";
class QuanLyNguoiDungApi extends BaseApi {
    dangNhap = (data) => {
        return this.post(data, `/QuanLyNguoiDung/DangNhap`);
    };
}

export const quanLyNguoiDung = new QuanLyNguoiDungApi();
