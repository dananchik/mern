import React, {Component} from "react";

class LabelElem extends Component {
    render() {
        return (<label className="bar" htmlFor={this.props.HtmlFor}></label>)

    }
}

export default LabelElem