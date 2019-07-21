const express = require('express');
const router = express.Router();
const User = require('../Models/UserData');

function isLoginOccupied (sLogin) {
	return User.findOne({login: sLogin}).then(response => {
		if (response === null){
			return false
		}
		else {
			return 'Логин занят'
		}
	})
}

function isEmailOccupied (sEmail) {
	return User.findOne({email: sEmail}).then(response => {
		if (response === null){
			return false
		}
		else {
			return 'Емэйл занят'
		}
	})
}

function isUserAdminAndLogin (sLogin, sPassword) {
	return User.findOne({login: sLogin}).then(response => {
		if (response === null){
			return false
		}
		else {
			return true
		}
	})
}

router.post('/create', (req, res) =>  {
	const { email, login, password } = req.body;
	isLoginOccupied(login)
		.then(contradiction1 => {
			if (!contradiction1){
				isEmailOccupied(email)
					.then(contradiciton2 => {
						if (!contradiciton2){
							const userDetail = {
								email: email,
								login: login,
								password: password
							}
							const user = new User(userDetail);
							user.save((err) => {
								if (err){
									res.json({ success: false, error: err });
								}
								else{
									res.json({ success: true, error: null })
								}
							});
						} else {
							res.json({ success: false, error: contradiciton2 });
						}
					})
			} else {
				res.json({ success: false, error: contradiction1 })
			}
		})
});

router.post('/login', (req, res) =>  {
	const { login, password } = req.body;
	User.findOne({login: login}, (err, data) => {
		if (err){
			res.json({ success: false, error: err, user: null });
		}
		else if (!data){
			res.json({ success: false, error: 'Incorrect login', user: null });
		}
		else if (data.password !== password){
			res.json({ success: false, error: 'Incorrect password', user: null });
	    }
	    else {
	    	res.json({ success: true, error: null, user: data });
    	}
    })
});

module.exports = router;