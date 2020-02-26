import React, {Component} from "react";
import "../css/AppNavbar.css";

class AppNavbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false
        };
    }

    toggle = ()=>{
        this.setState({
            isOpen:!this.state.isOpen
        });
    };
    componentDidMount() {
    }

    render() {
        return (<header>
            <div className="inner-width">
                <a href="#" className="logo"><img src={process.env.PUBLIC_URL + '/logo.png'} alt=""/></a>
               <i className="menu-toggle-btn fas fa-bars" onMouseDown={this.toggle}></i>
            </div>
            <nav className={this.state.isOpen ? "navigation-menu show":"navigation-menu hide"}>
                <a href="#"  > <i className="fas fa-home home"> </i> Главная </a>
                <a href="#"  > <i className="fas fa-align-left about"> </i> Новости </a>
                <a href="#"  > <i className="fab fa-buffer works"> </i> О нас </a>
                <a href="#"  > <i className="fas fa-users team"> </i> Популярные </a>
                <a href="#"  > <i className="fas fa-headset contact"> </i> Поддержка </a>
            </nav>

       </header>)
    }
}

export default AppNavbar;