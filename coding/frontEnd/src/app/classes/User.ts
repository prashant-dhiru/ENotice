export class User{

	constructor(
		public name : string,
		public email: string,
		public phone: string[],
		public isAdmin : boolean,
		public password? : string
	){}
}