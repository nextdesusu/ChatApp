import { GET_NEWS_R, GET_NEWS_S, GET_NEWS_F } from '../consts/Actions';

const initialState = {
	data: null,
	isFetching: false,
	isLoaded: false,
	error: ''
}

export function newsListReducer(state = initialState, action) {
	switch (action.type) {
		case GET_NEWS_R:
			return {...state, data: null, isFetching: true, isLoaded: false, error: ''}

		case GET_NEWS_S:
			return {...state, data: action.payload.data, isFetching: false, isLoaded: true, error: ''}

		case GET_NEWS_F:
			return {...state, data: null, isFetching: false, isLoaded: false, error: action.payload.error}

		default:
			return state
	}
}