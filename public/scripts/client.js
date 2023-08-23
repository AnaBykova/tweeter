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

Then easily create HTML markup using template literals or template strings.
This function shouldn't insert the created DOM structure to the page. It should instead just return the $tweet
to the caller
*/

console.log("Document is ready!");

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

//////
const loadTweets = function() {
  $.get("/tweets") // Send a GET request to /tweets
    .then(function(tweets) {
      // Once you receive the tweets array from the server, render them on the page
      renderTweets(tweets);
    })
    .catch(function(error) {
      console.error("Error loading tweets:", error);
    });
};

loadTweets();


// Add an event listener to the tweet submission form
$("#tweet-form").submit(function(event) {
  event.preventDefault();

  const formData = $(this).serialize();

  // Send a POST request to the server
  $.post("/tweets", formData)
    .then(function(tweet) {
      console.log("Tweet submitted successfully:", tweet);
      
      // Reload the tweets to display the new tweet
      loadTweets();
      //const $tweet = createTweetElement(tweet);
      //$('#tweets-container').prepend($tweet); // Prepend to show the latest tweet on top
    })
    .catch(function(error) {
      console.error("Error submitting tweet:", error);
    });
});

});

