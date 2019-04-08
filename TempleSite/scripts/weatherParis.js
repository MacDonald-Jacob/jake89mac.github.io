let weatherRequest2 = new XMLHttpRequest();

weatherRequest2.open('GET','//api.openweathermap.org/data/2.5/weather?id=2990192&appid=44ae659aedc9547e507e6cd8e21c0f5a&units=imperial', true);

weatherRequest2.send();

weatherRequest2.onload = function(){
    let weatherInfo = JSON.parse(weatherRequest2.responseText);
    console.log(weatherInfo);

    document.getElementById('sky2').innerHTML = weatherInfo.weather["0"].description;
    document.getElementById('temp2').innerHTML = weatherInfo.main.temp;
    document.getElementById('humidity2').innerHTML = weatherInfo.main.humidity;
    document.getElementById('windSpeed2').innerHTML = weatherInfo.wind.speed;

    // Wind Chill
    var temp = parseFloat(document.getElementById('temp2').innerHTML = weatherInfo.main.temp);
    var wind = parseFloat(document.getElementById('windSpeed2').innerHTML = weatherInfo.wind.speed);
    var speed = Math.pow(wind,.16)
    var answer = (35.74 + (0.6215*temp)) - (35.75*speed) + (0.4275*temp*speed)

    document.getElementById("windChill2").innerHTML = Math.round(answer);

}//end of the function

