let forecastRequest = new XMLHttpRequest();

forecastRequest.open('GET','//api.openweathermap.org/data/2.5/forecast?id=5061036&appid=44ae659aedc9547e507e6cd8e21c0f5a&units=imperial', true);

forecastRequest.send();

forecastRequest.onload = function(){
    let forecastInfo = JSON.parse(forecastRequest.responseText);
    console.log(forecastInfo);

    document.getElementById('day1').innerHTML = forecastInfo.list[4].dt_txt;
    document.getElementById('day2').innerHTML = forecastInfo.list[12].dt_txt;
    document.getElementById('day3').innerHTML = forecastInfo.list[20].dt_txt;
    document.getElementById('day4').innerHTML = forecastInfo.list[28].dt_txt;
    document.getElementById('day5').innerHTML = forecastInfo.list[36].dt_txt;

    
    document.getElementById('description1').innerHTML = forecastInfo.list[4].weather["0"].description;
    document.getElementById('description2').innerHTML = forecastInfo.list[12].weather["0"].description;
    document.getElementById('description3').innerHTML = forecastInfo.list[20].weather["0"].description;
    document.getElementById('description4').innerHTML = forecastInfo.list[28].weather["0"].description;
    document.getElementById('description5').innerHTML = forecastInfo.list[36].weather["0"].description;

    document.getElementById('high1').innerHTML = forecastInfo.list[4].main.temp_max;
    document.getElementById('high2').innerHTML = forecastInfo.list[12].main.temp_max;
    document.getElementById('high3').innerHTML = forecastInfo.list[20].main.temp_max;
    document.getElementById('high4').innerHTML = forecastInfo.list[28].main.temp_max;
    document.getElementById('high5').innerHTML = forecastInfo.list[36].main.temp_max;

    document.getElementById('low1').innerHTML = forecastInfo.list[4].main.temp_min;
    document.getElementById('low2').innerHTML = forecastInfo.list[12].main.temp_min;
    document.getElementById('low3').innerHTML = forecastInfo.list[20].main.temp_min;
    document.getElementById('low4').innerHTML = forecastInfo.list[28].main.temp_min;
    document.getElementById('low5').innerHTML = forecastInfo.list[36].main.temp_min;

    document.getElementById('wind1').innerHTML = forecastInfo.list[4].wind.speed;
    document.getElementById('wind2').innerHTML = forecastInfo.list[12].wind.speed;
    document.getElementById('wind3').innerHTML = forecastInfo.list[20].wind.speed;
    document.getElementById('wind4').innerHTML = forecastInfo.list[28].wind.speed;
    document.getElementById('wind5').innerHTML = forecastInfo.list[36].wind.speed;


    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var n = weekday[d.getDay()];
    document.getElementById("day1").innerHTML = n;
  


}