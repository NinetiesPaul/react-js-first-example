import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import GroupCadastro from "./components/GroupCadastro";
import ListaDeNotas from "./components/ListaDeNotas";

class App extends Component {

	constructor(){
		super();
		this.state = {
			notesList: [],
			groupsList: []
		};
	}

	noteCreation(title, text, group) {
		const newNote = {title, text, group};
		const newNotesList = [...this.state.notesList, newNote];
		const newState = {
			notesList: newNotesList
		}
		this.setState(newState);
	}

	groupCreation(group) {
		const newGroupList = [...this.state.groupsList, group];
		const newState = {
			groupsList: newGroupList
		}
		this.setState(newState);
	}

	noteDelete(index){
		let updatedNotesList = this.state.notesList;
		updatedNotesList.splice(index,1);
		const updatedState = {
			notesList: updatedNotesList
		}
		this.setState(updatedState);
	}

	render() {
		return (
			<section>
				<GroupCadastro groupCreation={this.groupCreation.bind(this)} />
				<FormularioCadastro noteCreation={this.noteCreation.bind(this)} groups={this.state.groupsList} />
				<ListaDeNotas notes={this.state.notesList} noteDelete={this.noteDelete.bind(this)}/>
			</section>
		)
	};
}

export default App;
