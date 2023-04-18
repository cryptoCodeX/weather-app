import React from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([])
  const [location, setLocation] = useState('')

  const search = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a7adce03a1cd4c8c625db05dfd630f12`)
      .then(response => {
        setData(response.data)
        console.log(response.data);
      })
      .catch(error => {
        setData(error)
      })
      setLocation('')
  }

  return (
    <div className="App">
      <div className="container">
        <div className="search">
          <input 
          value={location} 
          onChange={event => setLocation(event.target.value)} 
          type="text" 
          placeholder="Enter Location"/>
          <button onClick={search}>Enter</button>
        </div>
        {data.name != undefined &&
        <React.Fragment>
        <div className="display-temp">
          <h3>{data.name}</h3>
          {data.main && <h3>{data.main.temp}</h3>}
          {data.weather && <p>{data.weather[0].main}</p>}
        </div>
        <div className="description">
          <div className="max-temp">
            {data.main && <h3>{data.main.temp_max}</h3>}
            <p>Max Temp</p>
          </div>
          <div className="min-temp">
            {data.main && <h3>{data.main.temp_min}</h3>}
            <p>Min Temp</p>
          </div>
          <div className="feels-like">
            {data.main && <h3>{data.main.temp}</h3>}
            <p>Feel Like</p>
          </div>
          <div className="humidity">
            {data.main && <h3>{data.main.humidity}</h3>}
            <p>Humidity</p>
          </div>
          <div className="feels-like">
            {data.wind && <h3>{data.wind.speed} MPH</h3>}
            <p>Wind</p>
          </div>
        </div>
        </React.Fragment>
        }
      </div>
    </div>
  );
}

export default App;
