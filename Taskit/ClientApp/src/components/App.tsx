import React from "react"
import {Blog} from "./Blog";
import {Todo} from "./Todo";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/Task">
                    <Todo />
                </Route>
                <Route path="/Blog">
                    <Blog />
                </Route>
            </Switch>
        </Router>
    );
}