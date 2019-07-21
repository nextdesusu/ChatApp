//import React from 'react';
import axios from 'axios';

function postFormData(url, dataList, configObj){
	/*
	const formData = new FormData();
	const check = [];
 	for (let elem of dataList){
 		check.push(elem[0], elem[1]);
 		formData.append(elem[0], elem[1]);
 	}
 	console.log(check, formData.get('email'));
 	*/
 	/*
 	const config = {
 		headers: {
 			'content-type': 'multipart/form-data'
 		}
 	}
 	return axios.post(url, dataList, config);
 	*/
 	const config = {configObj}; 
 	return axios.post(url, dataList, config)
}

function loadImage(folderUrl, name) {
	//'http://localhost:3000/data/images/' Нужно поменять!!!
	const url = folderUrl + "/" + name;
	return fetch(url).then(response => {
		if(response.ok) {
			console.log(response);
			const blob = response.blob();
			return blob
			//var objectURL = URL.createObjectURL(blob);
			//return blob;
    } else {
      console.log('Ошибка: ' + response.status);
    }
  });
};

export { postFormData, loadImage }