import React, {Component} from "react";
import "../../css/Main.css"
import Slaider from "./Slaider";

class Main extends Component {
    render() {
        return (
            <section>
                <div className="main">
                    <div className="first-block">
                        <div className="first-block-content">
                            <i className="fa fa-heart"></i>
                            <h6>Самые свежие новости на любой вкус для наших любимых читателей каждый день!</h6>
                        </div>
                        <div className="first-block-content">
                            <i className="fa fa-envelope"></i>
                            <h6>Доступная рассылка новостей по почте.напишите свой email в форме снизу и получайте свежие новости каждую неделю!</h6>
                        </div>
                        <div className="first-block-content">
                            <i className="fa fa-users"></i>
                            <h6>Возможность написать нам о том о чем другие молчат,возможно ваша новость сколыхнет общество!</h6>
                        </div>
                    </div>
                    <Slaider/>
                </div>
            </section>
        )
    }
}

export default Main
