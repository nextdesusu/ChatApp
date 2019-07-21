const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function validateEmail (email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// this will be our data base's data structure 
const UserSchema = new Schema(
	{
	    email: {
        	type: String,
        	trim: true,
        	lowercase: true,
       		unique: true,
        	required: true,
        	validate: [validateEmail, 'Please fill a valid email address'],
        	match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    	},
	    login: {
	    	type: String, 
	    	required: true,
	   		unique: true, 
	   		max: 30
	    },
	    password: {type: String, required: true, max: 30},
	    description: {type: String, max: 1000},
	}
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", UserSchema);