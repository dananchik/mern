import React from "react";

const InputForm = (props) => {
    return <input type={props.type} className="input-form" name={props.name} onChange={props.handlerUpdate} id={props.name}/>
};

export default InputForm