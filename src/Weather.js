import React, { useState, useEffect } from "react";
import "./Weather.css"

/*

nyc lat:  40.7128
nyc long: -74.006

"gridId": "OKX",
     "gridX": 32,
     "gridY": 34,
*/

function Weather() {
  const [hourlyWeather, setHourlyWeather] = useState();
  const [weatherSummary, setWeatherSummary] = useState();

  function HourlyWeather(props) {

    /* Formating Timestamp
    const timeStamp = new Date(props[0].startTime).getDate();
    console.log(timeStamp);
    console.log("Date:" + timeStamp.getDate() + " Hour: " + timeStamp.getHours())
    */

    const eachHour = props.map((hour) => (
        <WeatherRow
          key={hour.dt}
          temperature={Math.round(hour.feels_like)}
          time={new Date(hour.dt*1000).getHours()}
          daytime={RegExp('d').test(hour.weather[0].icon)? true: false}
          img={hour.weather[0].icon}
          // daytime={(hour.weather[0].icon === "01d"? true: false)}
        />
      ));

    return <ul className="hourlyWeather">{eachHour}</ul>;
  }

  function WeatherRow({key, time, temperature, daytime, img}){
    const height = {height: temperature + '%'}
    const classVariables = (daytime? 'day' : 'night') + ' hourlyRow';
    const imgSrc = "http://openweathermap.org/img/wn/"+img+"@2x.png"

    return(
        <li className={classVariables} key={key} style={height}>
          <div className="temperature">{temperature}</div>
          <img alt="" src={imgSrc}/>
          <div className="time">{time}</div>
        </li>
    )
  }

  useEffect(() => {

    function updateWeather() {
      const weatherHourlyForecast =
        "https://api.openweathermap.org/data/2.5/onecall?lat=40.7128&lon=-74.006&exclude=daily,minutely&units=imperial&appid=a7bf0b1fdf4dce3928103f211cc679bd";

      fetch(weatherHourlyForecast)
        .then(initialResponse => initialResponse.json())
        .then(responseJSON => {
          console.log(responseJSON.hourly[0].weather[0].icon);
          setHourlyWeather(HourlyWeather(responseJSON.hourly));
          setWeatherSummary("NYC "+Math.round(responseJSON.current.feels_like)+"°F "+ responseJSON.current.weather[0].main);
        });
    }

    updateWeather()
  }, [])

  return (
    <div>
      <div className="summary">{weatherSummary}</div>
      <div className="weather">{hourlyWeather}</div>
    </div>
  );
}

export default Weather;
