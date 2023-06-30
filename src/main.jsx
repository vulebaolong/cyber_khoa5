import "./index.css";
import ReactDOM from "react-dom/client";
// antd
import App from "./App.jsx";
import "antd/dist/reset.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import { ConfigProvider, theme } from "antd";

// React slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Đa ngôn ngữ
import "./i18n.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ConfigProvider
        theme={{
            algorithm: theme.darkAlgorithm,
        }}
    >
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </ConfigProvider>
);
