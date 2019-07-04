import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';


const LocationList = ({cities, onSelectedLocation}) =>{
    const handleWeatherLocation = city =>{
        onSelectedLocation(city);
    }
    const strToComponents = cities =>{
        return(
        cities.map((city, idx) => 
            (
                <WeatherLocation 
                    key={city} 
                    city={city}
                    onWeatherLocation={()=> handleWeatherLocation(city)}
                />
            )
        ));
    }

    return (
        <div>
            {strToComponents(cities)}
        </div>
    )
};
LocationList.propTypes={
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired,
};
export default LocationList;