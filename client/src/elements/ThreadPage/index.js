import React from 'react';
import CreatePost from '../ChatPage/CreatePost';
import PostList from '../ChatPage/PostList';
import ThreadRepresent from '../common/ThreadRepresent';
import GetThread from '../../utils/GetThread';
import { connect } from 'react-redux';

class ThreadDetail extends React.Component{
	_isMounted = false;
	state = {
		data: null,
		isFething: false,
		error: ''
	}
	isAllOk = () => {
		return this.state.data
	}
	threadComponent = (elem) => {
		const { _id, poster, name, text } = elem;
		return (
			<ThreadRepresent 
				ButtonOn = {false} 
				threadId = {_id} 
				poster = {poster ? poster.login : 'Автор неизвестен'} 
				header = {name} 
			text = {text}/>
		)
	}
	componentDidMount(){
		this._isMounted = true;
		this.setState({ isFething: true, error: '' })
		GetThread(this.props.match.params.threadid)
			.then(response => {
				if (this._isMounted){
					const { data, error } = response;
					console.log('data is', data)
					this.setState({ data: data, isFething: false, error: error })
				}
			})
	}
	componentWillUnmount(){
		this._isMounted = false;
	}
	render(){
		const { data, isFetching, error } = this.state;
		const threadId = this.props.match.params.threadid;
		return(
			<div className = 'thread__page'>
				{this.isAllOk() && this.threadComponent(data) || <p>Чтото пошло не так...</p>}
			</div>
		)
	}
}

const mapStateToProps = store => {
	return {
		user: store.user,
	}
}

export default connect(mapStateToProps)(ThreadDetail)