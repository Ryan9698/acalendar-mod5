var today = dayjs();
var calendarTimes = document.querySelectorAll(".times")
var getId = []; 

// Pushes the ids from the div containers into an array
$('div.getId div').each(function(times) {
  getId.push($(this).attr('id'));
});
$('#currentDay').text(today.format('dddd, MMM D hh:mmA'));

// var eightAm = $('#0800');
// var nineAm =$('#0900');
// var fivePm = $('#1700');
// eightAm = dayjs("8", "h");
// nineAm = dayjs("9", "h");
// tenAm = dayjs("10", "h");
// elevenAm = dayjs("11", "h");
// noon = dayjs("12", "h");
// onePm = dayjs("13", "h");
// twoPm = dayjs("14", "h");
// threePm = dayjs("15", "h");
// fourPm = dayjs("16", "h")
// fivePm = dayjs("17", "h");
//
 // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function (getId) {
  for (var i = 0; i < getId.length; i++) {

    if (getId[i] < today) {
      console.log("true") } else {
        console.log("false")
      }
    }
  })
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $(document).ready(function(event){
    localId = $(event.target)
    $(".saveBtn").on("click", function() {
        localStorage.setItem($(this).prop("id"), $(this).prev().val());
        console.log(localId + localStorage.getItem($(this).prop("id")));
    })
});
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
