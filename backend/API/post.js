const express = require('express');
const router = express.Router();
const Post = require('../Models/PostData');
const User = require('../Models/UserData');

router.post('/create', (req, res) =>  {
	const { login, password, postText, threadId } = req.body;
	User.findOne({login: login}, (err, data) => {
		if (err){
			res.json({ success: false, error: 'User ' + err, user: null });
		}
		else if (!data){
			res.json({ success: false, error: 'User incorrect login', user: null });
		}
		else if (data.password !== password){
			res.json({ success: false, error: 'User incorrect password', user: null });
	    }
    })
    	.then(poster => {
    		const postDetail = {
				poster: poster,
				postedIn: threadId,
				text: postText
			}
			//console.log('poster is', poster)
			const post = new Post(postDetail);
			post.save((err) => {
				if (err){
					res.json({ success: false, error: 'Post '+ err });
				}
				else{
					console.log('Post created succesfully')
					res.json({ success: true, error: null })
				}
			});
    	})
})

router.get('/getPost/:threadid', (req, res) => {
	const threadId = req.params.threadid;
	Post.find({postedIn: threadId})
        .populate('poster')
        .exec((err, listOfPosts) => {
            if (err){
                res.json({ success: false, data: null, err: err });
            } else {
            	res.json({ success: true, data: listOfPosts, err: null });
            }
        })
});

module.exports = router;