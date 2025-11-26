
// Minimal JS for CTA scroll and basic interactivity
document.addEventListener('DOMContentLoaded', function(){
  var ctas = document.querySelectorAll('.cta-btn');
  ctas.forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.preventDefault();
      var el = document.getElementById('purchase');
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});
