$('body').append('<div style="" id="loadingDiv"><div class="circle"><div class="wrap_img_nearyou"><img src="img/img2.png"></div></div></div>');
        $(window).on('load', function(){
          setTimeout(removeLoader, 1000);
        });

        function removeLoader(){
            $( "#loadingDiv" ).fadeOut(1000, function() {
              $( "#loadingDiv" ).remove();
          });  
          }