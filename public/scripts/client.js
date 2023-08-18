/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

/*
create a JavaScript function that will generate the DOM structure for a tweet, given a tweet object
(creating markup dynamically with libraries like jQuery).

Define a function createTweetElement that takes in a tweet object and is responsible for returning
a tweet <article> element containing the entire HTML structure of the tweet.

The tweet data object that the function will take will have all the necessary tweet data:

{
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
}

Start by having your function create hardcoded tweets, like so:
const $tweet = $(`<article class="tweet">Hello world</article>`);

Then easily create HTML markup using template literals or template strings.
This function shouldn't insert the created DOM structure to the page. It should instead just return the $tweet
to the caller

*/
console.log("Document is ready!");

/*
$(document).ready(function() {
  function createTweetElement(tweetData) {
    const $tweet = $(`
      <article>
        <header class="tweet-div">
          <div class="tweet-div">
            <div class="div-group">
              <div class="profile-image"><img src="${tweetData.user.avatars}" alt="user's profile photo"></div>
              <div><p>${tweetData.user.name}</p></div>
            </div>
            <div class="user-email">
              <p>${tweetData.user.handle}</p>
            </div>
          </div>
        </header>
  
        <div class="user-tweets">
          <p id="user-tweets-text">${tweetData.content.text}</p>
        </div>
            
        <footer class="tweet-div">
          <div class="tweet-div">
            <div class="timestamp">
              <p>Posted ${tweetData.created_at}</p>
            </div>
            <div class="div-group">
              <div class="actions"><i class="fa-solid fa-flag"></i></div>
              <div class="actions"><i class="fa-solid fa-retweet"></i></div>
              <div class="actions"><i class="fa-solid fa-heart"></i></div>
            </div>
          </div>
        </footer>
      </article>
    `);
  
    return $tweet;
  }
  /*console.log("this is timeago", timeago);*/

  // Test / driver code (temporary)
  /*
  const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }
  ]
  
  const $tweet = createTweetElement(tweetData[0]);
  
  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page
});
*/

$(document).ready(function() {
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    console.log($tweet);
    $('#tweets-container').append($tweet);
  }
}

const createTweetElement = function(tweet) {
  const $tweet = $(`
    <article>
      <header class="tweet-div">
        <div class="tweet-div">
          <div class="div-group">
            <div class="profile-image"><img src="${tweet.user.avatars}" alt="user's profile photo"></div>
            <div><p>${tweet.user.name}</p></div>
          </div>
          <div class="user-email">
            <p>${tweet.user.handle}</p>
          </div>
        </div>
      </header>

      <div class="user-tweets">
        <p class="user-tweets-text">${tweet.content.text}</p>
      </div>
      
      <footer class="tweet-div">
        <div class="tweet-div">
          <div class="timestamp">
            <p>Posted ${tweet.created_at}</p>
          </div>
          <div class="div-group">
            <div class="actions"><i class="fa-solid fa-flag"></i></div>
            <div class="actions"><i class="fa-solid fa-retweet"></i></div>
            <div class="actions"><i class="fa-solid fa-heart"></i></div>
          </div>
        </div>
      </footer>
    </article>
  `);
  return $tweet;
}

renderTweets(data);
});