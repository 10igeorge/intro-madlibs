$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var blanks = ["time", "clothes1", "clothes2", "food1", "food2", "food3", "vehicle", "adjective", "animal", "noun"]

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);



    });


    $('#story').show();

    event.preventDefault();

  });






});
