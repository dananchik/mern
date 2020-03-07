import React from "react";
import LabelForm from "./LabelForm";
import InputForm from "./InputForm";

const ItemForm = (props)=>{
    return <div className="item-form">
        <LabelForm HtmlFor={props.name} LabelText={props.LabelText}></LabelForm>
        <InputForm handlerUpdate={props.handlerUpdate} type={props.type} name={props.name} />
    </div>
};

export default ItemForm