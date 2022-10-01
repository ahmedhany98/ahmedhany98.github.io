function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Changes the active class in the navbar */
$(".topnav a").click(function() {
  $(".topnav a.active").removeClass("active");
  $(this).addClass("active");
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myTopnav").style.top = "0";
    console.log(document.getElementById("myTopnav").style.top);
  }
  else {
    document.getElementById("myTopnav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
  }

  $(function () {
    count = 0;
    wordsArray = ["Software Engineer", "Web Developer"];
    setInterval(function () {
      count++;
      $("#word").fadeOut(500, function () {
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500);
      });
    }, 2000);
  });