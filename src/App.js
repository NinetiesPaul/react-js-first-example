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

	cardCreation(title, text, group) {
		const newNote = {title, text, group};
		const newNotesList = [...this.state.notesList, newNote];
		const newState = {
			notesList: newNotesList
		}
		this.setState(newState);
	}

	groupCreation(title) {
		const newGroup = {title};
		const newGroupList = [...this.state.groupsList, newGroup];
		const newState = {
			groupsList: newGroupList
		}
		this.setState(newState);
	}

	render() {
		return (
			<section>
				<GroupCadastro groupCreation={this.groupCreation.bind(this)} />
				<FormularioCadastro cardCreation={this.cardCreation.bind(this)} groups={this.state.groupsList} />
				<ListaDeNotas notes={this.state.notesList}/>
			</section>
		)
	};
}

export default App;
