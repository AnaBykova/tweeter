//This file is solely responsible for character counter - 140

$(document).ready(function() {
  const $tweetText = $('#tweet-text');
  const $counter = $('.counter');

  // Register an input event handler on the textarea
  $tweetText.on('input', function() {
    const maxLength = 140;
    const currentLength = $(this).val().length;
    
    $counter.text(maxLength - currentLength);
    if (currentLength > maxLength) {
      $counter.addClass('over-limit');
    } else {
      $counter.removeClass('over-limit');
    }
  });
});