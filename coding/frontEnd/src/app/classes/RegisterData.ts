export class RegisterData{
	
	constructor(
		private password:string,
		private rtpassword:string,
		private email:string,
		private name?:string,
	){}
}