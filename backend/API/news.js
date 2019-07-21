const express = require('express');
const router = express.Router();
const News = require('../Models/NewsData');

router.post('/create', async function (req, res) {
	const { login, password, name, text } = req.body;
	try {
		const succes = isUserAdminAndLogin(login, password);
		console.log('succes is', succes)
		if (succes){
			const newsData = {
				name: name,
				text: text,
			}
			const news = new News(newsData)
			news.save(err => {
				if (err){
					res.json({ success: false, error: 'News '+ err });
				} else {
					console.log('News created succesfully')
					res.json({ success: true, error: null })
				}
			})
		} else {
			res.json({ success: false, error: null })
		}
	} catch (e) {
		res.json({ success: false, error: e.message })
	}
});

router.get('/getList', (req, res) => {
	News.find({})
        .exec((err, NewsList) => {
            if (err){
                res.json({ success: false, data: null, err: err });
            } else {
            	res.json({ success: true, data: NewsList, err: null });
            }
        })
})

module.exports = router;