import React from 'react';
import FormSubmit from './FormSubmit';
import ErrorCMP from './ErrorCMP';
import FormHeader from './FormHeader';
import Textarea from './Textarea';
import PostForm from '../../utils/PostForm';
import Input from './Input';
import { CREATE_NEWS_ROUTE } from '../../consts/ClientConfig';
import ErrorComponent from './ErrorCMP';
import { connect } from 'react-redux';

class CreateNews extends React.Component{
	state = {
		newsNameInput: '',
		newsTextInput: '',
		error: '',
		tryingToSend: false
	}
	createNews = (e) =>{
		e.preventDefault();
		this.setState({ error: '' })
		this.setState({ tryingToSend: true });
		const { login, password } = this.props.user;
		const { newsNameInput, newsTextInput} = this.state;
		const formObj = {
			'login': login,
			'password': password,
			'name': newsNameInput,
			'text': newsTextInput
		}
		console.log('sending', formObj)
		PostForm(CREATE_NEWS_ROUTE, formObj)
			.then(response => {
				console.log('this is answer', response)
				if (response.success){
					this.setState({ tryingToSend: false });
				}
				else {
					this.setState({ error: response.error })
					this.setState({ tryingToSend: false });
				}
			})
			.catch(err =>{
				this.setState({ tryingToSend: false });
				console.log(err)
			})
	}
	handleInput = (e) => {
		const { name, value } = e.currentTarget;
		this.setState({ [name]: value });
	}
	allIsOk = () => {
		return this.props.user.isInSession
	}
	render(){
		const { login, password, isInSession } = this.props.user;
		const { newsNameInput, newsTextInput, error, tryingToSend } = this.state;
		const allIsOk = this.allIsOk();
		return (
			<div className = "form__block">
				<form action = "" className = "form__common" onSubmit = {this.createNews}>
					{!isInSession && <FormHeader text = "Войдите пожалуйста" />}
					<Input 
						name = "newsNameInput" label = "Название новости" 
						type = "password" bindTo = {newsNameInput} 
						handleFunction = {this.handleInput} 
					/>
					<Textarea name = "newsTextInput" label = "Текст новости" bindTo = {newsTextInput} handleFunction = {this.handleInput} />
					<FormSubmit disabledCondition = {!allIsOk} />
					<ErrorCMP message = {error} />
				</form>
			</div>
		)
	}
}

const mapStateToProps = store => {
  return {
    user: store.user,
  }
}

export default connect(mapStateToProps)(CreateNews)