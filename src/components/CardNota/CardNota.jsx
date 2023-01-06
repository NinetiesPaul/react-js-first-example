import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as DeleteIcon} from "../../assets/delete.svg";

class CardNota extends Component {

    _noteDelete(){
        this.props.noteDelete(this.props.index)
    }

    render() {
        return (
            <section className="card-nota">
                <header>
                    <h5>{this.props.group}</h5>
                    <h3 className="card-nota-title">{this.props.title}</h3>
                    <DeleteIcon onClick={this._noteDelete.bind(this)}/>
                </header>
                <p>
                    {this.props.text}
                </p>
            </section>
        )
    };
}

export default CardNota