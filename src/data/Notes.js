export default class Notes{
    constructor(){
        this.notes = [];
    }

    noteCreation(title, text, group) {
		const newNote = new Note(title, text, group);
		this.notes.push(newNote);
	}

    noteDelete(index){
		this.notes.splice(index,1);
	}
}

class Note{
    constructor(title, text, group){
        this.title = title;
        this.text = text;
        this.group = group;
    }
}