import React, { Component } from "react";
import "./estilo.css";

class CardNota extends Component {

    render() {
        return (
            <section className="card-nota">
                <header>
                    <h5>{this.props.group}</h5>
                    <h3 className="card-nota-title">{this.props.title}</h3>
                </header>
                <p>
                    {this.props.text}
                </p>
            </section>
        )
    };
}

export default CardNota