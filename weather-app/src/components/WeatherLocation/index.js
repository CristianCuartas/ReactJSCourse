import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
const WeatherLocation = () =>(
    <div className="weatherLocation">
    <Location city={'Bogotá'}/>
    <WeatherData/>
    </div>  
);
export default WeatherLocation;