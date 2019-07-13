import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import ForecastItem from './ForecastItem';
import './styles.css';

const forecastItemDays = (forescastData) => {
    return(
        forescastData.map((day)=>{
            return(<ForecastItem 
                key={`${day.weekDay}${day.hour}`}
                weekDay={day.weekDay} 
                hour={day.hour} 
                data={day.data}/>);
        })
    );
};

const renderProgress = () =>{
    return(
        <div style={{textAlign:"center"}}>
            <CircularProgress size={100}/>
        </div>
    );
};

const ForescastExtended = ({city, forescastData}) => (
    <div>
        <h2 className="forescast-title">
        Pronóstico del clima para la ciudad de <br/>{city}
        </h2>
        {forescastData ? 
            forecastItemDays(forescastData) : 
            renderProgress()}
    </div>
);

ForescastExtended.propTypes={
    city:          PropTypes.string.isRequired,
    forescastData: PropTypes.array,
}

export default ForescastExtended;