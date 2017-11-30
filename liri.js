var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
// var Movie = require("Movie");
// console.log(keys);

console.log(process.argv[2])
var userInput = process.argv[2];
// Make it so liri.js can take in one of the following commands:
// if (userInput === "my-tweets") {
//     getTweets()
// }
// else if (userInput === "spotify-this-song"){

// }

// for(var i = 0; i < 123; i++) {
//     console.log(i);
//     if (i == 21) {
//         break;
//     }
// }


// my-tweets

// spotify-this-song

// movie-this

// do-what-it-says

switch (userInput) {
    case "my-tweets":
         getTweets()
        break;
    case "spotify-this-song":
        getSpotify()
         break;
    case "movie-this":
        getMovies()
        break;
    case "do-what-it-says":
        sayWhat()
        break;


    default:
        console.log("Sorry i cannot do that for you, PLease ask me (my-tweets, spotify-this-song, movie-thisdo-what-it-says)");
        break;
}

function getTweets (){

    var client = new Twitter(keys.tKeys);

    var params = { screen_name: 'realdonaldtrump' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets.length);
            for(var i = 0; i < tweets.length; i++){
                console.log("======================");
                console.log(tweets[i].user.name);
                console.log(tweets[i].text);

            }
        }
    });

}

function getSpotify () {
    // Artist(s)

    // The song's name

    // A preview link of the song from Spotify

    // The album that the song is from
    var userSongSearch = "";
    for(var i = 3; i < process.argv.length; i++){
        if(userSongSearch == "") {
            userSongSearch = userSongSearch + process.argv[i];
        }else {
            userSongSearch = userSongSearch + " " + process.argv[i];
        }
    }
    console.log(userSongSearch);

    var spotify = new Spotify(keys.sKeys);

    spotify.search({type: 'track', query: userSongSearch }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("Artist: ", data.tracks.items[0].artists[0].name); 
        console.log("Name: ", data.tracks.items[0].name); 
        console.log("Link: ", data.tracks.items[0].external_urls.spotify); 
        console.log("Album: ", data.tracks.items[0].album.name); 
    });
};
function getMovies () {
    
    };
    
    function sayWhat () {
    
    };
    

// function getMovies () {

//     // taking movie search
//     var userMovieSearch ="";
//         for(var i = 3; i < process.argv.length; i++){
//             if(userMovieSearch == "") {
//                 userMovieSearch = userMovieSearch + process.argv[i];
//             }else {
//                 userMovieSearch = userMovieSearch + " " + process.argv[i];
//             }
//         }
//         console.log(getmovies);

//     // Movie("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy");
//     // * Title of the movie.
//     // * Year the movie came out.
//     // * IMDB Rating of the movie.
//     // * Rotten Tomatoes Rating of the movie.
//     // * Country where the movie was produced.
//     // * Language of the movie.
//     // * Plot of the movie.
//     // * Actors in the movie.
//         // console.log("Title: " + JSON.parse(body)["Title"]);
//         // console.log("Year: " + JSON.parse(body)["Year"]);
//         // console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
//         // console.log("Country: " + JSON.parse(body)["Country"]);
//         // console.log("Language: " + JSON.parse(body)["Language"]);
//         // console.log("Plot: " + JSON.parse(body)["Plot"]);
//         // console.log("Actors: " + JSON.parse(body)["Actors"]);
//         // console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
//         // console.log("Rotten Tomatoes URL: " + JSON.parse(body)["tomatoURL"]);
// };

// function sayWhat () {

// };
