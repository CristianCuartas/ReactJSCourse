import {API_KEY, urlForecast, url} from './../credentials/crendentials';
import transformForecast from './../services/transformForecast';
import getData from './../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

export const setCity = value => ({type:SET_CITY, value});
export const setForecastData = value =>({type: SET_FORECAST_DATA, value});

const getWeatherCity = value =>({type:GET_WEATHER_CITY, value });
const setWeatherCity = value =>({type:SET_WEATHER_CITY, value });

export const setSelectedCity = value =>{
    return (
        (dispatch, getState) =>{
            //Activar en el estado un indicador de busqueda de datos
            dispatch(setCity(value));

            const state= getState();
            const date = state.cities[value] && state.cities[value].forecastDataDate;

            const now = new Date();
            if(date && (now-date)<1 *60*1000){
                return;
            }
            return fetch(`${urlForecast}?q=${value}&&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                const forecastData = transformForecast(data);
                console.log(forecastData);
                //Modificar el estado con el resultado de la promise
                dispatch(setForecastData({city: value, forecastData}));
            });
        }
    );
}

export const dispatchSetWeather = value =>{
    return dispatch =>{
        value.forEach(city =>{
            dispatch(getWeatherCity(city));

            const api_weather = `${url}?q=${city}&appid=${API_KEY}`;
            fetch(api_weather)
            .then(res => res.json())
            .then(data =>{
                const weather = getData(data);
                dispatch(setWeatherCity({city, weather}));
            });
        })
    }
};
