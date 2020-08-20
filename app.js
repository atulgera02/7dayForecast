function getWeather() {
    //TODAY
    let todayMax = document.getElementById("todayMax");
    let todayMin = document.getElementById("todayMin")
    let todayDescription = document.getElementById("todayDescription");
    //TOMORROW
    let tmrwMax = document.getElementById("tmrwMax");
    let tmrwMin = document.getElementById("tmrwMin")
    let tmrwDescription = document.getElementById("tmrwDescription");
    //DAY3
    let day3Max = document.getElementById("day3Max");
    let day3Min = document.getElementById("day3Min")
    let day3Description = document.getElementById("day3Description");
    //DAY 4
    let day4Max = document.getElementById("day4Max");
    let day4Min = document.getElementById("day4Min")
    let day4Description = document.getElementById("day4Description");
    //DAY 5
    let day5Max = document.getElementById("day5Max");
    let day5Min = document.getElementById("day5Min")
    let day5Description = document.getElementById("day5Description");
    //DAY 6
    let day6Max = document.getElementById("day6Max");
    let day6Min = document.getElementById("day6Min")
    let day6Description = document.getElementById("day6Description");
    //DAY 7
    let day7Max = document.getElementById("day7Max");
    let day7Min = document.getElementById("day7Min")
    let day7Description = document.getElementById("day7Description"); 
 


    let location = document.getElementById("location");
    //var elem = document.createElement("img");
    //var icon = document.getElementById("icon");
    let api = "https://api.openweathermap.org/data/2.5/onecall";
    //let api = "https://api.openweathermap.org/data/2.5/weather";

    let apikey = "9bc9d75637c20f4eaffc4fd196d6ebe7";

    location.innerHTML = "Locating...";
    navigator.geolocation.getCurrentPosition(success, error);
    
    function success(position){
        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;

        let url = api + "?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly" + "&appid=" + apikey + "&units=imperial";
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => {console.log(data);
            //let temp = data.main.temp;
            //TODAY Max, MIN, DESCRIPTION
            todayMax.innerHTML = "High temp: " +data.daily[0].temp.max + "° F";
            todayMin.innerHTML ="Low temp: " +data.daily[0].temp.min + "° F";            
            todayDescription.innerHTML = data.daily[0].weather[0].description;
           
           //TOMORROW MAX,MIN,DESCRIPTION
            tmrwMax.innerHTML = data.daily[1].temp.max + "° F";
            tmrwMin.innerHTML = data.daily[1].temp.min + "° F";
            tmrwDescription.innerHTML = data.daily[1].weather[0].description;
           
           //DAY3
           day3Max.innerHTML = data.daily[2].temp.max + "° F";
           day3Min.innerHTML = data.daily[2].temp.min + "° F";
           day3Description.innerHTML = data.daily[2].weather[0].description;
           //DAY4
           day4Max.innerHTML = data.daily[3].temp.max + "° F";
           day4Min.innerHTML = data.daily[3].temp.min + "° F";
           day4Description.innerHTML = data.daily[3].weather[0].description;
           //DAY5
           day5Max.innerHTML = data.daily[4].temp.max + "° F";
           day5Min.innerHTML = data.daily[4].temp.min + "° F";
           day5Description.innerHTML = data.daily[4].weather[0].description;
           //DAY6
           day6Max.innerHTML = data.daily[5].temp.max + "° F";
           day6Min.innerHTML = data.daily[5].temp.min + "° F";
           day6Description.innerHTML = data.daily[5].weather[0].description;
           //DAY7
           day7Max.innerHTML = data.daily[6].temp.max + "° F";
           day7Min.innerHTML = data.daily[6].temp.min + "° F";
           day7Description.innerHTML = data.daily[6].weather[0].description;
     
           
           
            location.innerHTML ="7 day forecast in " + data.timezone + " timezone with coordinates (" + latitude + "°, " + longitude + "°)";
            
            
            //var img = document.createElement("IMG");
            //img.src = "http://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png";
            //icon.appendChild(img); 
            });
            
    }
    function error(){
        console.log("error");
    }  
}

getWeather();

