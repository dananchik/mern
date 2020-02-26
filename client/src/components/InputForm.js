import React, {Component} from "react";

class Input extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value:this.props.value
        }
    }


    render() {
        return (
            <input type={this.props.type} name={this.props.name} onChange={this.props.handlerUpdate} />
        )
    }
}

export default Input