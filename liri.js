
require("dotenv").config();

var keys = require('./keys.js');

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');

var client = new Twitter(keys.twitter);

var fs = require('fs');

params = {
    screen_name: "raven_codes",
    count: 5
};

var latestTweets = function () {
    client.get('statuses/user_timeline', params, function (error, tweets,
        response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at);
                console.log('------------------');
                console.log(tweets[i].text);
            }

        }
    });

}

var getArtistName = function(artist) {
    return artist.name;
  }
  
  
  var song = function(songName) {
    var spotify = new Spotify(keys.spotify);
    spotify.search({
        type: 'track',
        query: songName,
      },
      function(err, data) {
        if (err) {
          console.log(err);
          return;
        }
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
          console.log(i);
          // console.log(songs[i])
          console.log('artist:' + songs[i].artists.map(function(artist) {
            return artist.name
          }))
          console.log('song name:' + songs[i].name);
          console.log('album name:' + songs[i].album.name);
          console.log('preview song:' + songs[i].preview_url);
          console.log('---------------------');
  
        }
      });
  }
 
 /* var run = function(arg1, arg2) {
  choose(arg1, arg2);
 
 };
 run(process.argv[2], process.argv[3]);

var choose = function (command, functionData) {
    switch (command) {
        case 'my-latest-tweets':
            latestTweets();
            break;
        default:
            console.log('???');
    }
}

var run = function (arg1, arg2) {
    choose(arg1, arg2);
};
run(process.argv[2], process.argv[3]); */