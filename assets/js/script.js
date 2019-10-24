function weather( cityID ) {
  var key = '8a1839c44fab815c0b180e396f94cd14';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
  })
  .catch(function() {
    // catch any errors
  });
}

window.onload = function() {
  weather( 6167865 );
}

function drawWeather( d ) {
var celcius = Math.round(parseFloat(d.main.temp)-273.15);
var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 

document.getElementById('descript').innerHTML = d.weather[0].description;
document.getElementById('temp').innerHTML = celcius + '&deg;';
document.getElementById('city').innerHTML = d.name;
document.getElementById('humid').innerHTML = d.main.humidity;
document.getElementById('uvindex').innerHTML = d.main.uv;
document.getElementById('wndspd').innerHTML = d.wind.speed;
}

if( description.indexOf('rain') > 0 ) {
  document.body.className = 'rainy';
} else if( description.indexOf('cloud') > 0 ) {
  document.body.className = 'cloudy';
} else if( description.indexOf('sunny') > 0 ) {
  document.body.className = 'sunny';
}

$("#citySearch").on("click", function(event) {
  event.preventDefault();

  var city = $("#cityName").val();
  var key = '8a1839c44fab815c0b180e396f94cd14';
  var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + ",CA&APPID=" + key;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#city").html("City" + response.name);
    $("#wndspd").text("Wind Speed: " + response.wind.speed);
    $("humid").text("Humidity: " + response.main.humidity);
    $("temp").text("Temperature (C): " + response.main.temp);
  });

});