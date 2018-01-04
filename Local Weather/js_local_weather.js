$(document).ready(function(){
  var long;
  var lat;
  var cel;
  var fah;

  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&" + "lon=" + long, function(data){

        var city = data.name;
        var country = data.sys.country;
        var temp = data.main.temp;
        var tempIcon = data.weather[0].icon;
        var description = data.weather[0].main;
        var wind = data.wind.speed;
        var humidity = data.main.humidity;
        var tempSwitch = true;

        cel = temp.toFixed(1);
        fah = (temp * 1.80 + 32.00).toFixed(1);

        $("#city").html(city + ", ");
        $("#country").html(country);
        $("#temp").html(cel + "°C");
        $("#description").html(description);
        $("#wind").html("<em>Wind: </em>" + wind + " m/s");
        $("#humidity").html("<em>Humidity: </em>" + humidity + "%");


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

        if(description=="Clear"){
          $("body").addClass("clear");
          $("#tempIcon").html("<img src='images/Sunny.png' alt='icon' class='iconSize'>");
        }
        else if(description=="Mist"){
          $("body").addClass("mist");
          $("#tempIcon").html("<img src='images/Fog.png' alt='icon' class='iconSize'>");
        }
        else if(description=="Clouds"){
          $("body").addClass("cloud");
          $("#tempIcon").html("<img src='images/Cloudy.png' alt='icon' class='iconSize'>");
        }
        else if(description=="Drizzle" || description==="Rain"){
          $("body").addClass("rain-drizzle");
          $("#tempIcon").html("<img src='images/Rain.png' alt='icon' class='iconSize'>");
        }
        else if(description=="Snow"){
          $("body").addClass("snow");
          $("#tempIcon").html("<img src='images/Snow.png' alt='icon' class='iconSize'>");
        }
        else if(description=="Thunderstorm" || description=="Extreme"){
          $("body").addClass("thunderstorm-exterme");
          $("#tempIcon").html("<img src='images/Thunderstorms.png' alt='icon' class='iconSize'>");
        }

      });
    });
  }
});
