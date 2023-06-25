import { Button } from "antd";

function Info() {
    return (
        <div className="h-screen flex flex-col ">
            <div className="p-5 flex flex-col justify-between flex-1">
                <div className="">
                    <h3 className="text-4xl font-bold text-center text-green-400 m-0">
                        0 đ
                    </h3>
                    <hr className="border-gray-500 my-5" />
                    <p class="">KẺ ĐỘC HÀNH</p>
                    <p>BHD Star Cineplex - Bitexco</p>
                    <p>Thứ năm 01/01/1970 - 08:01 - Rạp 1</p>
                    <hr className="border-gray-500 my-5" />

                    <div className="flex justify-between">
                        <span>Ghế</span>
                        <span className="font-bold  text-green-400">0 đ</span>
                    </div>
                    <hr className="border-gray-500 my-5" />
                    <div className="space-y-2">
                        <label className="text-sm">E-mail</label>
                        <p className="">vulebaolong</p>
                    </div>
                    <hr className="border-gray-500 my-5" />
                    <div className="space-y-2">
                        <label className="text-sm">Phone</label>
                        <p className="">123456789</p>
                    </div>
                    <hr className="border-gray-500 my-5" />
                    <div className="flex justify-between items-center">
                        <div className="space-y-2 ">
                            <label className="text-sm">Mã giảm giá</label>
                            <p className="">Tạm thời không áp dụng</p>
                        </div>
                        <Button type="primary" disabled>
                            Áp dụng
                        </Button>
                    </div>
                    <hr className="border-gray-500 my-5" />
                    <div className="space-y-2">
                        <label className="text-sm">Hình thức thanh toán</label>
                        <p className="text-red-500">Vui lòng chọn ghế</p>
                    </div>
                </div>
                <div className="text-center">
                    <i className="fa-solid fa-circle-exclamation text-red-500"></i>
                    <span> Vé đã mua không thể đổi hoặc hoàn tiền</span>
                    <p>
                        Mã vé sẽ được gửi qua tin nhắn{" "}
                        <span className="text-red-500">ZMS</span> (tin nhắn Zalo) và{" "}
                        <span className="text-red-500">Email</span> đã nhập.
                    </p>
                </div>
            </div>
            <div className="p-2">
                <Button type="primary" block className="bg-blue-400 h-20">
                    Primary
                </Button>
            </div>
        </div>
    );
}
export default Info;
