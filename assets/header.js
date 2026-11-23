/* ABTA header and mobile menu. Edit the lists below to change the header on every page. */
(function(){
var AMI='https://ami.abta.africa';
/* Menu links: [name, address]. The first four are AMI products. */
var PRODUCTS=[['AMI News',AMI+'/'],['CRM',AMI+'/crm/crm.html'],['Mailroom',AMI+'/mailroom.html'],['Dealroom',AMI+'/deal-room.html']];
var ABTA=[['Membership','/membership'],['Events','/upcoming-events'],['About','/about-us']];
/* Extra links shown only in the phone menu */
var PHONE_ONLY=[['Contact','/contact-us'],['Support ABTA','/support']];
/* Gold button */
var BUTTON=['Become a member','/membership#apply'];
var LOGO='/images/logos/abta-logo-blue.png';

function a(l,c){var x=l[1].indexOf(AMI)===0?' target="_blank" rel="noopener"':'';return '<a'+(c?' class="'+c+'"':'')+' href="'+l[1]+'"'+x+'>'+l[0]+'</a>'}
var main=PRODUCTS.concat(ABTA).map(function(l){return a(l)}).join('');
var drawer='<p class="grp">AMI products</p>'+PRODUCTS.map(function(l){return a(l,'l')}).join('')
 +'<p class="grp">ABTA</p>'+ABTA.concat(PHONE_ONLY).map(function(l){return a(l,'l')}).join('');
var h='<header class="site"><div class="wrap">'
 +'<a class="logo" href="/" aria-label="ABTA home"><img src="'+LOGO+'" alt="African Business Trade Association" width="132" height="44"></a>'
 +'<nav class="main" aria-label="Main">'+main+a(BUTTON,'btn btn-gold')+'</nav>'
 +'<button class="burger" id="burger" aria-expanded="false" aria-controls="drawer" aria-label="Menu"><span></span><span></span><span></span></button>'
 +'</div></header>'
 +'<div class="drawer" id="drawer" role="dialog" aria-label="Menu"><div class="dh"><a class="logo" href="/"><img src="'+LOGO+'" alt="ABTA" width="132" height="44"></a>'
 +'<button class="burger" id="drawerClose" aria-label="Close menu" aria-expanded="true"><span></span><span></span><span></span></button></div>'
 +drawer+a(BUTTON,'btn btn-gold')+'</div>';
var s=document.currentScript;
if(s)s.insertAdjacentHTML('beforebegin',h);
})();
