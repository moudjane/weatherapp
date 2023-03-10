import './CurrentWeather.css';
import { useState } from 'react';
function CurrentWeather() {

    const [city, setCity] = useState('')
    const [weather, setWeather] = useState('')
    const [backgroundImage, setBackgroundImage] = useState('https://media.tenor.com/ffN-es3aN5cAAAAC/peepokc-kcpeepo.gif')
    //https://media.tenor.com/ffN-es3aN5cAAAAC/peepokc-kcpeepo.gif

    function weatherz() {
        fetch('  https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=93f353be3ea3bf5d4140db74968c1fa8&units=metric')
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                setWeather(data)
                if (data.weather[0].main === "Clouds") {
                    setBackgroundImage('https://p4.wallpaperbetter.com/wallpaper/981/359/800/blue-clouds-cloudy-hd-wallpaper-preview.jpg')
                }
                else if (data.weather[0].main === "Rain") {
                    setBackgroundImage('https://risibank.fr/cache/medias/0/5/578/57856/full.gif')
                }
                else if (data.weather[0].main === "Clear") {
                    setBackgroundImage('https://pbs.twimg.com/media/FTgR2LgXsAEzmx2.jpg')
                }
                else if (data.weather[0].main === "Drizzle") {
                    setBackgroundImage('https://media.tenor.com/1f0XJ3jKROkAAAAM/pepe-apu-rain-raincoat-for-profile-picture.gif')
                }
                else if (data.weather[0].main === "Snow") {
                    setBackgroundImage('https://media.tenor.com/mCJAwcc1ZbMAAAAC/pepe-christmas.gif')
                }
                else if (data.weather[0].main === "ThunderStorm") {
                    setBackgroundImage('https://media.tenor.com/1f0XJ3jKROkAAAAM/pepe-apu-rain-raincoat-for-profile-picture.gif')
                }
                else if (data.weather[0].main === "Mist") {
                    setBackgroundImage('https://media.tenor.com/1f0XJ3jKROkAAAAM/pepe-apu-rain-raincoat-for-profile-picture.gif')
                }
                else if (data.weather[0].main === "Haze") {
                    setBackgroundImage('https://media.tenor.com/1f0XJ3jKROkAAAAM/pepe-apu-rain-raincoat-for-profile-picture.gif')
                }
                else if (data.weather[0].main === "Fog") {
                    setBackgroundImage('https://media.tenor.com/1f0XJ3jKROkAAAAM/pepe-apu-rain-raincoat-for-profile-picture.gif')
                }
                else if (data.weather[0].main === "") {
                    setBackgroundImage('https://media.tenor.com/ffN-es3aN5cAAAAC/peepokc-kcpeepo.gif')
                }
                console.log(data.weather[0].main)
                console.log(data)
            })
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            weatherz(city);
        }
    };

    const regionNames = new Intl.DisplayNames(
        ['en'], { type: 'region' }
    );

    // console.log(regionNames.of('US'));
    // console.log(regionNames.of('GB'));
    // console.log(regionNames.of('DE'));
    // console.log(regionNames.of('AU'));
    return (
        <div className='App'>
            {/* <h1>WEATHEEEEEEEEER</h1> */}
            <div className="bg" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

            <div className='input'>
                <label>Your city: </label>

                <input type="text" placeholder="Type a city" value={city} onChange={e => setCity(e.target.value)} onKeyDown={handleKeyDown}></input>

                {/* <button onClick={weatherz}>LETSSSGO</button> */}

            </div>
            {weather.main ?
                <div className='weather-mainz'>
                    <div className='weather-main2'>
                        <span className='city'>{weather.name}</span>
                        <span className='country'>{regionNames.of(weather.sys.country)}</span>

                        {/* <p className='city'>{weather.sys.country}</p> */}
                    </div>
                </div>
                : null}
            {weather.main ?
                <div className='weather-main'>

                    <div className='weather-main2'>

                        <p className='temp'>{weather.main.temp}??C</p>
                    </div>
                </div>
                : null}
            {/* {weather.main ?
                <div className='weather-icon'>
                    <img src={'https://openweathermap.org/img/wn/' + weather.weather[0].icon + '@4x.png'} />
                </div>
                : null} */}
            {weather.main ?
                <div className='weather-global'>
                    <div className='bloc1'>Humidity:
                        <div className='weather-stat'>{weather.main.humidity} %</div>
                    </div>
                    <div className='bloc2'>Wind speed:
                        <div className='weather-stat'>{weather.wind.speed} m/s</div>
                    </div>
                    <div className='bloc3'>Feels like:
                        <div className='weather-stat'>{weather.main.feels_like} ??C</div>
                    </div>
                </div>
                : null}
        </div >
    )
}
export default CurrentWeather;
