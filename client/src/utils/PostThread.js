import PostForm from './PostForm';
import { CREATE_THREAD_ROUTE } from '../consts/ClientConfig';

export default async function PostThread(formObj){
	try {
		const response = await PostForm(CREATE_THREAD_ROUTE, formObj)
		if (response.success){
			return { success: response.success, error: '' }
		} else {
			return { success: response.success, error: response.err }
		}
	} catch(e){
		console.log('error while posting thread =>', e.message)
		return { success: false, error: e.message }
	}
} 