import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";

class App extends Component {

	constructor(){
		super();
		this.state = {
			notesList: []
		};
	}

	cardCreation(title, text) {
		const newNote = {title, text};
		const newNotesList = [...this.state.notesList, newNote];
		const newState = {
			notesList: newNotesList
		}
		this.setState(newState);
	}

	render() {
		return (
			<section>
				<FormularioCadastro cardCreation={this.cardCreation.bind(this)}/>
				<ListaDeNotas notes={this.state.notesList}/>
			</section>
		)
	};
}

export default App;
