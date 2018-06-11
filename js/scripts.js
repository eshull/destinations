function Destination(landmark, timeOfDay, note) {
  this.landmark = landmark;
  this.timeOfDay = timeOfDay;
  this.note = note;
  this.locals = [];
}

function Local(city, state) {
  this.city = city;
  this.state = state;
}

Local.prototype.fullLocation = function() {
  return this.city + ", " + this.state;
}

$(function() {
  $("#destinationForm").submit(function(event){
    event.preventDefault();
    // collect info from form and store in variables
    var landmark = $(this).find("input#landmark").val();
    var timeOfDay = $(this).find("input#timeOfDay").val();
    var note = $(this).find("input#note").val();
    var city = $(this).find("input#city").val();
    var state = $(this).find("input#state").val();
    // use variables as arguments in objects and store output in new variables
    var newDestination = new Destination(landmark, timeOfDay, note);
    var newLocal = new Local(city, state);
    // taking the information from the new variable it pushes it into the locals empty array inside the object Destination and pushes it into newDestination
     newDestination.locals.push(newLocal);


    $("#destinations").append("<p class='instance'>" + newDestination.landmark + "</p>");

    $(".instance").last().click(function() {
      $("#show-destinations").show();
      $("#show-destinations h2").text(newDestination.landmark);
      $(".timeOfDay").text(newDestination.timeOfDay);
      $(".note").text(newDestination.note);
      $(".local").text(newDestination.locals[0].fullLocation());
      console.log(newDestination.locals);
      console.log(newLocal);
      // $(".local").text(newLocal.fullLocation());

    });



  });

});
