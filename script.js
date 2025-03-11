// URL to get data 
// https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=ded712e593ac8930da4bec1dde2db2de
  let weather = {
    "apiKey":"ab68c08423e9efafd7eddad3d4842826",
    fetchWeather: function (name ){
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            name +
            "&units=metric&appid=" +
            this.apiKey
          )
.then((response) => response.json())
.then((data) => this.displayWeather(data));
    },displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description; 
      document.querySelector(".temperature").innerText = temp + "°C";
      document.querySelector(".humidity").innerText = "humidity: " + humidity + "%"
      document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
      document.querySelector(".weather.loading").classList.remove("loading")

},

// .then((response) => response.json()) stores the fetch data then we use .json
// to organise the information as an object.
// we then store this object as variable data

// Search Bar
search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value)
}
};    
document
.querySelector(".search button")
.addEventListener("click",function (){
    weather.search()
});
// to press enter for the search bar
document
.querySelector(".search-bar")
.addEventListener("keyup" , function(event){
if(event.key == "Enter"){
    weather.search();
}
});
// lksamdlkmasldkmaslkmdlsakmdlaskmdlkma
// lksdamflkmaslfkmalskmflaksmdlkamsdlkmads
// ;las,f;lasmd;lasml;dkmasl;kdml;askm

