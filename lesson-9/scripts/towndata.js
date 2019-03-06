// Download and store the URL
var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

// Create a new request
var request = new XMLHttpRequest();

// Open the Request (GET makes the network request / URL of the JSON file above
request.open('Get', requestURL);

// Set response type to JSON
request.responseType = 'json';

// Send the request
request.send();

// Store the response to the request
request.onload = function() {
  var townData = request.response;
  showData(townData);
}

// Create and populate the cards

function showData(jsonObj) {
  var places = jsonObj['towns'];
  
for (var i = 0; i < places.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myPara5 = document.createElement('p');
    var myList = document.createElement('ul');
    var myImg = document.createElement('img');
    
    if (places[i].name == "Franklin") {
      myImg.setAttribute('src', 'images/homepage/Franklin1.jpg');
      myImg.setAttribute('alt', 'Franklin');
  } else if (places[i].name == "Fish Haven") {
      myImg.setAttribute('src', 'images/homepage/fishhaven1.jpg');
      myImg.setAttribute('alt', 'Fish Haven');
  } else if (places[i].name == "Greenville") {
      myImg.setAttribute('src','images/homepage/Greenville1.jpg');
      myImg.setAttribute('alt', 'Greenville');
  } else if (places[i].name == "Placerton") {
      myImg.setAttribute('src','images/homepage/placerton1.jpg');
      myImg.setAttribute('alt', 'Placerton');
  } else if (places[i].name == "Preston") {
      myImg.setAttribute('src','images/homepage/preston1.jpg');
      myImg.setAttribute('alt', 'Preston');
  } else if (places[i].name == "Soda Springs") {
      myImg.setAttribute('src','images/homepage/sodasprings1.jpg');
      myImg.setAttribute('alt', 'Soda Springs');
  } else if (places[i].name == "Springfield") {
      myImg.setAttribute('src','images/homepage/springfield1.jpg');
      myImg.setAttribute('alt', 'Springfield');
  }
    

    myH2.textContent = places[i].name;
    myPara1.textContent = 'Motto: ' + places[i].motto;
    myPara2.textContent = 'Year Founded: ' + places[i].yearFounded;
    myPara3.textContent = 'Current Population: ' + places[i].currentPopulation;
    myPara4.textContent = 'Average Rainfall: ' + places[i].averageRainfall + '"';
    myPara5.textContent = 'Events:';
    

    var townEvents = places[i].events;
    for (var j = 0; j < townEvents.length; j++) {
    var listItem = document.createElement('li');
    listItem.textContent = townEvents[j];
    myList.appendChild(listItem);
}
  
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myList);
    myArticle.appendChild(myImg);

    towninfo.appendChild(myArticle);
}
}