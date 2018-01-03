var apiKey = "8c5b98b2028aabf96f925a9df1a79eb6";

$(document).ready(function() {

  $.getJSON('http://ipinfo.io/geo', function(data) {
    var location = data.loc;
    var locationArr = location.split(",");
    var lat = locationArr[0];
    var long = locationArr[1];

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + apiKey, function(data) {
      var city = data.name;
      var country = data.sys.country;
      var temp = data.main.temp;
      var tempIcon = data.weather[0].icon;
      var description = data.weather[0].main;
      var wind = data.wind.speed;
      var humidity = data.main.humidity;

      var cel = temp - 273.15;
      var fah = (temp - 273.15) * 1.8000 + 32.00;

      var tempSwitch = true;

      $("#city").html(city + ", ");
      $("#country").html(country);
      $("#temp").html(cel + "°C");
      $("#tempIcon").html('<img src="http://openweathermap.org/img/w/' + tempIcon + '.png"alt="icon"> </img>');
      $("#description").html(description);
      $("#wind").html("<em>Wind: </em>" + wind + " m/s");
      $("#humidity").html("<em>Humidity: </em>" + humidity + "%");

      if(description=="Clear"){
        $("body").addClass("clear");
      }
      else if(description=="Atmosphere"){
        $("body").addClass("mist");
      }
      else if(description=="Clouds"){
        $("body").addClass("clouds");
      }
      else if(description=="Drizzle" || description==="Rain"){
        $("body").addClass("rain-drizzle");
      }
      else if(description=="Snow"){
        $("body").addClass("snow");
      }
      else if(description=="Thunderstorm" || description=="Extreme"){
        $("body").addClass("thunderstorm-exterme");
      }

      $("#tempSwitch").on("click", function(){
        if(tempSwitch===true){
          $("#temp").html(fah + "°F");
          $("#tempSwitch").html("Celsius");
          tempSwitch = false;
        }
        else {
          $("#temp").html(cel + "°C");
          $("#tempSwitch").html("Fahrenheit");
          tempSwitch = true;
        }
      });
    });
  });
});
