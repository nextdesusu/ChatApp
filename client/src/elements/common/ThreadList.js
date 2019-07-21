import React from 'react';
import ThreadRepresent from './ThreadRepresent';

export default class ThreadList extends React.Component {
	_isMounted = false;
	makeThreadComponent = (elem) => {
		const { _id, poster, name, text } = elem;
		return (
			<li className = 'thread__wrapper' key = {elem._id}>
				<ThreadRepresent 
					ButtonOn = {true} 
					threadId = {_id} 
					poster = {poster ? poster.login : 'Автор неизвестен'} 
					header = {name} 
				text = {text}/>
			</li>
		)
	}
	componentDidMount(){
		this._isMounted = true;
	}
	componentWillUnmount(){
		this._isMounted = false;
	}
	render(){
		const { threadData, isLoaded } = this.props;
		const threadList = isLoaded && threadData ? threadData.map(this.makeThreadComponent) : <p>Загрузка...</p>;
		return(
			<div className = "messages__block">
				<ul className = "thread__list">
					{threadList}
				</ul>
			</div>
		)
	}
}