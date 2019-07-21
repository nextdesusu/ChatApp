import { GET_THREADS } from '../consts/ClientConfig';
import GetData from './GetData';

export default async function GetThreadList(){
	try {
		const response = await GetData(GET_THREADS)
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