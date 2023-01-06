import React, { Component } from "react";

class GroupCadastro extends Component {

    _groupCreation(event){
        if (event.key === "Enter") {
            this.props.groupCreation(event.target.value)
        }
    }

    render() {
        return (
            <section>
                <input type="text" placeholder="Grupo" onKeyUp={this._groupCreation.bind(this)} /><br/>
            </section>
        );
    }
}

export default GroupCadastro