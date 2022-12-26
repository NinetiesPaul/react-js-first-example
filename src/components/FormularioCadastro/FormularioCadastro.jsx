import React, { Component } from "react";

class FormularioCadastro extends Component {

    constructor(props){
        super(props);
        this.title = "";
        this.note = "";
    }

    _handleTitleChange(event){
        this.title = event.target.value;
    }

    _handleTextChange(event){
        this.note = event.target.value;
    }

    _cardCreation(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.cardCreation(this.title, this.note)
    }

    render() {
        return (
            <form onSubmit={this._cardCreation.bind(this)}>
                <input type="text" placeholder="Titulo" onChange={this._handleTitleChange.bind(this)} /><br/>
                <textarea placeholder="Digite sua nota" onChange={this._handleTextChange.bind(this)} ></textarea><br/>
                <button>Publicar</button>
            </form>
        );
    }
}

export default FormularioCadastro