(function(){
var b=document.getElementById('burger'),d=document.getElementById('drawer');
function set(o){d.classList.toggle('open',o);b.setAttribute('aria-expanded',o);document.body.classList.toggle('lock',o)}
if(b){b.addEventListener('click',function(){set(!d.classList.contains('open'))});
 document.getElementById('drawerClose').addEventListener('click',function(){set(false)});
 d.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
 window.addEventListener('resize',function(){if(innerWidth>=1000)set(false)})}
/* Monthly / Yearly switches */
document.querySelectorAll('[data-switch]').forEach(function(sw){
 var tgt=document.querySelector(sw.getAttribute('data-switch'));
 sw.querySelectorAll('button').forEach(function(btn){btn.addEventListener('click',function(){
  sw.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===btn)});
  tgt.setAttribute('data-period',btn.getAttribute('data-p'))})})});
/* tier lists: closed on phones, open on wide screens */
var mq=matchMedia('(min-width:960px)');function tiers(){document.querySelectorAll('details.more').forEach(function(d){d.open=mq.matches})}
tiers();if(mq.addEventListener)mq.addEventListener('change',tiers);
/* sticky CTA on phones after scrolling */
var s=document.querySelector('.stick');
if(s){var f=function(){s.classList.toggle('on',scrollY>500)};addEventListener('scroll',f,{passive:true});f();document.body.classList.add('has-stick')}
/* event video dialog: loads YouTube only after a press */
(function(){var d=document.getElementById('vid');if(!d||!d.showModal)return;var f=d.querySelector('.vf');
document.querySelectorAll('[data-yt]').forEach(function(b){b.addEventListener('click',function(){f.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+b.getAttribute('data-yt')+'?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="Event video"></iframe>';d.showModal()})});
function c(){f.innerHTML='';if(d.open)d.close()}
d.addEventListener('close',function(){f.innerHTML=''});d.querySelector('.vx').addEventListener('click',c);d.addEventListener('click',function(e){if(e.target===d)c()})})();
/* product showcase tabs */
(function(){var t=document.querySelectorAll('.stabs [data-sp]');if(!t.length)return;
t.forEach(function(b){b.addEventListener('click',function(){t.forEach(function(x){x.setAttribute('aria-selected',x===b?'true':'false');document.getElementById(x.getAttribute('data-sp')).hidden=(x!==b)})})})})();
})();
