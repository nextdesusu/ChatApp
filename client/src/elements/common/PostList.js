import React from 'react';
import PostRepresent from './PostRepresent';
import GetPostList from '../../utils/GetPostList';
import { connect } from 'react-redux';
import CreatePost from '../ChatPage/CreatePost';

class PostList extends React.Component {
	_isMounted = false;
	state = {
		postData: null,
		isFetching: false,
		error: ''
	}
	makePostComponent = (elem) => {
		const { poster, text } = elem;
		return (
			<li className = 'post__wrapper' key = {elem._id}>
				<PostRepresent poster = {poster ? poster.login : 'Автор неизвестен'} text = {text}/>
			</li>
		)
	}
	fetchPosts = () => {
		this.setState({ isFetching: true })
		GetPostList(this.props.threadId)
			.then(response => {
				if (this._isMounted){
					this.setState({ postData: response.data, error: response.error, isFetching: false })
				}
			})
	}
	componentDidMount(){
		this._isMounted = true;
		this.fetchPosts()
	}
	componentWillUnmount(){
		this._isMounted = false;
	}
	render(){
		const { user, threadId } = this.props;
		const { postData, isFetching, error } = this.state;
		const postList = postData ? postData.map(this.makePostComponent) : <p>Загрузка...</p>;
		return(
			<div className = 'posts__block'>
				<CreatePost user = {user} threadId = {threadId} updFunc = {this.fetchPosts} />
				<ul className = 'post__list'>
					<li>{error && <p>{error}</p>}</li>
					{postList}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = store => {
	return {
		user: store.user,
	}
}

export default connect(mapStateToProps)(PostList)