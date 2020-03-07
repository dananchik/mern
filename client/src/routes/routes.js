import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import Main from "../components/Main/Main";
import About from "../components/About/About";
import Posts from "../components/Posts/Posts";
import Auth from "../components/User/Auth";
import Reg from "../components/User/Reg";
import Admin from "../components/Admin/Admin";

export const useRoutes = isAuth => {
    if (isAuth) {
      return  <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/news" component={Posts}/>
            <Route exact path="/auth" component={Auth}/>
            <Route exact path="/reg" component={Reg}/>
            <Route exact path="/admin" component={Admin}/>
        </Switch>
    } else {
      return  <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/news" component={Posts}/>
            <Route exact path="/auth" component={Auth}/>
            <Route exact path="/reg" component={Reg}/>
            <Redirect to="/"/>
        </Switch>
    }
};