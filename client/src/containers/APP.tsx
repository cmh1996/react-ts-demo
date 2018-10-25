import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Index from "./Index";
import User from "./User";

export default class App extends Component {
    public render() {
        return (
            <Router>
                <div className="App">
                    <Route exact={true} path="/" component={Index} />
                    <Route exact={true} path="/user" component={User} />
                </div>
            </Router>
        );
    }
}
