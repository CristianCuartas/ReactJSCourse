import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import ForecastItem from './ForecastItem';
import {API_KEY, urlForecast} from './../credentials/crendentials';
import transformForecast from './../services/transformForecast';
import CircularProgress from '@material-ui/core/CircularProgress';

class ForescastExtended extends Component{
    constructor(props){
        super(props);
        this.state={
            forescastData: null 
        }
    };

    componentDidMount(){
        this.updateCity(this.props.city);
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city){
            this.setState({forescastData: null});
            this.updateCity(nextProps.city);
        }
    }
    

    updateCity = city =>{
        fetch(`${urlForecast}?q=${city}&&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            const forescastData = transformForecast(data);
            console.log(forescastData);
            this.setState({forescastData});
        });
    };

    forecastItemDays(forescastData){
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

    renderProgress = () =>{
        return(
            <div style={{textAlign:"center"}}>
                <CircularProgress size={100}/>
            </div>
        );
    };

    render(){
        const {city} = this.props;
        const {forescastData} = this.state;
        return(
            <div>
                <h2 className="forescast-title">
                Pronóstico del clima para la ciudad de <br/>{city}
                </h2>
                {forescastData ? this.forecastItemDays(forescastData)
                    : this.renderProgress()}
            </div>
        )
    }
}

ForescastExtended.propTypes={
    city:PropTypes.string.isRequired,
}

export default ForescastExtended;