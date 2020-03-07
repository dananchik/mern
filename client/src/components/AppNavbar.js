import React, {Component} from "react";
import "../css/AppNavbar.css";

class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isOpenMenuUser: false
        };
    }

    toggleMenu = () => {
        this.setState({
            isOpenMenu: !this.state.isOpenMenu
        });
    };
    toggleUser = () => {
        this.setState({
            isOpenMenuUser: !this.state.isOpenMenuUser
        });
    };
    componentDidMount() {
    }

    render() {
        return (<header>
            <div className="inner-width">
                <a href="/" className="logo"><img src={process.env.PUBLIC_URL + '/logo.png'} alt=""/></a>
                <i className="menu-toggle-btn fas fa-bars" onMouseDown={this.toggleMenu}></i>

            </div>
            <div className="user">
            <i className="far fa-user" onMouseDown={this.toggleUser}></i>
            <ul className={this.state.isOpenMenuUser ? "user-menu show-user-menu":"user-menu hide-user-menu"}>
                <li><a href="/auth" className="enter">Вход</a></li>
                <li><i className="fas fa-user-plus"></i><a href="/reg">Создать учетную запись</a></li>
            </ul>
        </div>
            <nav className={this.state.isOpenMenu ? "navigation-menu show" : "navigation-menu hide"}>

                <a href="/"> <i className="fas fa-home home"> </i> Главная </a>
                <a href="/news"> <i className="fas fa-align-left about"> </i> Новости </a>
                <a href="/about"> <i className="fab fa-buffer works"> </i> О нас </a>
                <a href="/popul"> <i className="fas fa-users team"> </i> Популярные </a>
                <a href="/help"> <i className="fas fa-headset contact"> </i> Поддержка </a>


            </nav>

        </header>)
    }
}

export default AppNavbar;