import React, {Component} from "react";
import "../css/Footer.css"
class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-container">
                    <div className="left">
                        <img src={process.env.PUBLIC_URL + '/logo.png'} alt=""/>
                        <div className="social-icons">
                            <a href=""><i className="fab fa-telegram"></i></a>
                            <a href=""><i className="fab fa-facebook"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                            <a href=""><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                    <div className="right">
                        <h1>Our News!!!</h1>
                        <p className="bord">enter you email to get new news!</p>
                        <form method="post" className="newsForm">
                            <input type="text" className="text-input" name="email" placeholder="enter your email"/>
                            <input type="submit" className="btn-submit"/>
                        </form>
                    </div>

                </div>

            </footer>
        )
    }
}

export default Footer