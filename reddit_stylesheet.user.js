// ==UserScript==
// @name hide comment links
// @match http://reddit.com/*
// @match http://www.reddit.com/*
// ==/UserScript==

//
var css = '#siteTable { max-width: 900px; margin-left:30px; margin-top: 20px; } \
           .comments { display:none; }                                          \
           .rank { display:none; }                                              \
           .midcol { display:none; }                                            \
           .entry { margin-bottom: 20px; }                                      \
           .spacer .sidebox { display:none; }                                   \
           .organic-listing { display:none; }                                   \
           .link .flat-list { visibility:hidden; }                              \
           .spacer .sidecontentbox { display:none; }';

var head = document.getElementsByTagName('head')[0];
var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
head.appendChild(style);