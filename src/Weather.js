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
          id={hour.number}
          temperature={hour.temperature}
          time={new Date(hour.startTime).getHours()}
          daytime={hour.isDaytime}
        />
      ));

    return <ul className="hourlyWeather">{eachHour}</ul>;
  }

  function WeatherRow({id, time, temperature, daytime}){
    const height = {height: temperature-30 + 'vh'}
    const classVariables = (daytime? 'day' : 'night') + ' hourlyRow';

    return(
        <li className={classVariables} key={id} style={height}>
          <div>{temperature}°</div>
          <div className="time">{time}</div>
        </li>
    )
  }

  useEffect(() => {

    function updateWeather() {
      const weatherHourlyForecast =
        "https://api.weather.gov/gridpoints/OKX/32,34/forecast/hourly";

      fetch(weatherHourlyForecast)
        .then(initialResponse => initialResponse.json())
        .then(responseJSON => {
          console.log(responseJSON.properties.periods);
          setWeather(HourlyWeather(responseJSON.properties.periods));
        });
    }    

    updateWeather()
  }, [])

  return (
      <div className="weather">{weather}</div>
  );
}

export default Weather;
