function LoadImage(folderUrl, name) {
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

export default LoadImage