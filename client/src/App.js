import React from 'react';

import './App.css';
import Form from "./components/Form";
import {Route, BrowserRouter} from "react-router-dom"
import {createStore} from 'redux';
import Post from './components/Post';
import AppNavbar from "./components/AppNavbar";

//const store = createStore();

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <AppNavbar/>
                <Route path="/posts" component={Form}/>

                <Post/>
            </div>
        </BrowserRouter>
    );
}

export default App;
