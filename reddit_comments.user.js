// ==UserScript==
// @name hide comment links
// @match http://reddit.com/*
// @match http://www.reddit.com/*
// ==/UserScript==

//
var css = '#siteTable { max-width: 900px; margin-left:40px; }       \
           .comments { display:none; }                              \
           .rank { display:none; }                                  \
           .midcol { display:none; }                                \
           .entry { margin-bottom: 20px; }                          \
           .spacer .sidebox { display:none; }                       \
           .organic-listing { visibility:hidden; min-height:20px; } \
           .spacer .sidecontentbox { display:none; }';

var head = document.getElementsByTagName('head')[0];
var style = document.createElement('style');
style.type = 'text/css';

if(style.styleSheet){
    style.styleSheet.cssText = css;
}else{
    style.appendChild(document.createTextNode(css));
}
head.appendChild(style);