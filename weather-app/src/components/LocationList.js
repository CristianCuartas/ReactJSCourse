import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({cities, onSelectedLocation}) =>{
    const handleWeatherLocation = city =>{
        onSelectedLocation(city);
    }
    const strToComponents = cities =>{
        return(
        cities.map((city, idx) => 
            (
                <WeatherLocation 
                    key={city.key} 
                    city={city.name}
                    onWeatherLocation={()=> handleWeatherLocation(city.name)}
                    data={city.data}
                />
            )
        ));
    }

    return (
        <div className="locationsList">
            {strToComponents(cities)}
        </div>
    )
};
LocationList.propTypes={
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired,
};
export default LocationList;