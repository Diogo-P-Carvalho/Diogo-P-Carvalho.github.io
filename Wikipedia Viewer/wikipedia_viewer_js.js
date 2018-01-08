$(document).ready(function(){
  $("#searchText").keyup(function(event){
    if(event.keyCode == 13){
      $("#searchButton").click();
    }
  });
  /*$("#searchText").autocomplete({
    source: function(request, response) {
        $.ajax({
            url: "http://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: {
                'action': "opensearch",
                'format': "json",
                'search': request.term
            },
            success: function(data) {
                response(data[1]);

            }
        });
    }
  });*/

});

function searchWikipedia(){
  var searchText = $("#searchText").val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchText +"&format=json&callback=?";

    $.ajax({
      type: "GET",
      url: url,
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: "json",
      success: function (data) {
        $("#searchResult").html('');
        for(var i=0; i<data[1].length; i++){
          $("#searchResult").prepend("<div class='content img-rounded text-justify'><a class='content-title' target='_blank' href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></div>" );
        }
        $("#searchText").val('');
      },
      error: function (errorMessage) {
       console.log(errorMessage);
      }
  });
}
