import React from 'react';
import PropTypes from 'prop-types';
import FormSubmit from '../common/FormSubmit';
import ErrorCMP from '../common/ErrorCMP';
import FormHeader from '../common/FormHeader';
import Textarea from '../common/Textarea';
import PostForm from '../../utils/PostForm';
import { CREATE_POST_ROUTE } from '../../consts/ClientConfig';
import { connect } from 'react-redux';

class CreatePost extends React.Component{
	state = {
		postTextInput: '',
		error: '',
		tryingToSend: false
	}
	createPost = (e) =>{
		e.preventDefault();
		this.setState({ error: '' })
		this.setState({ tryingToSend: true });
		const { login, password } = this.props.user;
		const threadId = this.props.threadId;
		const postTextInput = this.state.postTextInput;
		const formObj = {
			'login': login,
			'password': password,
			'postText': postTextInput,
			'threadId': threadId
		}
		console.log('sending', formObj)
		PostForm(CREATE_POST_ROUTE, formObj)
			.then(response => {
				console.log('this is answer', response)
				if (response.success){
					this.setState({ tryingToSend: false });
					//Updating post list...
					this.props.updFunc();
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
		const isInSession = this.props.user.isInSession;
		const { postTextInput, error } = this.state;
		const allIsOk = this.allIsOk();
		return (
			<div className = "form__block">
				{isInSession &&
					<form action = "" className = "form__common" onSubmit = {this.createPost}>
						<FormHeader text = "Отправить сообщение" />
						<Textarea name = "postTextInput" label = "Сообщение" bindTo = {postTextInput} handleFunction = {this.handleInput} />
						<FormSubmit disabledCondition = {!allIsOk} />
						<ErrorCMP message = {error} />
					</form>
				||
					<FormHeader text = "Войдите чтобы ответить" />
				}
			</div>
		)
	}
}

const mapStateToProps = store => {
  return {
    user: store.user,
  }
}

CreatePost.propTypes = {
	updFunc: PropTypes.func.isRequired,
	threadId: PropTypes.string.isRequired,
	user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(CreatePost)