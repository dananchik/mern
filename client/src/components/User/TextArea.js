import React from "react";

const TextArea = (props)=>{
          return  <textarea name={props.name} cols={props.cols} rows={props.rows} onChange={props.handlerUpdate}></textarea>
};

export default TextArea