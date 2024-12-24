const locationEl = document.querySelector(".content__location")
const imgEl = document.querySelector(".content__image img")
const tempEl = document.querySelector(".content__main p")
const temp2El = document.querySelector(".temp2")
const temp3El = document.querySelector(".temp3")
const temp4El = document.querySelector(".temp4")
const temp5El = document.querySelector(".temp5")
const cardWrapperEl = document.querySelector(".card__wrapper")

const cardtime1 = document.querySelector(".card__time1")
const cardtime2 = document.querySelector(".card__time2")
const cardtime3 = document.querySelector(".card__time3")
const cardtime4 = document.querySelector(".card__time4")

const cardImgEl = document.querySelector(".card__img1")
const cardimageEl = document.querySelector(".card__img2")
const cardimg = document.querySelector(".card__img3")
const cardimage = document.querySelector(".card__img4")

const topicimg1El = document.querySelector(".topic__img1")
const topicimg2El = document.querySelector(".topic__img2")
const topicimg3El = document.querySelector(".topic__img3")
const topicimg4El = document.querySelector(".topic__img4")
const topicimg5El = document.querySelector(".topic__img5")
const topicimg6El = document.querySelector(".topic__img6")
const topicimg7El = document.querySelector(".topic__img7")
const topicbodies0El = document.querySelector(".topic__bodies0")
const topicbodies1El = document.querySelector(".topic__bodies1")
const topicbodies2El = document.querySelector(".topic__bodies2")
const topicbodies3El = document.querySelector(".topic__bodies3")
const topicbodies4El = document.querySelector(".topic__bodies4")
const topicbodies5El = document.querySelector(".topic__bodies5")
const topicbodies6El = document.querySelector(".topic__bodies6")

const BASE_URL = "https://api.weatherapi.com/v1/forecast.json?key=d225234130be46288aa55338242412&q=moscow&days=7&aqi=yes&alerts=yes"
async function fetchWeather(city){
    const response = await fetch(BASE_URL)
    response
        .json()
        .then(res => {
            console.log(res);
            tempEl.textContent = res.current.temp_c + "°";
            temp2El.textContent = res.current.temp_f + "°";                     
            temp3El.textContent = res.current.wind_kph;
            temp4El.textContent = res.current.precip_mm;
            temp5El.textContent = res.current.uv;
            imgEl.src = res.current.condition.icon;
            locationEl.textContent = `${res.location.name}${res.location.country}`; 

            cardtime1.textContent = res.forecast.forecastday[0].astro.moonrise;
            cardtime2.textContent =  res.forecast.forecastday[0].astro.sunset;
            cardtime3.textContent = res.forecast.forecastday[0].astro.sunrise;
            cardtime4.textContent =  res.forecast.forecastday[0].astro.moonset;

     

        
            cardImgEl.src =  res.forecast.forecastday[0].hour[4].condition.icon;
            cardimageEl.src =  res.forecast.forecastday[0].hour[9].condition.icon; 
            cardimg.src =  res.forecast.forecastday[0].hour[13].condition.icon; 
            cardimage.src =  res.forecast.forecastday[0].hour[12].condition.icon; 
            

            topicimg1El.src =  res.forecast.forecastday[0].day.condition.icon;
            topicimg2El.src =  res.forecast.forecastday[1].day.condition.icon;
            topicimg3El.src =  res.forecast.forecastday[2].day.condition.icon;
            topicimg4El.src =  res.forecast.forecastday[3].day.condition.icon;
            topicimg5El.src =  res.forecast.forecastday[4].day.condition.icon;
            topicimg6El.src =  res.forecast.forecastday[5].day.condition.icon;
            topicimg7El.src =  res.forecast.forecastday[6].day.condition.icon;

            topicbodies0El.textContent = res.forecast.forecastday[0].day.condition.text;
            topicbodies1El.textContent = res.forecast.forecastday[1].day.condition.text;
            topicbodies2El.textContent = res.forecast.forecastday[2].day.condition.text;
            topicbodies3El.textContent = res.forecast.forecastday[3].day.condition.text;
            topicbodies4El.textContent = res.forecast.forecastday[4].day.condition.text;
            topicbodies5El.textContent = res.forecast.forecastday[5].day.condition.text;
            topicbodies6El.textContent = res.forecast.forecastday[6].day.condition.text;
        })  
}

window.onload = ()=> {
    fetchWeather()
}


























