// ==UserScript==
// @name hide comment links
// @match http://reddit.com/*
// @match http://www.reddit.com/*
// ==/UserScript==

//
var css = 'a.comments { display:none; }';
var head = document.getElementsByTagName('head')[0];
var style = document.createElement('style');
style.type = 'text/css';

if(style.styleSheet){
    style.styleSheet.cssText = css;
}else{
    style.appendChild(document.createTextNode(css));
}
head.appendChild(style);