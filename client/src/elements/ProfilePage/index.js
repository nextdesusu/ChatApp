import React from 'react';
import PropTypes from 'prop-types';
import HMessageComponent from '../common/HMessage';
import { connect } from 'react-redux';
import GetThreadsByUser from '../../utils/GetThreadsByUser';
import ThreadList from '../common/ThreadList';

class Profile extends React.Component {
	_isMounted = false;
	state = {
		data: null,
		isLoaded: false,
		error: ''
	}
	getThreads = () => {
		const user = this.props.user;
		this.setState({ data: null, isLoaded: false, error: '' })
		if (user.isInSession){
			GetThreadsByUser(user.id)
				.then(response => {
					if (this._isMounted){
						const { data, error } = response
						console.log('reponse is', response)
						this.setState({ data: data, isLoaded: true, error: error })
					}
				})
		}
	}
	componentWillMount(){
		console.log('mounting...')
		this._isMounted = true;
		this.getThreads()
	}
	componentWillUnmout(){
		this._isMounted = false;
	}
	render(){
		const user = this.props.user;
		const { isLoaded, data, error } = this.state;
		return (
			<div className = 'profile__page'>
				{user.isInSession ? <HMessageComponent text = 'Ваши треды!'/> : <HMessageComponent text = 'Войдите пожалуйста!' /> }
				{isLoaded && data && <ThreadList isLoaded = {isLoaded} threadData = {data} error = {error} />}
			</div>
		)
	}
}

const mapStateToProps = store => {
  return {
    user: store.user,
  }
}

export default connect(mapStateToProps)(Profile)