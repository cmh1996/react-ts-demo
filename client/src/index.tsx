import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

import "./static/css/common.scss";
import APP from "@containers/App";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={APP} />
        </Router>
    </Provider>,
    document.getElementById("app")
);
