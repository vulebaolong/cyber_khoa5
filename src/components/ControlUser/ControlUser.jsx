import { Avatar, Popover, Typography } from "antd";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { TOKEN, USER_LOGIN } from "../../Api/BaseApi";
import { dangNhapREDU } from "../../redux/slices/QuanLyNguoiDungSlice";
import { history } from "../../App";
const { Text } = Typography;
function ControlUser(props) {
    const dispatch = useDispatch();
    const { t } = props;
    const [open, setOpen] = useState(false);
    const { userLogin } = useSelector((state) => state.QuanLyNguoiDungSlice);
    const handleOnClick = () => {
        localStorage.removeItem(USER_LOGIN);
        localStorage.removeItem(TOKEN);
        dispatch(dangNhapREDU({}));
        history.navigate("/");
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    const renderContentLogin = () => {
        return (
            <div className="space-y-2">
                <div className="space-x-2 px-2 py-3 rounded hover:bg-gray-500 w-full hover:text-slate-200 text-slate-200 cursor-pointer">
                    <NavLink to="/profile" className="flex items-center gap-2">
                        <Avatar src={`https://picsum.photos/200`} size={40} />
                        <Text className="font-semibold text-xl">{userLogin.hoTen}</Text>
                    </NavLink>
                </div>
                <div className="">
                    <button
                        onClick={() => {
                            handleOnClick();
                        }}
                        className="flex items-center gap-2 px-2 py-3 font-semibold text-xl rounded hover:bg-gray-500 w-full hover:text-slate-200 text-slate-200"
                    >
                        <div className=" flex items-center justify-center rounded-full bg-slate-600 w-10 h-10">
                            <i className="fa-solid fa-right-from-bracket m-0"></i>
                        </div>
                        <span>Đăng xuất</span>
                    </button>
                </div>
            </div>
        );
    };
    if (_.isEmpty(userLogin)) {
        return (
            <div className="flex">
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <NavLink
                        to="/login"
                        className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent "
                    >
                        <button className="self-center px-8 py-3 rounded">
                            {t("Đăng nhập")}
                        </button>
                    </NavLink>
                    <NavLink to="/signin">
                        <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                            {t("Đăng ký")}
                        </button>
                    </NavLink>
                </div>
            </div>
        );
    }
    if (!_.isEmpty(userLogin)) {
        return (
            <div className="flex items-center gap-2 ">
                <Popover
                    placement="bottomRight"
                    content={renderContentLogin()}
                    trigger="click"
                    className="cursor-pointer"
                    open={open}
                    onOpenChange={handleOpenChange}
                >
                    <Avatar src={`https://picsum.photos/200`} size={40} />
                </Popover>
            </div>
        );
    }
}
export default ControlUser;
