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
  const [weather, setWeather] = useState();

  function HourlyWeather(props) {

    /* Formating Timestamp
    const timeStamp = new Date(props[0].startTime).getDate();
    console.log(timeStamp);
    console.log("Date:" + timeStamp.getDate() + " Hour: " + timeStamp.getHours())
    */

    const eachHour = props.map((hour) => (
        <WeatherRow
          id={hour.dt}
          temperature={Math.round(hour.feels_like)}
          time={new Date(hour.dt*1000).getHours()}
          daytime={RegExp('d').test(hour.weather[0].icon)? true: false}
          // daytime={(hour.weather[0].icon === "01d"? true: false)}
        />
      ));

    return <ul className="hourlyWeather">{eachHour}</ul>;
  }

  function WeatherRow({id, time, temperature, daytime}){
    const height = {height: temperature-60 + 'vh'}
    const classVariables = (daytime? 'day' : 'night') + ' hourlyRow';

    return(
        <li className={classVariables} key={id} style={height}>
          <div>{temperature}</div>
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
          setWeather(HourlyWeather(responseJSON.hourly));
        });
    }

    updateWeather()
  }, [])

  return (
      <div className="weather">{weather}</div>
  );
}

export default Weather;
