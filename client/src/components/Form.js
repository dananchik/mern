import React, {Component} from "react";
import InputForm from "./InputForm"
import TextArea from "./TextArea";
class Form extends Component{
    constructor(params) {
        super(params);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleSubmit(event){
        var data = {
            title: this.state.title,
            content: this.state.content
        };
        fetch('http://localhost:5000/api/posts',{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        });
        event.preventDefault();
        console.log(this.state)
    }
    handleUpdate(event){
        const target = event.target;
        const name = target.name;
        this.setState({[name]: event.target.value});
    }
    render() {
        return (
            <form method={this.props.method} onSubmit={this.handleSubmit}>
                <InputForm type="text" name="title" handlerUpdate={this.handleUpdate} />
                <TextArea name="content" rows="10" cols="40" handlerUpdate={this.handleUpdate} />
                <button type="submit" name="send">Отправить</button>
            </form>
        )
    }
}

export default Form