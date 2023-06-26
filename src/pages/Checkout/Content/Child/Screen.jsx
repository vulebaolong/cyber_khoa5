import style from "../Content.module.css";

function Screen() {
    return (
        <div className={`${style.screen} `}>
            <div className="flex justify-center items-center">
                <p className="text-center font-bold">Màn Hình</p>
            </div>
        </div>
    );
}
export default Screen;
