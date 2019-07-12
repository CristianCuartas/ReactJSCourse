import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setSelectedCity, dispatchSetWeather}from '../actions';
import {getWeatherCities, getCity} from './../reducers';
import LocationList from '../components/LocationList';

class LoacationListContainer extends Component {

  componentDidMount(){
    const {dispatchSetWeather, dispatchSetCity, cities, city} = this.props
    dispatchSetWeather(cities);
    dispatchSetCity(city);
  }

    handleSelectionLocation = city =>{
      //Dispatch - Disparar la acción, 'type' hace referencia al nombre de la acción y 'value' es la otra parte de hacer el disparo.
      this.props.dispatchSetCity(city);
    }
  
    render() {
        return (
            <LocationList 
              cities={this.props.citiesWeather}
              onSelectedLocation={this.handleSelectionLocation}
              />
        );
    }
}

//Tomar el componente modificarlo y devolver el componente modificado. 
LoacationListContainer.propTypes = {
    cities: PropTypes.array.isRequired,
    dispatchSetCity: PropTypes.func.isRequired,
    dispatchSetWeather: PropTypes.func.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
  } 
  
  const mapDispatchPropsActions = dispatch =>{
    return (
      {
        dispatchSetCity: value => dispatch(setSelectedCity(value)),
        dispatchSetWeather: cities => dispatch(dispatchSetWeather(cities))
      }
    )
  };
  
  const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
  });
  const AppConected = connect(mapStateToProps, mapDispatchPropsActions)(LoacationListContainer);
  export default AppConected;