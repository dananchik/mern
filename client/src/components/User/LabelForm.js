import React from "react";

const LabelForm = (props)=>{
    return <label className="label-input" htmlFor={props.HtmlFor}>{props.LabelText}</label>
};

export default LabelForm