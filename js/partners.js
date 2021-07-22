$(function(){
    // vars for clients list carousel
     // http://stackoverflow.com/questions/6759494/jquery-function-definition-in-a-carousel-script
     var $clientcarousel = $('#clients-list');
     var clients = $clientcarousel.children().length;
     var clientwidth = (clients * 220); // 140px width for each client item 
     $clientcarousel.css('width',clientwidth);
     
     var rotating = true;
     var clientspeed = 0;
     var seeclients = setInterval(rotateClients, clientspeed);
     
     $(document).on({
       mouseenter: function(){
         rotating = false; // turn off rotation when hovering
       },
       mouseleave: function(){
         rotating = true;
       }
     }, '#clients');
     
     function rotateClients() {
       if(rotating != false) {
         var $first = $('#clients-list li:first');
         $first.animate({ 'margin-left': '-220px' }, 2000, "linear", function() {
           $first.remove().css({ 'margin-left': '0px' });
           $('#clients-list li:last').after($first);
         });
       }
     }
   });
   