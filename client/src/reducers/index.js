import { combineReducers } from 'redux'
import { userReducer } from './user'
import { pageReducer } from './page'
import { newsListReducer } from './newsList'

export const rootReducer = combineReducers({
	user: userReducer,
	page: pageReducer,
	newsList: newsListReducer,
})