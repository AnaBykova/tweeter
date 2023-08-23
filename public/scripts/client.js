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
            <p>Posted ${timeago.format(tweet.created_at)}</p>
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

// Add an event listener to the tweet submission form
$("#tweet-form").submit(function(event) {
  event.preventDefault();

  const tweetContent = $("#tweet-text").val(); // Get the tweet content from the form

    // Validate the tweet content
    if (!tweetContent) {
      alert("Tweet content cannot be empty.");
    } else if (tweetContent.length > 140) {
      alert("Tweet is too long. Please make it 140 characters or less.");
    } else {
      const formData = $(this).serialize();
    
  // Send a POST request to the server
    $.post("/tweets", formData)
      .then(function(tweet) {
        console.log("Tweet submitted successfully:", tweet);
        loadTweets();      
      })
      .catch(function(error) {
        console.error("Error submitting tweet:", error);
      });
    }

});

const loadTweets = function() {
  $.get("/tweets")
    .then(function(tweets) {
      renderTweets(tweets);
    })
    .catch(function(error) {
      console.error("Error loading tweets:", error);
    });
};

loadTweets();

});

