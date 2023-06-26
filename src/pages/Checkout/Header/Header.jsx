import { Avatar, Steps } from "antd";
const description = "This is a description.";
function Header() {
    return (
        <div
            style={{ boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)" }}
            className=" p-4 flex justify-between items-center"
        >
            <div className="">
                <Steps
                    current={1}
                    items={[
                        {
                            title: "Finished",
                            description,
                        },
                        {
                            title: "In Progress",
                            description,
                            subTitle: "Left 00:00:08",
                        },
                        {
                            title: "Waiting",
                            description,
                        },
                    ]}
                />
            </div>
            <div className="flex flex-col gap-2 items-center">
                <Avatar src={`https://picsum.photos/200`} size={40} />
                <p>VULEBAOLONG</p>
            </div>
        </div>
    );
}
export default Header;
