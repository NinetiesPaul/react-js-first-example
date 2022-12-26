import { render } from "@testing-library/react";
import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {

    render() {
        return (
            <ul>
                {
                    this.props.notes.map((note, index) => {
                        return (
                            <li key={index}>
                                <CardNota title={note.title} text={note.text}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    };
}

export default ListaDeNotas