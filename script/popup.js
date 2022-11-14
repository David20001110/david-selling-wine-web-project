$(document).ready(function () {

  window.onload = function () {
      checkCookie();
  };

  function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }
  function checkCookie() {
      var user = getCookie("age-verified");
      if (user != "") {
          $("#age-verify").addClass("hidden");
      }
  }


  var yesEl = document.getElementById('yes');
  var noEl = document.getElementById('no');

  yesEl.addEventListener('click', function () {
      //document.cookie = 'age-verified; expires=1';
      $('#age-verify').addClass('hidden');
      function setCookie(cname, cvalue, exdays) {
          var d = new Date();
          d.setTime(d.getTime() + (exdays * 1));
          var expires = "expires=" + d.toGMTString();
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
  });

  noEl.addEventListener('click', function () {
      $('#age-text').addClass('hiddenText');
      $('#under-age').removeClass('hiddenText');
      $('#yes').addClass('hiddenText');
      $('#no').addClass('hiddenText');
  });

});
/* function openwin() {   
  　　window.open ("popupform.html", "", "height=200, width=200, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no") //寫成一行 
  　　}   

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })(); */
  