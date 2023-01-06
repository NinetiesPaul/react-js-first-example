import React, { Component } from "react";

class GroupCadastro extends Component {

    constructor(props){
        super(props);
        this.title = "";
    }

    _handleGroupChange(event){
        this.title = event.target.value;
    }

    _groupCreation(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.groupCreation(this.title)
    }

    render() {
        return (
            <form onSubmit={this._groupCreation.bind(this)}>
                <input type="text" placeholder="Grupo" onChange={this._handleGroupChange.bind(this)} /><br/>
            </form>
        );
    }
}

export default GroupCadastro