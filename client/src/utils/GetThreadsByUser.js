import { GET_THREADS_BY_USER } from '../consts/ClientConfig';
import GetData from './GetData';

export default async function GetThreadByUser(userid){
	try {
		const response = await GetData(GET_THREADS_BY_USER + userid);
		if (response.success){
			return { data: response.data, error: null}
		}
		else {
			return {data: null, error: response.error}
		}

	} catch (e){
		return {data: null, error: e.message}
	}
}