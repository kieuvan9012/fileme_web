import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import FileManagement from "./components/FileManagement";
import MainPage from "./components/MainPage";
const Routes = () => (
    <Router>
        <div>
        <Route exact path='/' component={LoginPage} />
        <Route path='/Logon' component={LoginPage} />
        <Route path='/FileManagement' component={FileManagement} />
        <Route path='/MainPage' component={MainPage} />
        </div>
    </Router>
);

export default Routes;