// start of js and jQuery
// My last block of script I didn't understand!
// I got help from someone but I wasn't quite following more just taking code without understanding.
// Went back to some more original code so I could do my own.
$(document).ready(function() {

    var currentDay = moment().format("MM/DD/YYYY")
    $("#currentDay").text(currentDay)

  $(".time-block").each(function() {
    var hour = moment().hour();
    // console.log(hour);
    // console.log(this);
    var data = $(this).data();
    console.log(data);
    if (data > hour) {
        $(this).addClass("future")
    }
    else if (data < hour) {
        $(this).addClass("past")
    }
    else {
        $(this).addClass("past")
    }
    console.log(this);
  }); 


    $(".saveBtn").click(function (event) {
        console.log("Save Button Clicked");
        event.preventDefault();

            var logBtn = $(this);
            console.log(this);
            var hourValue = logBtn.siblings("div").data();
            console.log(hourValue);

            var notesValue = logBtn.siblings("textarea").val().trim();
            console.log(notesValue);

            localStorage.setItem(JSON.stringify(hourValue), notesValue);
            // localStorage.setItem("Notes", notesValue);

            var input = localStorage.getItem(notesValue);

            $(this).siblings("input").val(notesValue);


    });



});






    






    

