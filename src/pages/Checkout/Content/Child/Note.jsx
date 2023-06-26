import Ghe from "../ItemChair.jsx/Ghe";

function Note() {
    return (
        <div className="grid grid-cols-4 gap-2 mx-auto" style={{ width: "50%" }}>
            {/* Ghế thường */}
            <Ghe type="gheThuong" note="Ghế thường" />

            {/* Ghế Vip */}
            <Ghe type="gheVip" note="Ghế vip" />

            {/* Ghế đang chọn */}
            <Ghe type="gheDangChon" note="Ghế đang chọn" />

            {/* Ghế được mua */}
            <Ghe type="gheDuocMua" note="Ghế được mua" />
        </div>
    );
}
export default Note;
