import React, {Component} from "react";
import "../../css/Main.css"

class Main extends Component {
    render() {
        return (
            <section>
                <div className="main-container">

                    <div className="gray-box">
                        <p className="company-name">Хацкеры!!!</p>
                        <form className="search-form" action="" method="get">
                        <input className="search-box" name="s" placeholder="Искать здесь..." type="search"/>
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                    </div>

                    <div className="cols">
                        <div className="left-col">

                            <div className="tags">
                                <h4>The most popular tags</h4>
                                <a href="#" className="tag">#tag</a>
                                <a href="#" className="tag">#tag</a>
                                <a href="#" className="tag">#tag</a>
                                <a href="#" className="tag">#tag</a>
                                <a href="#" className="tag">#tag</a>
                                <a href="#" className="tag">#tag</a>
                                <a href="#" className="tag">#tag</a>
                                <a href="#" className="tag">#tag</a>
                            </div>
                        </div>
                        <div className="right-col">
                            <div className="news-blog">
                                <div className="news">
                                    <img src={process.env.PUBLIC_URL + '/news.jpeg'} alt=""/>
                                    <h4>tittle</h4>

                                    <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores!
                                    </div>
                                    <div className="side-bar">
                                        <p className="date">
                                            publihed 20017.2.1
                                        </p>
                                        <a href="#" className="comments"> 13 comments</a>
                                    </div>
                                </div>
                                <div className="news">
                                    <img src={process.env.PUBLIC_URL + '/news.jpeg'} alt=""/>
                                    <h4>tittle</h4>

                                    <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores!
                                    </div>
                                    <div className="side-bar">
                                        <p className="date">
                                            publihed 20017.2.1
                                        </p>
                                        <a href="#" className="comments"> 13 comments</a>
                                    </div>
                                </div>
                                <div className="news">
                                    <img src={process.env.PUBLIC_URL + '/news.jpeg'} alt=""/>
                                    <h4>tittle</h4>

                                    <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores!
                                    </div>
                                    <div className="side-bar">
                                        <p className="date">
                                            publihed 20017.2.1
                                        </p>
                                        <a href="#" className="comments"> 13 comments</a>
                                    </div>
                                </div>
                                <div className="news">
                                    <img src={process.env.PUBLIC_URL + '/news.jpeg'} alt=""/>
                                    <h4>tittle</h4>

                                    <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores!
                                    </div>
                                    <div className="side-bar">
                                        <p className="date">
                                            publihed 20017.2.1
                                        </p>
                                        <a href="#" className="comments"> 13 comments</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </section>
        )
    }
}

export default Main
