import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import getData from './../../services/trasnformWeather';
import './style.css';
import getUrlByCity from '../../services/getUrlWeatherCity';


class  WeatherLocation extends Component{
    constructor(props){
        super(props);
        const {city} = props;
        this.state={
            city,
            data: null,
        };
    };

    componentDidMount() {
        this.handleUpdateClick();
    };

    handleUpdateClick = () =>{
        const api_weather = getUrlByCity(this.state.city);
        fetch(api_weather)
        .then(res => res.json())
        .then(data =>{
            const newWeather = getData(data);
            this.setState({
                data: newWeather
            });
        });
    };

    render(){
        const {onWeatherLocation} = this.props
        const {city, data} = this.state
        return(
            <div className="weatherLocation" onClick={onWeatherLocation}>
                <Location city={city}/>
                {data ? <WeatherData data={data}/> 
                      : <CircularProgress size={50}/>}
            </div> 
        );
    } 
};
WeatherLocation.propTypes={
    city: PropTypes.string.isRequired,
    onWeatherLocation: PropTypes.func.isRequired,
}
export default WeatherLocation;