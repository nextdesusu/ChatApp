import { LOGIN_U_R, LOGIN_U_S, LOGIN_U_F, UNLOGIN_U } from '../consts/Actions';
import { LOGIN_USER_ROUTE } from '../consts/ClientConfig';
import PostForm from '../utils/PostForm';

async function fetchUser(dispatch, user){
	try {
		const response = await PostForm(LOGIN_USER_ROUTE, user)
		console.log('response =>', response, 'succes', response.success)
		if (response.success){
			console.log('email is', response.user.email)
			return dispatch({
			    type: LOGIN_U_S,
			    payload: {...user, email: response.user.email, _id: response.user._id }
		   	})
		}
		else {
			return dispatch({
			    type: LOGIN_U_F,
			    payload: {...user, error: response.error}
	    	})
		}

	} catch (e){
		return dispatch({
			type: LOGIN_U_F,
			payload: {...user, error: e.message},
		})
	}
}

export function loginUser(user) {
  	return dispatch => {
  		dispatch({
	    	type: LOGIN_U_R,
	    	payload: user,
    	})
    	fetchUser(dispatch, user)
	}
}