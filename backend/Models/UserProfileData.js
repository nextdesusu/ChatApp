const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const UserProfileSchema = new Schema(
	{
		user: {type: Schema.ObjectId, ref: 'User', required: true},
	    links: {},
	    description: {type: String, max: 3000},
	}
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("UserProfile", UserProfileSchema);