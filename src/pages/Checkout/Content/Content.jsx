import style from "./Content.module.css";

function Content() {
    return (
        <div>
            <div className={`${style.screen}`}>
                <div className="flex justify-center items-center">
                    <p className="text-center font-bold">Màn Hình</p>
                </div>
            </div>
        </div>
    );
}
export default Content;
