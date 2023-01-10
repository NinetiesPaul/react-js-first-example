export default class Groups{
    constructor(){
        this.groups = [];
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
            func(this.groups);
        });
    }

    groupCreation(group) {
        this.groups.push(group)
        this.notify();
	}
}