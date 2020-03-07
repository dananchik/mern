import React, {Component} from "react";
import "../../css/Form.css";
import ItemForm from "./ItemForm";
import {UseHttp} from "../../hooks/hook";



class Reg extends Component {
    constructor(params) {
        super(params);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.state =  {
            email: null,
            nickname: null,
            password:null
        }
    }

    handleSubmit(event) {
        console.log(this.state);
        const data = {
            email: this.state.email,
            nickname: this.state.nickname,
            password:this.state.password
        };


        const response = fetch("http://localhost:5000/api/auth/reg", {
            method: 'POST',
            body: JSON.stringify(data), headers:
                {'Accept': 'application/json', 'Content-Type': 'application/json',}
        }).then(response => {

            response.json().then(data => console.log(data.msg));
        });
        event.preventDefault();
    }

    handleUpdate(event) {
        const target = event.target;
        const name = target.name;
        this.setState({[name]: event.target.value});
        console.log(this.state)
    }

    render() {
        return (
            <section>
                <form  method="post" className="reg-form" onSubmit={this.handleSubmit}>
                    <img src={process.env.PUBLIC_URL + "/img/avatar.svg"} alt=""/>
                    <h2>Регистрация</h2>
                    <ItemForm type="text" name="email" LabelText="Email : "
                              handlerUpdate={this.handleUpdate}/>
                    <ItemForm type="text" name="nickname" LabelText="Nickname : "
                              handlerUpdate={this.handleUpdate}/>
                    <ItemForm type="text" name="password" LabelText="Password :"
                              handlerUpdate={this.handleUpdate}/>
                    <button type="submit" name="send">Отправить</button>
                </form>
            </section>
        )
    }
}

export default Reg