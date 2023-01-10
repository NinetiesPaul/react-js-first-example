import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import GroupCadastro from "./components/GroupCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import Groups from "./data/Groups";
import Notes from "./data/Notes";

class App extends Component {

	constructor(){
		super();
		this.groups = new Groups();
		this.notes = new Notes();
	}

	render() {
		return (
			<section>
				<GroupCadastro groupCreation={this.groups.groupCreation.bind(this.groups)} />
				<FormularioCadastro noteCreation={this.notes.noteCreation.bind(this.notes)} groups={this.groups} />
				<ListaDeNotas noteDelete={this.notes.noteDelete.bind(this.notes)} notes={this.notes} />
			</section>
		)
	};
}

export default App;
