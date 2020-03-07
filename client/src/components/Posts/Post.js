import React, {Component} from 'react'

class Post extends Component {
    render() {
        return (
            <div className="post">
                <img src={process.env.PUBLIC_URL + "/img/32.png"} alt=""/>
                <h4>Путин ЛОХ!!!</h4>
                <div className="footer_post">
                    <span className="time">today,15:35</span>
                    <div className="comments">
                        <span><i className="fa fa-comments" aria-hidden="true"></i>13</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Post