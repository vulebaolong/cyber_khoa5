import Chair from "./Child/Chair";
import CountDown from "./Child/CountDown";
import Note from "./Child/Note";
import Screen from "./Child/Screen";

function Content() {
    return (
        <div className="px-40 mx-auto">
            <CountDown />
            <Screen />
            <Chair />
            <Note />
        </div>
    );
}
export default Content;
