// start of js and jQuery
// Just getting formatting for rows
var currentDay = moment().format("MM/DD/YYYY")
$("#currentDay").text(currentDay)

// var hourRow = $("<div>").addClass("row");

// var hourBlock = $("<textarea>").addClass("hour").text("9 am");

// var notesBlock = $("<input>").addClass("time-block").attr("placeholder", "Enter Notes");

// var saveBtn = $("<button>").addClass("saveBtn").text("save");

// hourRow.append(hourBlock).append(notesBlock).append(saveBtn);

// var container = $(".container").append(hourRow);

dayPlanner();

function dayPlanner() {
    console.log("dayPlanner function");

    var hour = ["9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];

    for (let i = 0; i < hour.length; i++) {
        
        var hourBlock = $("<textarea>").addClass("hour").attr("data-value", i).text(hour[i]);

        var notesBlock = $("<input>").addClass("time-block").attr("placeholder", "Enter Notes");

        var saveBtn = $("<button>").addClass("saveBtn").text("save");

        var hourRow = $("<div>").addClass("row");

        hourRow.append(hourBlock).append(notesBlock).append(saveBtn);

        var container = $(".container").append(hourRow);
        
    }

    $(".saveBtn").click(function (event) {
        console.log("save button clicked");
        event.preventDefault();

        // var logBtn = $(this);
        // var hourValue = logBtn.
        // ^ Need to access hour value of button-clicked row!
        
        

    })

    


}



    

