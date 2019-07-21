const User = require('./UserData');
const Post = require('./PostData');
const Thread = require('./ThreadData');

function registerUser(newEmail, newLogin, newPassword){
	const userDetail = {
		email: newEmail,
		login: newLogin,
		password: newPassword
	}
	const user = new User(userDetail);
	return user.save((err) => {
		if (err){
			return({ success: false, error: err });
		}
		return({ success: true });
	});
}

function enterUser(ulogin, password){
	const query = User.findOne({login: ulogin}, (err, data) => {
		console.log(err);
    })
    return query
    /*
    if (err){
			return({ success: true, error: err, user: null });
		}
		else if (!data){
			return({ success: true, error: 'Incorrect login', user: null });
		}
		else if (data.password !== password){
			return({ success: true, error: 'Incorrect password', user: null });
	    }
	    else {
	    	return({ success: true, error: null, user: data });
    	}
    */
}

module.exports = {
	createUser: registerUser,
	loginUser: enterUser,
}