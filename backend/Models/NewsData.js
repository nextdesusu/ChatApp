const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const NewsSchema = new Schema(
	{
	    name: {type: String, required: true, max: 100},
	    text: {type: String, required: true, max: 3000},
	}
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("News", NewsSchema);