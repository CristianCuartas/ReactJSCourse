// import {api_weather} from './../../credentials/crendentials';
import {API_KEY, url} from './../credentials/crendentials';
const getUrlByCity = city => {
    return `${url}?q=${city}&appid=${API_KEY}`
}
export default getUrlByCity;