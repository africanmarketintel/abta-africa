(function(){
var C=window.ABTA||{};
function post(path,data){
  return fetch(C.FUNCTIONS_URL+"/"+path,{method:"POST",headers:{"Content-Type":"application/json","apikey":C.ANON_KEY,"Authorization":"Bearer "+C.ANON_KEY},body:JSON.stringify(data)})
   .then(function(r){return r.json().catch(function(){return{}}).then(function(j){if(!r.ok)throw new Error(j.error||"error");return j})});
}
function show(box,ok,text){box.className="msg "+(ok?"ok":"err");box.textContent=text}
document.querySelectorAll("form[data-form]").forEach(function(f){
  f.addEventListener("submit",function(ev){
    ev.preventDefault();
    var box=f.querySelector(".msg"),btn=f.querySelector("button[type=submit]");
    if(!f.checkValidity()){f.reportValidity();return}
    if(!C.FUNCTIONS_URL||C.FUNCTIONS_URL.indexOf("YOUR-PROJECT")>-1){show(box,false,"This form is not switched on yet. Please email abta@abta.africa.");return}
    var d={type:f.getAttribute("data-form")};
    new FormData(f).forEach(function(v,k){d[k]=v});
    var old=btn.textContent;btn.disabled=true;btn.textContent="Sending…";
    var path=(d.type==="support")?"abta-checkout":"abta-forms";
    post(path,d).then(function(j){
      if(j.checkout_url){show(box,true,"Thank you. Taking you to secure payment…");location.href=j.checkout_url;return}
      f.reset();btn.textContent=old;btn.disabled=false;
      show(box,true,j.message||"Thank you. We have received your message and will reply by email.");
      if(d.type==="membership"&&j.pay){var a=document.createElement("a");a.className="btn btn-gold";a.style.marginTop="12px";a.style.width="100%";a.textContent="Pay for your membership";a.href="#";a.addEventListener("click",function(e2){e2.preventDefault();a.textContent="Opening payment…";post("abta-checkout",{type:"membership",application_id:j.application_id,tier:d.tier,period:d.period,email:d.email}).then(function(k){location.href=k.checkout_url}).catch(function(){a.textContent="Payment could not start. We will email you a payment link."})});box.appendChild(document.createElement("br"));box.appendChild(a)}
    }).catch(function(){btn.disabled=false;btn.textContent=old;show(box,false,"Sorry, that did not send. Please try again or email abta@abta.africa.")});
  });
});
})();
