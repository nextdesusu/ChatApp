import React from 'react';
import { connect } from 'react-redux';
import { REG_P, LOG_P } from '../../consts/PageRoutes';
import CreateThread from './CreateThread';
import ButtonLink from '../common/ButtonLink';
import ThreadList from '../common/ThreadList';
import GetThreadList from '../../utils/GetThreadList';

import './Chat.css';

class Chat extends React.Component {
	_isMounted = false;
	state = {
		data: null,
		isLoaded: false,
		error: ''
	}
	fetchThreads = () => {
		this.setState({ data: null, isLoaded: false, error: '' })
		GetThreadList()
			.then(response => {
				if (this._isMounted){
					const { data, error } = response;
					this.setState({ data: data, error: error, isLoaded: true })
				}
			})
	}
	componentDidMount(){
		this._isMounted = true;
		this.fetchThreads();
	}
	componentWillUnmount(){
		this._isMounted = false;
	}
	render(){
		const user = this.props.user;
		const { login, password, isInSession } = user;
		const { data, isLoaded, error } = this.state;
		return (
			<div className = "chat__block">
				{isInSession && 
					<div className = "chat__header">
						<CreateThread currentUser = {user} updateThreadList = {this.fetchThreads} />
					</div> 
					|| 
					<div className = "chat__unlogined">
						<h3 className = "message__congrats">Пожалуйста войдите или зарегистрируйтесь!</h3>
						<ButtonLink to = {REG_P} text = 'Регистрация' /><ButtonLink to = {LOG_P} text = 'Войти' />
					</div>
				}
				<ThreadList isLoaded = {isLoaded} threadData = {data} error = {error} />
			</div>
		)
	}
}

const mapStateToProps = store => {
	return {
		user: store.user,
	}
}

export default connect(
	mapStateToProps,
)(Chat); 