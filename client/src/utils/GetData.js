export default function GetData(url){
	return fetch(url, {
		method: 'GET',
		mode: 'cors',
		headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client);
    })
    .then(response => response.json())
}