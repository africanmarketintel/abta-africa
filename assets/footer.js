/* ABTA footer. Edit the lists and text below to change the footer on every page. */
(function(){
var AMI='https://ami.abta.africa';
var TAGLINE='Connecting business, trade and investment across Africa.';
var EMAIL='abta@abta.africa';
var PRODUCTS=[['AMI News',AMI+'/'],['CRM',AMI+'/crm/crm.html'],['Mailroom',AMI+'/mailroom.html'],['Dealroom',AMI+'/deal-room.html']];
var ABTA=[['Membership','/membership'],['Events','/upcoming-events'],['News','/news'],['About and team','/about-us'],['Contact','/contact-us'],['Support ABTA','/support']];
var SOCIAL=[['LinkedIn','https://www.linkedin.com/company/african-business-trade-association/'],['YouTube','https://www.youtube.com/@abta.africa'],['Flickr','https://www.flickr.com/photos/abtaafrica/'],['Instagram','https://www.instagram.com/abta.africa/']];
/* Small print under the columns */
var SMALL='&copy; 2026 African Business Trade Association Limited is a company registered in England and Wales, United Kingdom.';
var SMALL_LINKS=[['Legal',AMI+'/legal.html'],['Privacy',AMI+'/privacy.html']];

function ul(list,ext){return '<ul>'+list.map(function(l){var x=l[1].indexOf(AMI)===0?' target="_blank" rel="noopener"':(ext?' rel="noopener"':'');return '<li><a href="'+l[1]+'"'+x+'>'+l[0]+'</a></li>'}).join('')+'</ul>'}
var h='<footer class="site"><div class="wrap"><div class="cols">'
 +'<div><img src="/images/logos/abta-logo.png" alt="African Business Trade Association" width="220" style="filter:brightness(0) invert(1);margin-bottom:12px"><p>'+TAGLINE+'</p><p><a href="mailto:'+EMAIL+'">'+EMAIL+'</a></p></div>'
 +'<div><h4>AMI products</h4>'+ul(PRODUCTS)+'</div>'
 +'<div><h4>ABTA</h4>'+ul(ABTA)+'</div>'
 +'<div><h4>Follow us</h4>'+ul(SOCIAL,true)+'</div>'
 +'</div><div class="small">'+SMALL+'<br>'+SMALL_LINKS.map(function(l){return '<a href="'+l[1]+'">'+l[0]+'</a>'}).join(' &middot; ')+'</div></div></footer>';
var s=document.currentScript;
if(s)s.insertAdjacentHTML('beforebegin',h);
})();
