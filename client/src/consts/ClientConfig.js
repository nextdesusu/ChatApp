const SITE_NAME = "localhost";
const PREFIX = 'http://';
const POSTFIX = '/api/';
const SERVER_PORT = 3001;
const CLIENT_PORT = 3000;
const CREATE_NEWS_ROUTE = PREFIX + SITE_NAME + ':' + SERVER_PORT + POSTFIX + 'news/create';
const GET_NEWS = PREFIX + SITE_NAME + ':' + SERVER_PORT + POSTFIX + 'news/getList';
const CREATE_USER_ROUTE = PREFIX + SITE_NAME + ':' + SERVER_PORT + POSTFIX + 'user/create';
const CREATE_THREAD_ROUTE = PREFIX + SITE_NAME + ':' + SERVER_PORT + POSTFIX + 'thread/create';
const CREATE_POST_ROUTE = PREFIX + SITE_NAME + ':' + SERVER_PORT + POSTFIX + 'post/create';
const LOGIN_USER_ROUTE = PREFIX + SITE_NAME + ':' + SERVER_PORT + POSTFIX + 'user/login';
const GET_THREAD = PREFIX + SITE_NAME + ':' + SERVER_PORT + POSTFIX + 'thread/getThread/';
const GET_THREADS = PREFIX + SITE_NAME + ':' + SERVER_PORT + POSTFIX + 'thread/getList';
const GET_THREADS_BY_USER = PREFIX + SITE_NAME + ':' + SERVER_PORT + POSTFIX + 'thread/getThreadsByUser/';
const GET_POSTS = PREFIX + SITE_NAME + ':' + SERVER_PORT + POSTFIX +'post/getPost/';
const IMAGES_ROUTE = PREFIX + SITE_NAME + ':' + CLIENT_PORT + '/data/images';
console.log('news is>>>', GET_NEWS)

export { 
	SITE_NAME, CLIENT_PORT, CREATE_NEWS_ROUTE,
	CREATE_USER_ROUTE, CREATE_THREAD_ROUTE, 
	CREATE_POST_ROUTE, LOGIN_USER_ROUTE, 
	GET_THREAD ,GET_THREADS, 
	GET_POSTS, GET_THREADS_BY_USER, 
	GET_NEWS, IMAGES_ROUTE
}