function myFunction2(){
    var low = parseFloat(document.getElementById("lowTemp").textContent);
    var high = parseFloat(document.getElementById("highTemp").textContent);
    var wind = parseFloat(document.getElementById("windSpeed").textContent);

    var temp = (low + high)/2;
    var speed= Math.pow(wind,.16)
    var answer = (35.74 + (0.6215*temp)) - (35.75*speed) + (0.4275*temp*speed)

    document.getElementById("windChill").innerHTML = Math.round(answer);
}
myFunction2()

//f=35.74 + 0.6215t - 35.75s^0.16 + 0.4275t s^0.16
// t is the air average temerature fahrenheit and s is the wind speed in mph