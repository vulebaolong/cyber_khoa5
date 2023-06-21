import { Radio, Space, Tabs } from "antd";
import { useState } from "react";

function HomeMenu() {
    const changeTabPosition = (e) => {
        setTabPosition(e.target.value);
    };
    const contentTab = (
        <img
            className="rounded-full w-12"
            src="https://picsum.photos/48"
            width={50}
            alt=""
        />
    );
    return (
        <>
            <Tabs
                tabPosition="left"
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: contentTab,
                        key: id,
                        children: `Content of Tab ${id}`,
                    };
                })}
            />
        </>
    );
}
export default HomeMenu;
