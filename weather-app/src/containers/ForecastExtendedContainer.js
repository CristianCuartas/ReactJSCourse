import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ForescastExtended from '../components/ForecastExtended';
import {getForecastDataFromCities, getCity} from './../reducers';

class ForecastExtendedContainer extends Component {
    render() {
        const {city, forescastData} = this.props;
        return (
           city &&
            <ForescastExtended
                city={city}
                forescastData={forescastData}
            />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city:          PropTypes.string.isRequired,
    forescastData: PropTypes.array,
}

const mapStateToProps = state => ({ city: getCity(state), forescastData: getForecastDataFromCities(state)});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);