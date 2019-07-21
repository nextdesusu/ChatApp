import { UPDATING_T_L, UPDATING_P_L } from '../consts/Actions';

export function BindThreadUpdateFunction(page, updateFunction){
	return dispatch => {
		dispatch({
			type: UPDATING_T_L,
			payload: {...page, ThreadUpdateFunction: updateFunction}
		})
	}
}

export function shouldUpdatePostList(page, shouldUpdate){
	return dispatch => {
		dispatch({
			type: UPDATING_T_L,
			payload: {...page, shouldUpdatePostList: shouldUpdate}
		})
	}
}