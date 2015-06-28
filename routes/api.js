var express = require('express');
var router = express.Router();

var bpm;


router.get('/',function(req, res){
	bpm = req.query.bpm || 'BPM not included';
	bpm ? res.status(200).send('BPM = ' + bpm) : res.status(401).send('BPM not included.');
});

router.get('/getBPM', function(req,res){
	res.send(bpm);
})


router.get('/download',function(req,res) { 
	var file = './public/party-mode-master/mp3/dawn.mp3';
	var bpm = req.query.bpm;

	if (bpm){
		res.status(200).download(file); 
	} else {
		res.status(401).send('Please enter BPM')
	}
});	
module.exports = router;
