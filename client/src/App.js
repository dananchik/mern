import React from 'react';
import {Route, BrowserRouter} from "react-router-dom"
import './App.css';
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
import {useRoutes} from "./routes/routes";


function App() {
    const routes = useRoutes(false)
    return (
        <BrowserRouter>
            <div className="App">
                <AppNavbar/>
                {routes}
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
