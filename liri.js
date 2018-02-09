require("dotenv").config('./.env');
var twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require('fs');
var keys = require('./keys');
var argument2 = process.argv[2];
var Input = process.argv[3]


function myTweets() {
    var client = new twitter({
        consumer_key: keys.twitter.consumer_key,
        consumer_secret: keys.twitter.consumer_secret,
        access_token_key: keys.twitter.access_token_key,
        access_token_secret: keys.twitter.access_token_secret,
    });
    var twitterUsername = Input;
    if (!twitterUsername) {
        twitterUsername = "Taylor11355348";
    }
    var space = "\n" + "\n" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
    params = {
        screen_name: twitterUsername
    };
    client.get("statuses/user_timeline/", params, function(error, data, response) {
        if (!error) {
            for (var i = 0; i < data.length; i++) {
                var twitterResults =
                    space + "@" + data[i].user.screen_name + ": " +
                    space + data[i].text + "\r\n" +
                    space + data[i].created_at + "\r\n" +
                    "------------------------------ " + i + " ------------------------------" + "\r\n";
                console.log(twitterResults);

            }
        } else {
            console.log("Error :" + error);
            return;
        }
    });
}


function spotifyThisSong(songName) {

    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
    });


    var songName = Input;
    var space = "\n" + "\n" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
    if (!songName) {
        songName = "The Sign";
    }

    params = songName;
    spotify.search({
        type: 'track',
        query: params
    }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        } else {
            output = "-------------------------------------------------------------" + "\r\n" +
                space + "Song Name: " + "'" + songName.toUpperCase() + "'" +
                space + "Album Name: " + data.tracks.items[0].album.name +
                space + "Artist Name: " + data.tracks.items[0].album.artists[0].name +
                space + "URL: " + data.tracks.items[0].album.external_urls.spotify + "\n\n\n";
            console.log(output);



        };
    });

}
// =




function GetMovieInfo() {
    var request = require("request");
    var movieName = "";
    if (Input !== undefined) {
        movieName = encodeURI(Input)
    } else {
        movieName = "Mr. Nobody"
        console.log("Hey if you havent seen it, Mr Nobody is on netflix assuming you have that kind of thing")
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function(error, response, body) {
        // If the request is successful
        if (!error && response.statusCode === 200) {

            // Parse the body of the site and recover just the imdbRating
            // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Actors: " + JSON.parse(body).Actors);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Release Language: " + JSON.parse(body).Language);
            console.log("Country of origin: " + JSON.parse(body).Country);
            console.log("Score From " + JSON.parse(body).Ratings[1].Source + " : " + JSON.parse(body).Ratings[1].Value);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        }
    });
}


switch (argument2) {

    case "my-tweets":
        myTweets();
        break;
    case "spotify-this-song":

        spotifyThisSong()
        break;
    case "movie-this":

        GetMovieInfo()
        break;
    case "do-what-it-says":
        ReadFile()
        break;
    default:
        console.log("I didnt quite catch that, is " + argument2 + " a real command?")
}

function ReadFile() {
    fs.readFile("random.txt", 'utf8', function(error, data) {
        if (error) throw error;
        loggedTxt = data.split(',');
        var command;
        var selection;
        command = loggedTxt[0];
        selection = loggedTxt[1];
        selection = selection.replace('"', '');
        selection = selection.replace('"', '');

        console.log("Arguement: " + command + " Search: " + selection);
        switch (command) {
            case 'my-tweets':
                Input = selection;
                myTweets();
                break;

            case 'spotify-this-song':
                Input = selection;
                spotifyThisSong();
                break;

            case 'movie-this':
                Input = selection;
                movieThis();
                break;
        }
    })
}