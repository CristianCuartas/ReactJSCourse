import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/weathers';

const WeatherData = () =>(
    <div className="weatherDataCont">
        <WeatherTemperature 
        temperature={20} 
        weatherState={WINDY}
        />
        <WeatherExtraInfo humidity={80} wind={'10 m/s'}/>
    </div>
);
export default WeatherData;