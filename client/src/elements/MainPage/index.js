import React from 'react';
import { connect } from 'react-redux';
import { getNewsList } from '../../actions/NewsListActions';
import NewsList from './NewsList';
import './Main.css'

class Main extends React.Component {
	componentWillMount(){
		const { newsList, getNewsListAction } = this.props;
		console.log('props is', this.props)
		if (newsList.isLoaded){
			return
		}
		getNewsListAction(newsList);
	}
	render(){
		return (
			<div className = 'main__page'>
				<h1>Новости</h1>
				<NewsList newsList = {this.props.newsList} />
			</div>
		)
	}
}

const mapStateToProps = store => {
	return {
		newsList: store.newsList,
	}
}

const mapDispatchToProps = dispatch => ({
	getNewsListAction: newsList => dispatch(getNewsList(newsList)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main); 