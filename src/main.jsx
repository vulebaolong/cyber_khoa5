import ReactDOM from "react-dom/client";
// antd
import "antd/dist/reset.css";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import { ConfigProvider, theme } from "antd";

// React slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DOMAIN } from "./Api/BaseApi.jsx";
// import * as signalR from "@aspnet/signalr";

// lắng nghe server
// export const connection = new signalR.HubConnectionBuilder()
//     .withUrl(`${DOMAIN}/DatVeHub`)
//     .configureLogging(signalR.LogLevel.Information)
//     .build();

// connection
//     .start()
//     .then(() => {
//         console.log("kết nối thành công");
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// Đa ngôn ngữ
import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ConfigProvider
        theme={{
            algorithm: theme.darkAlgorithm,
        }}
    >
        <Provider store={store}>
            <App />
        </Provider>
    </ConfigProvider>
);
