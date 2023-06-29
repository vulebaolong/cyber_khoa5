import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { dangNhapActionMID } from "../../redux/slices/QuanLyNguoiDungSlice";

function Login() {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        getValues,
        reset,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            taiKhoan: "vulebaolong",
            matKhau: "123456789",
        },
    });
    // console.log(getValues());
    const onSubmit = (data) => {
        console.log("submit", data);
        dispatch(dangNhapActionMID(data));
    };
    return (
        <div className="lg:w-1/2 xl:max-w-screen-sm">
            {/* Header login */}
            <div className="py-12   flex justify-center lg:justify-start lg:px-12">
                <NavLink to="/home" className="cursor-pointer flex items-center">
                    <div>
                        <svg
                            className="w-10 text-indigo-500"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Layer_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 225 225"
                            style={{
                                enableBackground: "new 0 0 225 225",
                            }}
                            xmlSpace="preserve"
                        >
                            <style
                                type="text/css"
                                dangerouslySetInnerHTML={{
                                    __html: "\n                            .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                        ",
                                }}
                            />
                            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                                <g>
                                    <path
                                        id="Layer0_0_1_STROKES"
                                        className="st0"
                                        d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="text-2xl  tracking-wide ml-2 font-semibold">VLBL</div>
                </NavLink>
            </div>
            {/* Content Login */}
            <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2
                    className="text-center text-4xl  font-display font-semibold lg:text-left xl:text-5xl
      xl:text-bold"
                >
                    Đăng nhập
                </h2>
                <div className="mt-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email Address */}
                        <div>
                            <div className="text-sm font-bold  tracking-wide">
                                Tài khoản
                            </div>
                            <input
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900"
                                placeholder="tài khoản"
                                {...register("taiKhoan")}
                            />
                        </div>

                        {/* Password */}
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold  tracking-wide">
                                    Mật khẩu
                                </div>
                                <div>
                                    <a
                                        className="text-xs font-display font-semibold  hover:text-indigo-800
                          cursor-pointer"
                                    >
                                        Quên mật khẩu?
                                    </a>
                                </div>
                            </div>
                            <input
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900"
                                placeholder="Enter your password"
                                {...register("matKhau")}
                            />
                        </div>
                        <div className="mt-10">
                            <button
                                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                  shadow-lg"
                            >
                                Đăng nhập
                            </button>
                        </div>
                    </form>
                    <div className="mt-12 text-sm font-display font-semibold  text-center">
                        Bạn chưa có tài khoản?{" "}
                        <NavLink
                            to="/register"
                            className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                        >
                            Đăng nhập
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
