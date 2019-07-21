import { UPDATING_T_L, UPDATING_P_L } from '../consts/Actions';

const initialState = {
	ThreadUpdateFunction: null,
}

export function pageReducer(state = initialState, action) {
	switch (action.type) {
		case UPDATING_T_L:
			return { ...state, ThreadUpdateFunction: action.payload.updateThread}

		case UPDATING_P_L:
			return { ...state, shouldUpdatePostList: action.payload.updatePost}

		default:
			return state
	}
}