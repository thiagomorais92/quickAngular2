export class Hero {
	id:number;
	name:string;

	empty_constructor(){};
	constructor(id:number, title:string){
		this.id = id;
		this.name = title;
	};
}