'use strict';

const express = require('express'),
	app = express(),
	Twitter = require('twitter');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({
	extended: true})); // for parsing application/x-www-form-urlencoded

app.use(express.static('resources'));

app.get('/', function(req, res) {
	res.render('HomePage');
});
let Room1 = 'Room1';
//Here it gets a little messy, I've got a number of pages to load.
app.get('/Room1', function (req, res) {
	res.render(Room1);
});
app.get('/Room2', function (req, res) {
	res.render('Room2');
});
app.get('/Room3', function (req, res) {
	res.render('Room3');
});
app.get('/Room4', function (req, res) {
	res.render('Room4');
});
app.get('/Room5', function (req, res) {
	res.render('Room5');
});
app.get('/FinalRoom', function (req, res) {
	res.render('FinalRoom');
});


let client = new Twitter({
	//This should probably be hidden but I made the app only for this project which is only being demonstrated once, so the priority of that is low
	consumer_key: 'smgkkQepOODnYJ1Ekk6TeeMxN',
	consumer_secret: 'IU61CB3mMDEB49yP85QHhSJukTR9yT9sKVisFxQyyeJowvPX5k',
	access_token_key: '234100290-O1TmaFTbc35io3ptwmMztX0NLEhVx4KA4rjUuHvf',
	access_token_secret: 'DiUKPrydlFrmUcKaJubiSm0b8oc9lhj7UszbZmi7kFg2M',
});
let tweeta = '';
//BE CAREFUL, if you restart the server too many times within 15 minutes twitter will assume you're trying to ddos and give you error 420
let stream = client.stream('statuses/filter', {track: '#CSC365 '});
stream.on('data', function(tweet) {
	tweeta = tweet.text;
	for (let i = 0; i <= tweeta.length; i++){
		tweeta = tweeta.substring(7); // Gets rid of the #CSC365 if tweet is formatted correctly.
		tweeta = tweeta.toLowerCase(); // Makes all elligible characters lowercase;
		tweeta = tweeta.replace(/[^a-z]/g, ''); //Gets rid of all non alphabetic characters
		if (tweeta === 'boo'){
			Room1 = 'Room1E';
		}}});
stream.on('error', function(error) {
	throw error;
});

const server = app.listen(3000, function () {
	console.log(`The app is running on port ${server.address().port}`);});