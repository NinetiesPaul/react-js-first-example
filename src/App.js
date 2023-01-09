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
				<GroupCadastro groupCreation={this.groups.groupCreation} />
				<FormularioCadastro noteCreation={this.notes.noteCreation} groups={this.groups.groups} />
				<ListaDeNotas noteDelete={this.notes.noteDelete} notes={this.notes.notes} />
			</section>
		)
	};
}

export default App;
