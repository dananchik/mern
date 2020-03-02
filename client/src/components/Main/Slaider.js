import React, {Component} from "react";
import "../../css/Slaider.css";

class Slaider extends Component{
    slaids = ['xaker.jpg',"logo192.png"];

    constructor(props) {
        super(props);
        this.state = {
            lengthImageMass:this.slaids.length-1,
            idImage : 0
        }
    }
    render() {
        return (
            <div className="slaider">
                    <img src={process.env.PUBLIC_URL + "/img/" + this.slaids[this.state.idImage]} alt=""/>

            </div>
        )
    }
}

export default Slaider