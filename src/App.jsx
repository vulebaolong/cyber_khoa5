import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { createBrowserHistory } from "history";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export const history = createBrowserHistory();

createBrowserHistory;

function App() {
    return (
        <Router history={history}>
            <Switch>
                <HomeTemplate path="/home" exact Component={Home} />
                <HomeTemplate path="/contact" exact Component={Contact} />
                <HomeTemplate path="/new" exact Component={News} />
                <Route path="/login" exact Component={Login} />
                <Route path="/register" exact Component={Register} />
                <HomeTemplate path="/" exact Component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
