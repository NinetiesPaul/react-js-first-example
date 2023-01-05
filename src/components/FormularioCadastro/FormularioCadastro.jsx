import React, { Component } from "react";

class FormularioCadastro extends Component {

    constructor(props){
        super(props);
        this.title = "";
        this.note = "";
        this.group = "";
    }

    _handleTitleChange(event){
        this.title = event.target.value;
    }

    _handleTextChange(event){
        this.note = event.target.value;
    }

    _handleGroupChange(event){
        this.group = event.target.value;
        console.log(this.group)
    }

    _cardCreation(event){
        event.preventDefault();
        event.stopPropagation();
        console.log(this.group, this.title)
        this.props.cardCreation(this.title, this.note, this.group)
    }

    render() {
        return (
            <form onSubmit={this._cardCreation.bind(this)}>
                <select onChange={this._handleGroupChange.bind(this)}>
                    <option> -- </option>
                    {
                        this.props.groups.map((group, index) => {
                            return (
                                <option key={index} value={group.title}>
                                    {group.title}
                                </option>
                            )
                        })
                    }
                </select><br/>
                <input type="text" placeholder="Titulo" onChange={this._handleTitleChange.bind(this)} /><br/>
                <textarea placeholder="Digite sua nota" onChange={this._handleTextChange.bind(this)} ></textarea><br/>
                <button>Publicar</button>
            </form>
        );
    }
}

export default FormularioCadastro