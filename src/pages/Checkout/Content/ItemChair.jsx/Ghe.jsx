import style from "../Content.module.css";

function Ghe({ type, note, onClick }) {
    const isIcon = type === "gheDuocMua";
    return (
        <div className="flex flex-col items-center gap-2" onClick={onClick}>
            <div className={`${style.ghe} ${style[type]}`}>
                <div>{isIcon && <i className="fa-solid fa-x"></i>}</div>
                <div></div>
            </div>
            {note && <p className="text-xs">{note}</p>}
        </div>
    );
}
export default Ghe;
