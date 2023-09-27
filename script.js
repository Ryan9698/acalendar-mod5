// Calls the current time at the time of page load
var today = dayjs();
// Format for dayJS on page
$('#currentDay').text(today.format('dddd, MMM D hh:mmA'));


// For loop created to check dayjs against the id names to decipher what classes should be used.
$(function (currentHour) {
  var currentHour = dayjs().hour()
  
  for(let i=8;i<=17;i++){
    // Used to get the information saved on local storage and display in textarea based on id
    var storedData = localStorage.getItem(i) 
    $("#"+i).children("textarea").val(storedData)
    
    if(i<currentHour){
      $("#"+i).children("textarea").addClass("past"); }
    else if(i === currentHour) {
      $("#"+i).children("textarea").addClass("present");} 
    else {
      $("#"+i).children("textarea").addClass("future");
    }
  }
  });

  // Click event created to save information to local storage based on id.
    $(".saveBtn").on("click", function(e) {
      e.preventDefault();
      var getId = $(this).parent().attr("id");
      var getText = $(this).siblings(".description").val();
      localStorage.setItem(getId, getText);
      console.log(getId, getText)
    });


