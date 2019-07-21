import { LOGIN_U_R, LOGIN_U_S, LOGIN_U_F, UNLOGIN_U } from '../consts/Actions';

const initialState = {
	email: '',
	login: '', 
	password: '',
	isInSession: false,
	tryingToLogin: false,
	id: null,
	error: '',
}

export function userReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_U_R:
			return { ...state, tryingToLogin: true, isInSession: false, id: null, error: ''}

		case LOGIN_U_S:
			const { email, login, password, _id } = action.payload;
			return { ...state, email: email, login: login, password: password, isInSession: true, tryingToLogin: false, id: _id, error: '' }

		case LOGIN_U_F:
			return { ...state, isInSession: false, tryingToLogin: false, id: null, error: action.payload.error }

		case UNLOGIN_U:
			return { ...state, email: '', login: '', password: '', isInSession: false, tryingToLogin: false, id: null, error: '' }

		default:
			return state
	}
}