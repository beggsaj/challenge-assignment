var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var temperature = document.querySelector('.temperature');
var button= document.querySelector('.submit');
var conditions = document.querySelector('.conditions')
var humidity = document.querySelector('.humidity')
var windspeed = document.querySelector('.windspeed')
var uvindex = document.querySelector('.uvindex')


button.addEventListener('click', function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=5f9802b3552d7171cdc282d3313390c8')
    .then(response => response.json())
    .then(data => {
      var tempValue = data['main']['temp'];
      var conditionsValue = data['weather']['main'];
      var humidityValue = data['main']['humidity'];
      var windspeedValue = data['wind']['speed'];
      var uvindexValue = data['main']['temp'];
      var nameValue = data['name'];
    
      main.innerHTML = nameValue;
      temp.innerHTML = "Temperature - "+tempValue;
      conditions.innerHTML = "Conditions - "+conditionsValue
      humidity.innerHTML = "Humidity - "+humidityValue
      windspeed.innerHTML = "Wind Speed - "+windspeedValue
      uvindex.innerHTML = "UV Index - "+uvindexValue
      input.value ="";
    
    })
    })

button.addEventListener('click', function(name){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid=5f9802b3552d7171cdc282d3313390c8')
    .then(response => response.json())
    .then(data => {
        var temperatureValue = data['list'][0]['main']['temp']

        temperatureValue.innerHTML = "Temperature - "+temperatureValue
    })
})