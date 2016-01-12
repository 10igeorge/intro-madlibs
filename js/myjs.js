$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var timeInput = $("input#time").val();
    var clothes1Input = $("input#clothes1").val();
    var clothes2Input = $("input#clothes2").val();
    var food1Input = $("input#food1").val();
    var food2Input = $("input#food2").val();
    var food3Input = $("input#food3").val();
    var vehicleInput = $("input#vehicle").val();
    var adjectiveInput = $("input#adjective").val();
    var animalInput = $("input#animal").val();
    var nounInput = $("input#noun").val();


    $('.time').text(timeInput);
    $('.clothes1').text(clothes1Input);
    $('.clothes2').text(clothes2Input);
    $('.food1').text(food1Input);
    $('.food2').text(food2Input);
    $('.food3').text(food3Input);
    $('.vehicle').text(vehicleInput);
    $('.adjective').text(adjectiveInput);
    $('.animal').text(animalInput);
    $('.noun').text(nounInput);

    $('#story').show();

    event.preventDefault();

  });






});
