import React,{Component} from "react";

class TextArea extends Component{

    render() {
        return (
            <textarea name={this.props.name} cols={this.props.cols} rows={this.props.rows} onChange={this.props.handlerUpdate}></textarea>

        )
    }
}

export default TextArea