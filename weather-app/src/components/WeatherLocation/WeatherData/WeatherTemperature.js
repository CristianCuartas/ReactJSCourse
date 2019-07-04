import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';

import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    DRIZZLE,
    THUNDER
} from '../../../constants/weathers';
const icons ={
    [CLOUD]: "cloud",
    [SUN]:"day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [THUNDER]:"DAY-thunderstore",
    [DRIZZLE]:"day-showers"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x"
    if(icon)
        return(
            <WeatherIcons name={icon} size={sizeIcon}/>
        );
    else
        return(
            <WeatherIcons name={"day-sunny"} size="2x"/>
        );
};

const WeatherTemperature = ({temperature, weatherState}) =>{
    return (
        <div className="weatherTemperatureCont">
            <div className="icon">
            { getWeatherIcon(weatherState)}
            </div>
            <span className="temperature">{`${temperature}`}</span>
            <span className="temperatureType">{`C°`}</span>
        </div>
    )
};

WeatherTemperature.propTypes={
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;