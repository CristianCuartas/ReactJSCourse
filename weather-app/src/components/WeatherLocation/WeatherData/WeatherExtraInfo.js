import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = (props) => {
    const {humidity} =props
    const {wind} = props
    return (
        <div className="weatherExtraInfoCont">
               <span className="extraInfoText"> <b>Humedad: </b><br/>{`${humidity}%`} &nbsp; </span>
               <span className="extraInfoText"> <b>Vientos: </b><br/>{wind} </span>
        </div>
    )
};

WeatherExtraInfo.propTypes ={
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;