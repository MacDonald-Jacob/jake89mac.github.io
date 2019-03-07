var section = document.querySelector('section')
var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var townData = request.response;
  showData(townData);
}

function showData(jsonObj) {
  var places = jsonObj['towns'];
  
for (var i = 0; i < places.length; i++) {
  // this if statement grabs only the defined towns to put on the html. delete the if statement line to grab all towns from json.
  if (places[i].name == "Preston" || places[i].name == "Soda Springs" || places[i].name == "Fish Haven"){
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myPara5 = document.createElement('p');
    var myList = document.createElement('ul');
    var myImg = document.createElement('img');
    
    if (places[i].name == "Preston") {
      myImg.setAttribute('src', 'images/homepage/preston1.jpg');
      myImg.setAttribute('alt', 'Preston');
  } else if (places[i].name == "Soda Springs") {
      myImg.setAttribute('src', 'images/homepage/sodasprings1.jpg');
      myImg.setAttribute('alt', 'Soda Springs');
  } else if (places[i].name == "Fish Haven") {
      myImg.setAttribute('src','images/homepage/fishhaven1.jpg');
      myImg.setAttribute('alt', 'Fish Haven');
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

    section.appendChild(myArticle);
}
}
}