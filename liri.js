require("dotenv").config();
var curl = require('curlrequest');
var request = curl.request(default_options);

request([options ,] callback);
// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

// locations of keys
console.log("Spotify Secret: "+process.env.SPOTIFY_SECRET)
console.log("Spotify id: "+process.env.SPOTIFY_ID)
console.log("Twitter access Token: "+process.env.TWITTER_ACCESS_TOKEN_KEY)
console.log("Twitter access Token Secret: "+process.env.TWITTER_ACCESS_TOKEN_SECRET)
console.log("Twitter Consumer Key: "+process.env.TWITTER_CONSUMER_KEY)
console.log("Twitter consumer Secret:"+process.env.TWITTER_CONSUMER_SECRET)
 

// Commands To incorporate 
// * `my-tweets`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`

// get tweets requires auth and i'm to mad to deal with twitters api docs atm
function GetTweets(){
    var request = require('request');
    request('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name='+'Taylor11355348'+'&count=2', function (error, response) {
      console.log('error:', error); // Print the error if one occurred
      console.log('response:' , response)
    });
}

function SpotifyASong(){
    var request = require('request');
    var SongName = process.argv[3]
    request("https://api.spotify.com/v1/search?q=Hacker&type=track&market=US"+ -H +"Accept: application/json" +-H+ "Authorization: Bearer BQCnmJXDDSQlrAjETLHMy0vT0Np6_VAUUEyZQk_yKYRagD7mZss4NXVmJKDLE9nhOIe3rX3-99I8LXhYxFPU6RWi3y-r3_bkDuMfpP8ch5Mn3X-h9aXqwGkqa0Z0-wOGIRLxGMVawTky9Q", function (error, response) {
      console.log('error:', error); // Print the error if one occurred
      console.log('response:' , response)
    });
}


var argument2 = process.argv[2];
switch(argument2){
    case "my-tweets":
    console.log("My Tweet")
    GetTweets();
    break;
    case "spotify-this-song":
    console.log("Spotify this song")
    SpotifyASong()
    break;
    case "movie-this":
    console.log("Movie-this")
    break;
    case "do-what-it-says":
    console.log("Do what it says")
    break;
}

