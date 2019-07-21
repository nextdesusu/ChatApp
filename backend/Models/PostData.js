const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const PostSchema = new Schema(
	{
		poster: {type: Schema.ObjectId, ref: 'User', required: true},
		postedIn: {type: Schema.ObjectId, ref: 'Thread', required: true},
	    text: {type: String, required: true, max: 1000},
	}
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Post", PostSchema);