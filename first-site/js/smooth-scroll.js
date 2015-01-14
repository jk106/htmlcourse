var scroll= function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top -50
     }, 500, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

}
$(".navbar-collapse ul li a[href^='#']").on('click', scroll);
$("a.navbar-brand[href^='#']").on('click', scroll);
$("#back-to-top a[href^='#']").on('click', scroll);