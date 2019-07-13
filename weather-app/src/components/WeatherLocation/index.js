import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';

import './style.css';

const WeatherLocation = ({onWeatherLocation, city, data}) =>(
    <div className="weatherLocation" onClick={onWeatherLocation}>
        <Location city={city}/>
            {data ? <WeatherData data={data}/> 
            : <CircularProgress size={50}/>}
    </div> 
);

WeatherLocation.propTypes={
    city: PropTypes.string.isRequired,
    onWeatherLocation: PropTypes.func.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}
export default WeatherLocation;