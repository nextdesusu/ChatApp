import {
	INCORRECT_PASS, 
	PASS_FIELDS_DONT_MATCH,
	OCCUPIED_LOGIN, 
	OCCUPIED_EMAIL, 
	ONE_FIELD_EMPTY, 
	ALREADY_IN_REG_PROCCESS, 
	SERVER_ERROR
} from "../consts/Errors";

const allErrorsObj = {
	INCORRECT_PASS: {triggered: false, desc: "Неправильный пароль"},
	PASS_FIELDS_DONT_MATCH: {triggered: false, desc: "Введенные вами пароли не сопадают"},
	OCCUPIED_LOGIN: {triggered: false, desc: "Логин занят"},
	OCCUPIED_EMAIL: {triggered: false, desc: "Емэйл занят"},
	ONE_FIELD_EMPTY: {triggered: false, desc: "Одно из полей не заполнено"},
	ALREADY_IN_REG_PROCCESS: {triggered: false, desc: "Уже в процессе регистрации"},
	SERVER_ERROR: {triggered: false, desc: "Отсутствует ответ от сервера"},
}

const PageDoesNotContainError = Error("This page does not contain this error");

export default class PageErrors {
	constructor(name, errorNames){
		this._name = name;
		this._Errors = {}
		errorNames.map((error) => {
			if (allErrorsObj[error]){
				this._Errors[error] = allErrorsObj[error];
			} else {
				throw new PageDoesNotContainError;
			}
		})
	}
	isTriggered(errorName){
		if (!this._Errors[errorName]){
			throw new PageDoesNotContainError;
		}
		return this._Errors[errorName].triggered;
	}
	triggerError(errorName){
		if (!this._Errors[errorName]){
			throw new PageDoesNotContainError;
		}
		this._Errors[errorName].triggered = true;
	}
	unTriggerError(errorName){
		if (!this._Errors[errorName]){
			throw new PageDoesNotContainError;
		}
		this._Errors[errorName].triggered = false;
		//console.log(this._Errors[errorName], "is untriggered.")
	}
	unTriggerAll(){
		for (let error of Object.keys(this._Errors)){
			this.unTriggerError(error);
		}
	}
	ErrObjToList(){
		const res = [];
		for (let error of Object.keys(this._Errors)){
			res.push(this._Errors[error])
		}
		return res;
	}
	getListOfTriggered(){
		const listOfTriggerd = this.ErrObjToList().filter(error => error.triggered);
		console.log("return list", listOfTriggerd)
		return listOfTriggerd
	}
	hasAnyErrors(){
		return Boolean(this.getListOfTriggered().length)
	}
	showAllErrors(){
		console.log("***************")
		console.log(this._name, "has => errors:")
		for (let error of Object.keys(this._Errors)){
			let string = "*" + error
			if (this._Errors[error].triggerd){
				string += "!TRIGGERED!";
			}
			string += "*";
			console.log(string);
		}
		console.log("***************")
	}
}