import React, {Component} from "react";

const InputElem = (props) => {
    return <input type="radio" value={props.item_value} onChange={props.handlerChange} id={props.id} name="r"/>
};
export default InputElem