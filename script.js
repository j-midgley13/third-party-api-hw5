// start of js and jQuery
// My last block of script I didn't understand!
// I got help from someone but I wasn't quite following more just taking code without understanding.
// Went back to some more original code so I could do my own.
$(document).ready(function() {

    var currentDay = moment().format("MM/DD/YYYY")
    $("#currentDay").text(currentDay)

  $(".time-block").each(function() {
    var hour = moment().hour();
    var j = $(this).data();
    // console.log(j);
    // console.log(hour);
    console.log(this);
    if ($(this) === hour) {
        $(this).addClass("present")
    }
    else if ($(this) > hour) {
        $(this).addClass("future")
    }
    else if ($(this) < hour) {
        $(this).addClass("past")
    }
    
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

// function recallData

});






    






    

