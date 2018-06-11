function destination(landmark, timeOfDay, note) {
  this.landmark = landmark;
  this.timeOfDay = timeOfDay;
  this.note = note;
  this.locals = [];
}

function local(city, state) {
  this.city = city;
  this.state = state;
}

local.prototype.fullLocation = function() {
  return this.city + ", " + this.state;
}

$(function() {
  $("#destinationForm").submit(function(event){
    event.preventDefault();

    var landmark = $(this).find("input#landmark").val();
    console.log(landmark);

  });

});
