$(function () {
  count = 0;
  wordsArray = ["Software Engineer.", "Web Developer.", "Backend Developer."];
  setInterval(function () {
    count++;
    $("#word").fadeOut(500, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500);
    });
  }, 2000);
});
