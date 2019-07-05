import {API_KEY, urlForecast} from './../credentials/crendentials';
const getUrlByCity = city => {
    return `${urlForecast}?q=${city}&appid=${API_KEY}`
}
export default getUrlByCity;