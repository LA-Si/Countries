body #ABOUT
<script>
  window.onscroll = function() {scrollFunction()};

  function scrollFunction()
    {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbarAbout").style.padding = "30px 10px";
      document.getElementById("logo").style.fontSize = "25px";
    } else {
      document.getElementById("navbarAbout").style.padding = "80px 10px";
      document.getElementById("logo").style.fontSize = "35px";
    }
    }
  </script>
  
