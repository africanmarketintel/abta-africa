/* Support ABTA bar. Edit the three values below to change the bar on every page. */
(function(){
var TITLE='Support ABTA';
var TEXT='Support our work from £3 a month.';
var BUTTON='Find out more';
var LINK='/support';
var s=document.currentScript;
if(!s)return;
s.insertAdjacentHTML('beforebegin','<div class="topbar"><div class="wrap"><div class="t"><b>'+TITLE+'</b><span>'+TEXT+'</span></div><a class="btn btn-gold" href="'+LINK+'">'+BUTTON+'</a></div></div>');
})();
