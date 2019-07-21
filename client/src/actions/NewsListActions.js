import { GET_NEWS } from '../consts/ClientConfig';
import { GET_NEWS_R, GET_NEWS_S, GET_NEWS_F } from '../consts/Actions';
import GetData from '../utils/GetData';

async function fetchNews(dispatch, news){
	console.log('fetchNews')
	try {
		const response = await GetData(GET_NEWS)
		if (response.success){
			return dispatch({
			    type: GET_NEWS_S,
			    payload: {...news, data: response.data}
		   	})
		}
		else {
			return dispatch({
			    type: GET_NEWS_F,
			    payload: {...news, error: response.error}
	    	})
		}

	} catch (e){
		console.log("error while fetching news", e.message)
		return dispatch({
			type: GET_NEWS_F,
			payload: {...news, error: e.message},
		})
	}
}

export function getNewsList(news) {
	return dispatch => {
  		dispatch({
	    	type: GET_NEWS_R,
	    	payload: news,
    	})
    	fetchNews(dispatch, news)
    }
}