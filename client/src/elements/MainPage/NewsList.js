import React from 'react';
import NewsRepresent from './NewsRepresent';

class NewsList extends React.Component {
	makeNewsComponent = (elem) => {
		const { name, text } = elem;
		return (
			<li className = 'news__wrapper' key = {elem._id}>
				<NewsRepresent 
					header = {name} 
					text = {text}
				/>
			</li>
		)
	}
	render(){
		let newsList = this.props.newsList;
		newsList = newsList.isLoaded ? newsList.data.map(this.makeNewsComponent) : <p>Загрузка...</p>;
		return (
			<ul className = "news__list">
				{newsList}
			</ul>
		)
	}
}

export default NewsList;