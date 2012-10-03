// ==UserScript==
// @name silence comments < 15 words
// @match http://reddit.com/r/*/comments/*
// @match http://www.reddit.com/r/*/comments/*
// ==/UserScript==

/*
 * This hides comments on reddit that are less than (THRESHOLD) words long. 
 * Reddit comments still suck but noticeably less so. Hidden comments
 * are logged to the dev console so you can make sure you're not missing
 * anything good (you're not).
 */

var THRESHOLD = 15;

//TODO: most time is spent in this function
function get_comment_text(comment_elem) {
  var paragraphs = comment_elem.querySelector('.usertext').querySelectorAll('p');
  var paragraph_text = '';
  for (var x = 0; x < paragraphs.length; x++) {
    paragraph_text += paragraphs[x].innerText + ' ';
  }
  return paragraph_text;
}

function hide_comment(comment_elem) {
  comment_elem.style.display = 'none';
}

function count_words(comment_text) {
  return comment_text.split(' ').length;
}

function user_is_asshole(comment_text) {
  var asshole = false;
  var upper = comment_text.toUpperCase();
  if (upper === comment_text) asshole = true;
  if (upper.search('NARWHAL') > -1) asshole = true;
  return asshole;
}

function should_hide(comment_text) {
  return user_is_asshole(comment_text) || count_words(comment_text) < THRESHOLD;
}

var starttime = new Date();
var comments = document.querySelectorAll('div.comment');
var total_hidden = 0;
for (var x = 0; x < comments.length; x++) {
  var comment_text = get_comment_text(comments[x]);

  if (should_hide(comment_text)) {
    console.log('Somebody said:' + comment_text);
    hide_comment(comments[x]);
    total_hidden++;
  }
}

console.log(total_hidden + ' comments hidden in ' + (new Date() - starttime) + 'ms');


