import React from 'react';
import {Route, BrowserRouter} from "react-router-dom"

import './App.css';
import Posts from './components/Posts/Posts';
import AppNavbar from "./components/AppNavbar";
import Main from "./components/Main/Main"
import Footer from "./components/Footer";
import Reg from "./components/User/Reg";
import About from "./components/About/About";
import Admin from "./components/Admin/Admin";
import Auth from "./components/User/Auth";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <AppNavbar/>
                <Route exact path="/" component={Main}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/news" component={Posts}/>
                <Route exact path="/auth" component={Auth}/>
                <Route exact path="/reg" component={Reg}/>
                <Route exact path="/admin" component={Admin}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
