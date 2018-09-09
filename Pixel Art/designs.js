
// On document.ready creates all event listiners we need to create and draw on the Grid

$(function(){

  // when submit calls the makeGrid function
  $("#sizePicker").on("submit", function(e){
    e.preventDefault();
    makeGrid();
  });

  // on click reset button will clean the draw
  $("#resButton").on("click", function(e){
    e.preventDefault();
    $("td").css("background-color", "white");
  });


  // gets the value of the color chosen
  var color = $("#colorPicker").val();

  $("#colorPicker").change(function(){
    color = $("#colorPicker").val();
  });

  // on mouse dbclick resets that cell to original color
  $("#pixel_canvas").on("dblclick", "td", function(){
    $(this).css("background-color", "white");
  });

  // on mouse click applies the chosen color to that cell
  $("#pixel_canvas").on("click", "td", function(){
    $(this).css("background-color", color);
  });

  // when moving the mouse while clicking mouse1 paint all cells he passes
  $("#pixel_canvas").on("mousemove", "td", function(e){
    if(e.buttons==1){
      $(this).css("background-color", color);
    }
  });

});

/** function picks values for height and width to create a table
  * before creating a new one cleans the previous one
  * loops through the values of height and width greating rows and cells
  * resets input fields values to 1  
*/

function makeGrid(){
  var h = $("#input_height").val();
  var w = $("#input_width").val();
  var canvas = document.getElementById("pixel_canvas");

  $("#pixel_canvas").empty();

  for(var i = 1; i<=h; i++){
    var row = document.createElement("tr");
    canvas.appendChild(row);
    for (var j = 1; j <= w; j++) {
      var col = document.createElement("td");
      row.appendChild(col);
    }
  }

  $("#input_height").val("1");
  $("#input_width").val("1");
  $("input").blur();

}
