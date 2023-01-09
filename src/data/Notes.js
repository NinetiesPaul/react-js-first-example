export default class Notes{
    constructor(){
        this.notes = [];
        this._observables = [];
    }

    subscribe(func){
        this._observables.push(func);
    }

    unsubscribe(func){
        this._observables = this._observables.filter(f => f= func);
    }

    notify(){
        this._observables.forEach(func => {
            func(this.notes);
        });
    }

    noteCreation(title, text, group) {
		const newNote = new Note(title, text, group);
		this.notes.push(newNote);
        this.notify();
	}

    noteDelete(index){
		this.notes.splice(index,1);
        this.notify();
	}
}

class Note{
    constructor(title, text, group){
        this.title = title;
        this.text = text;
        this.group = group;
    }
}