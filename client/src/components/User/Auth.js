import React, {Component} from "react";
import "../../css/Form.css";
import ItemForm from "./ItemForm";


class Auth extends Component {
    constructor(params) {
        super(params);
        //    this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    // handleSubmit(event){
    //     var data = {
    //         title: this.state.title,
    //         content: this.state.content
    //     };
    //     fetch('http://localhost:5000/api/posts',{
    //         method:"POST",
    //         headers:{'Content-Type': 'application/json'},
    //         body:JSON.stringify(data)
    //     });
    //     event.preventDefault();
    //     console.log(this.state)
    // }
    handleUpdate(event) {
        const target = event.target;
        const name = target.name;
        this.setState({[name]: event.target.value});
    }

    render() {
        return (
            <section>
                <form method={this.props.method} className="reg-form" onSubmit={this.handleSubmit}>
                    <img src={process.env.PUBLIC_URL + "/img/avatar.svg"} alt=""/>
                    <h2>Вход</h2>
                    <ItemForm type="text" name="email" LabelText="Email : "
                              handlerUpdate={this.handleUpdate}/>
                    <ItemForm type="text" name="password" LabelText="Password :"
                              handlerUpdate={this.handleUpdate}/>
                    <button type="submit" name="send">Отправить</button>
                </form>
            </section>
        )
    }
}

export default Auth