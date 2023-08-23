//This file is solely responsible for character counter - 140

$(document).ready(function() {
  const $tweetText = $('#tweet-text');
  const $counter = $('.counter');
  const maxLength = 140;
  const $submitButton = $('#submit-button');

  // Register an input event handler on the textarea
  $tweetText.on('input', function() {
    
    const currentLength = $(this).val().length;
    
    $counter.text(maxLength - currentLength);
    if (currentLength > maxLength) {
      $counter.addClass('over-limit');
    } else {
      $counter.removeClass('over-limit');
    }
  }); 
  $submitButton.on('click', function() {
    $counter.text(maxLength);
  }
  )
});