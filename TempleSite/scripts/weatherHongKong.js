let weatherRequest3 = new XMLHttpRequest();

weatherRequest3.open('GET','//api.openweathermap.org/data/2.5/weather?id=1819414&appid=44ae659aedc9547e507e6cd8e21c0f5a&units=imperial', true);

weatherRequest3.send();

weatherRequest3.onload = function(){
    let weatherInfo = JSON.parse(weatherRequest3.responseText);
    console.log(weatherInfo);

    document.getElementById('sky3').innerHTML = weatherInfo.weather["0"].description;
    document.getElementById('temp3').innerHTML = weatherInfo.main.temp;
    document.getElementById('humidity3').innerHTML = weatherInfo.main.humidity;
    document.getElementById('windSpeed3').innerHTML = weatherInfo.wind.speed;

    // Wind Chill
    var temp = parseFloat(document.getElementById('temp3').innerHTML = weatherInfo.main.temp);
    var wind = parseFloat(document.getElementById('windSpeed3').innerHTML = weatherInfo.wind.speed);
    var speed = Math.pow(wind,.16)
    var answer = (35.74 + (0.6215*temp)) - (35.75*speed) + (0.4275*temp*speed)

    document.getElementById("windChill3").innerHTML = Math.round(answer);

}//end of the function