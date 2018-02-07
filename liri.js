require("dotenv").config();
var twitter = require('twitter');
var spotify = require('spotify');
var fs = require('fs');
var keys = require('./keys');


 //var spotify = new Spotify(keys.spotify);
//  var client = new Twitter(keys.twitter);
var client = new twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
access_token_secret: keys.twitterKeys.access_token_secret, 
});
console.log(client)

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
function GetMovieInfo(){
    var request = require("request");
    var nodeArgs = process.argv;
    var movieName = "";
    if (process.argv[3]!==undefined){
      movieName = encodeURI(process.argv[3])
    } else {
      movieName = "Mr. Nobody"
      console.log("Hey if you havent seen it, Mr Nobody is on netflix assuming you have that kind of thing ;)")
    }
    
      var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function(error, response, body) {
      // If the request is successful
      if (!error && response.statusCode === 200) {
    
        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("Title: " +JSON.parse(body).Title);
        console.log("Actors: " +JSON.parse(body).Actors);
        console.log("Plot: " +JSON.parse(body).Plot);
        console.log("Release Language: " +JSON.parse(body).Language);
        console.log("Country of origin: " +JSON.parse(body).Country);
        console.log("Score From " +JSON.parse(body).Ratings[1].Source+" : " +JSON.parse(body).Ratings[1].Value);
        console.log("IMDB Rating: " +JSON.parse(body).imdbRating);
      }
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
    GetMovieInfo()
    break;
    case "do-what-it-says":
    console.log("Do what it says")
    break;
}

