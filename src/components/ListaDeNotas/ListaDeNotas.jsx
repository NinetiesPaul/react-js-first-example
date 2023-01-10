import { render } from "@testing-library/react";
import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {

    constructor(){
        super();
        this.state = { notes: [] };
    }

    componentDidMount(){
        this.props.notes.subscribe(this._newNote.bind(this));
    }

    _newNote(notes){
        this.setState({ ...this.state, notes });
    }

    render() {
        return (
            <ul>
                {
                    this.state.notes.map((note, index) => {
                        return (
                            <li key={index}>
                                <CardNota index={index} title={note.title} text={note.text} group={note.group} noteDelete={this.props.noteDelete}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    };
}

export default ListaDeNotas