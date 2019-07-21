import GetData from './GetData';
import { GET_THREAD } from '../consts/ClientConfig'

export default async function GetThread(threadurl){
	try {
		const thread = await GetData(GET_THREAD + threadurl)
		if (thread.success){
			return { data: thread.data, error: null }
		} else {
			return { data: null, error: thread.err }
		}
	} catch(e){
		console.log('error while fetching thread =>', e.message)
		return { data: null, error: e.message }
	}
} 