$(document).ready(function(){
        var myNavBar = {

          flagAdd: true,
          elements: [],
          init: function (elements) {
              this.elements = elements;
          },

          add : function() {
              if(this.flagAdd) {
                  for(var i=0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className += " fixed-theme";
                  }
                  this.flagAdd = false;
              }
          },

          remove: function() {
              for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className =
                document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
              }
              this.flagAdd = true;
          }
      };

      myNavBar.init(  [
          "header",
          "header-container",
          "brand"
      ]);

      function offSetManager(){
          var yOffset = 0;
          var currYOffSet = window.pageYOffset;

          if(yOffset < currYOffSet) {
              myNavBar.add();
          }
          else if(currYOffSet == yOffset){
              myNavBar.remove();
          }
      }

      window.onscroll = function(e) {
          offSetManager();
      }
      offSetManager();
      });

      $(document).ready(function(){ 
        $(".dislike").click(function() { 
          $(".hide_onclick").fadeOut("slow"); 
        });
      });
      $(document).ready(function(){ 
        $(".like").click(function() { 
          $(".hide_onclick").fadeOut("slow"); 
          $(".wrap_heart").fadeIn("slow");
          setTimeout(function() {
            $('.wrap_heart').fadeOut('fast');
          }, 1000);
          
        });

  


        $('body').append('<div style="" id="loadingDiv"><div class="circle"><div class="wrap_img_nearyou"><img src="img/img2.png"><br/>span>Finding people near you...</span></div></div></div>');
        $(window).on('load', function(){
          setTimeout(removeLoader, 3000);
        });

        function removeLoader(){
            $( "#loadingDiv" ).fadeOut(1000, function() {
              $( "#loadingDiv" ).remove();
          });  
          }

      });