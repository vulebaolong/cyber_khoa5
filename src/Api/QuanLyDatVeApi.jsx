import { BaseApi } from "./BaseApi";
class QuanLyDatVeApi extends BaseApi {
    layChiTietPhongVe = (data) => {
        //data => MaLichChieu
        return this.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${data}`);
    };
    datVe = (data) => {
        // data {
        //     "maLichChieu": 0,
        //     "danhSachVe": [
        //       {
        //         "maGhe": 0,
        //         "giaVe": 0
        //       }
        //     ]
        //   }
        return this.post(data, `/QuanLyDatVe/DatVe`);
    };
}

export const quanLyDatVeApi = new QuanLyDatVeApi();
