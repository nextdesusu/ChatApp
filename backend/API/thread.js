const express = require('express');
const router = express.Router();
const Thread = require('../Models/ThreadData');
const User = require('../Models/UserData');

router.post('/create', (req, res) =>  {
	const { login, password, threadName, threadText } = req.body;
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
    	//console.log('creating thread')
		const threadDetail = {
			poster: poster,
			name: threadName,
			text: threadText
		}
		//console.log('poster is', poster)
		const thread = new Thread(threadDetail);
		thread.save((err) => {
			if (err){
				res.json({ success: false, error: 'Thread '+ err });
			}
			else{
				console.log('Thread created succesfully')
				res.json({ success: true, error: null })
			}
		});
	})
});

router.get('/getList', (req, res) => {
	Thread.find({})
        .populate('poster')
        .exec((err, listOfThreads) => {
            if (err){
                res.json({ success: false, data: null, err: err });
            } else {
            	res.json({ success: true, data: listOfThreads, err: null });
            }
        })
});

router.get('/getThread/:threadid', (req, res) => {
	const threadId = req.params.threadid;
	Thread.findOne({_id: threadId})
        .populate('poster')
        .exec((err, thread) => {
            if (err){
                res.json({ success: false, data: null, err: err });
            } else {
            	res.json({ success: true, data: thread, err: null });
            }
        })
});

router.get('/getThreadsByUser/:userid', (req, res) => {
	const userId = req.params.userid;
	Thread.find({poster: userId})
        .exec((err, listOfThreads) => {
            if (err){
                res.json({ success: false, data: null, err: err });
            } else {
            	res.json({ success: true, data: listOfThreads, err: null });
            }
        })
})

module.exports = router;