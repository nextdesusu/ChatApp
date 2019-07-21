const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const ThreadSchema = new Schema(
	{
		poster: {type: Schema.ObjectId, ref: 'User', required: true},
	    name: {type: String, required: true, max: 100},
	    text: {type: String, required: true, max: 3000},
	}
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Thread", ThreadSchema);