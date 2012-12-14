// ==UserScript==
// @match http://*/*
// @match https://*/*
// ==/UserScript==

var startTime = new Date().getTime();

var walker = document.createTreeWalker(
  document.body, 
  NodeFilter.SHOW_TEXT, 
  null, 
  false
);

var node;
var replaced = 0;

while(node = walker.nextNode()) {
  if (node.nodeValue.toLowerCase().indexOf('whilst') > -1) {
    node.nodeValue = node.nodeValue.replace(/(whil)st/gi, '$1e');
    replaced++;
  }
}

var elapsed = new Date().getTime() - startTime;
console.log('replaced ' + replaced + ' whilst(s) in ' + elapsed + 'ms');


