/* eslint-disable react/prop-types */
import './WeatherInformations5Days.css'

function WeatherInformations5Days({ weather5DaysInfo }) {

    let dailyForecast = {
        
    }

    for(let forecast of weather5DaysInfo.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if(!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }

    return (
        <div className='weather-container'>
            <p>5 Days</p>
        </div>
    )
}

export default WeatherInformations5Days