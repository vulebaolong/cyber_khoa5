import { USER_LOGIN } from "../../Api/BaseApi";
import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { NavLink } from "react-router-dom";
import ControlUser from "../../components/ControlUser/ControlUser";
import { Footer } from "antd/es/layout/layout";
import { history } from "../../App";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setKeyREDU } from "../../redux/slices/MenuAdminSlice";
const { Header, Sider, Content } = Layout;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem("Quản lý phim", "/admin/film", <MailOutlined />, [
        getItem("Danh sách phim", "/admin/film/listfilm"),
        getItem("Thêm phim", "/admin/film/addfilm"),
        getItem("Chỉnh sửa phim", "/admin/film/editfilm"),
    ]),
    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
        getItem("Option 9", "9"),
        getItem("Option 10", "10"),
        getItem("Submenu", "sub3", null, [
            getItem("Option 11", "11"),
            getItem("Option 12", "12"),
        ]),
    ]),
    getItem("Option 14", "14", <PieChartOutlined />),
];

function AdminLayout() {
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const defaultSelectedKeys = location.pathname;
    const defaultOpenKeys = () => {
        const item = location.pathname.split("/");
        return `/${item[1]}/${item[2]}`;
    };

    const { selectedKeys, openKeys } = useSelector((state) => state.MenuAdminSlice);

    useEffect(() => {
        if (!localStorage.getItem(USER_LOGIN)) {
            return history.navigate("/login");
        }
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const onClick = (e) => {
        console.log(e.keyPath);
        const selectedKeys = e.keyPath[0];
        const openKeys = e.keyPath[1];
        dispatch(setKeyREDU({ selectedKeys, openKeys }));
        history.navigate(e.key);
    };
    const createClassLink = ({ isActive }) => {
        const linkActive = `dark:text-violet-400 dark:border-violet-400`;
        const link = `flex items-center px-4 -mb-1 border-b-2 dark:border-transparent`;
        return isActive ? `${link} ${linkActive}` : `${link}`;
    };
    return (
        <Layout className="min-h-screen">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <NavLink
                    to="/"
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Back to homepage"
                    className="flex items-center p-2 h-16 justify-center "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-8 h-8 dark:text-violet-400"
                    >
                        <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                        <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
                    </svg>
                </NavLink>
                <Menu
                    defaultSelectedKeys={[defaultSelectedKeys]}
                    defaultOpenKeys={[defaultOpenKeys()]}
                    selectedKeys={selectedKeys}
                    openKeys={openKeys}
                    onSelect={onClick}
                    theme="dark"
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                    className="flex items-center justify-between"
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className="flex items-center gap-2">
                        <ControlUser t={t} />

                        <NavLink to="/home" className={createClassLink}>
                            Home
                        </NavLink>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
                <Footer
                    style={{
                        textAlign: "center",
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}
export default AdminLayout;
