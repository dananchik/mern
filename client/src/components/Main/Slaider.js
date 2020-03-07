import React, {Component} from "react";
import "../../css/Slaider.css";
import InputElem from "./InputElem";

class Slaider extends Component {
    slaids = ['31.png', "32.png","33.jpg","34.png"];

    constructor(props) {
        super(props);
        this.state = {
            lengthImageMass: this.slaids.length - 1,
            idImage: 0
        };
        this.ChangeSlaiderHandler = this.ChangeSlaiderHandler.bind(this);
        this.NextImage = this.NextImage.bind(this)
    }

    ChangeSlaiderHandler(e) {
        this.setState({
            idImage: e.target.value
        })
    }


    NextImage() {

        this.setState((state) => {
            return {idImage: (state.idImage + 1) % this.slaids.length};
        });
        let input = document.getElementById("input-" + this.state.idImage);
        input.click();
    }

    componentDidMount() {
        console.log("hello");
        setInterval(this.NextImage, 10000);

    }

    render() {
        return (
            <div className="slaider">
                <img src={process.env.PUBLIC_URL + "/img/" + this.slaids[this.state.idImage]} alt=""/>
                <div className="navigation">

                    <InputElem item_value="0" handlerChange={this.ChangeSlaiderHandler} id="input-0"/>
                    <InputElem item_value="1" handlerChange={this.ChangeSlaiderHandler} id="input-1"/>
                    <InputElem item_value="2" handlerChange={this.ChangeSlaiderHandler} id="input-2"/>
                    <InputElem item_value="3" handlerChange={this.ChangeSlaiderHandler} id="input-3"/>
                </div>
            </div>
        )
    }
}

export default Slaider