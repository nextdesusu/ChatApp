import React from 'react';
import FormSubmit from '../common/FormSubmit';
import ErrorCMP from '../common/ErrorCMP';
import Input from '../common/Input';
import FormHeader from '../common/FormHeader';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../actions/UserActions';
import { PROFILE_P } from '../../consts/PageRoutes';

class Login extends React.Component {
	state = {
		loginInput: '',
		passwordInput: '',
	}
	handleInput = (e) => {
		const { name, value } = e.currentTarget;
		this.setState({ [name]: value });
	}
	loginUser = (e) =>{
		e.preventDefault();
		const { user, loginUserAction } =this.props;
		if (user.tryingToLogin){
			return
		}
		const { loginInput, passwordInput } = this.state;
		const userData = {
			login: loginInput,
			password: passwordInput,
		}
		loginUserAction(userData)
	}
	isAllOk = () =>{
		const { loginInput, passwordInput, tryingToLogin } = this.state;
		return loginInput.trim() && passwordInput.trim() && !tryingToLogin
	}
	render(){
		const user = this.props.user;
		const { loginInput, passwordInput } = this.state;
		const allIsOk = this.isAllOk();
		return (
			<div className = "form__block">
				<form action = "" className = "form__common" onSubmit = {this.loginUser}>
					<FormHeader text = "Войти" />
					<Input 
						name = "loginInput" label = "Логин" 
						type = "text" bindTo = {loginInput} 
						handleFunction = {this.handleInput} 
					/>
					<Input 
						name = "passwordInput" label = "Пароль" 
						type = "password" bindTo = {passwordInput} 
						handleFunction = {this.handleInput} 
					/>
					<FormSubmit disabledCondition = {!allIsOk} />
					<ErrorCMP message = {user.error} />
					{user.isInSession && <Redirect to = {PROFILE_P} />}
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

const mapDispatchToProps = dispatch => ({
	loginUserAction: user => dispatch(loginUser(user)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);