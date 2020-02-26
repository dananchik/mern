import React, {Component} from "react";
import "../css/AppNavbar.css"
import {
    Nav,
    Navbar
} from "reactstrap"


class AppNavbar extends Component{
    state = {
        isOpen:false
    };
    toggle = ()=>{
        this.setState({
            isOpen:!this.state.isOpen
        });
    };
    componentDidMount() {
    }

    render() {
        return (<nav className="main_nav">
            <button className="btn_menu"></button>
            <div className="menu">
                <li className="item">
                    <a href="#" className="linkItem">Главная</a>
                </li>
                <li className="item">
                    <a href="#" className="linkItem">Новости</a>
                </li>
                <li className="item">
                    <a href="#" className="linkItem">О нас</a>
                </li>
                <li className="item">
                    <a href="#" className="linkItem">Поддержка</a>
                </li>
            </div>

        </nav>)
    }
}

export default AppNavbar;