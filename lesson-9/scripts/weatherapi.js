let weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET','http://api.openweathermap.org/data/2.5/weather?id=5061036&appid=44ae659aedc9547e507e6cd8e21c0f5a&units=imperial', true);

weatherRequest.send();

weatherRequest.onload = function(){
    let weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('current-temp').innerHTML = weatherInfo.main.temp;

}//end of the function

