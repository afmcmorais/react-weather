/* eslint-disable react/prop-types */
import './WeatherInformations.css'

function WeatherInformations({ weatherInfo }) {

    console.log(weatherInfo)

    return (
        <div className='weather-container'>
            <h2>{weatherInfo.name}</h2>
            <div className='weather-info'>
                <img
                    src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`}
                />
                <p className='temperature'>{Math.round(weatherInfo.main.temp)} °C</p>
            </div>
            <p className='description'>{weatherInfo.weather[0].description}</p>
            <div className='details'>
                <p>Sensação térmica: {Math.round(weatherInfo.main.feels_like)} </p>
                <p>Umidade: {weatherInfo.main.humidity} </p>
                <p>Pressão: {weatherInfo.main.pressure} </p>
            </div>

            
        </div>
    )
}

export default WeatherInformations