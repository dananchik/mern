import React, {Component} from "react";

class Navig_Slaider_item extends Component{
    constructor(props) {
        super(props);
    }
    handler = (e)=>{
        console.log(e.target.value)
    };
    render() {
        return (
            <div>
                <label className="bar">
                    <input type="radio" value={this.props.item_value} onChange={this.props.handlerChange} name="r"/>
                </label>
            </div>
        )
    }
}

export default Navig_Slaider_item