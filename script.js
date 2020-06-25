// start of js and jQuery
// Just getting formatting for rows
var currentDay = moment().format("MM/DD/YYYY")
$("#currentDay").text(currentDay)

var hourRow = $("<div>").addClass("row");

var hourBlock = $("<textarea>").addClass("hour").text("9 am");

var notesBlock = $("<input>").addClass("time-block").attr("placeholder", "Enter Notes");

var saveBtn = $("<button>").addClass("saveBtn").text("save");

hourRow.append(hourBlock).append(notesBlock).append(saveBtn);

var container = $(".container").append(hourRow);

