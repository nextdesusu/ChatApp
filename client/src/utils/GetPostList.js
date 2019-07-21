import GetData from './GetData';
import { GET_POSTS } from '../consts/ClientConfig'

export default async function GetPostList(threadId){
	try {
		const postList = await GetData(GET_POSTS + threadId)
		if (postList.success){
			return { data: postList.data, error: null }
		} else {
			return { data: null, error: postList.err }
		}
	} catch(e){
		console.log('error while fetching postList =>', e.message)
		return { data: null, error: e.message }
	}
} 