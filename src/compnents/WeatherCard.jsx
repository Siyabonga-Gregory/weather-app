import React, { createElement } from 'react'
import ghost from '../../src/assets/ghost.png';
import '../../src/compnents/weatherCard.css';

export default function WeatherCard({ weatherData }) {

    if (weatherData != '') {
        console.log(weatherData);
        var temp = (weatherData.data.main.temp - 273.15).toFixed(2);
        var minTemp = (weatherData.data.main.temp_min - 273.15).toFixed(2);
        var maxTemp = (weatherData.data.main.temp_max - 273.15).toFixed(2);
        var currentDate = new Date().toDateString();
        return (
            <> 
                <div className="card text-white bg-primary mb-3"
                    style={{
                        maxWidth: 35 + 'rem', height: 38 + 'rem', borderRadius: 5 + 'px', textAlign: 'center', paddingLeft: 9 + 'px', backgroundColor: '#2C3749', color: '#fff',
                        fontFamily: "Times New Roman, Times, serif"
                    }}>
                        <hr/>
                    <div className="card-header" style={{ fontSize: 4 + 'rem',height: 5+'rem' }}>{weatherData.data.name}</div>
                   
                    <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: 2 + 'rem',height: 5+'rem' }}>{currentDate}</h5>
                        <hr/>

                        <div className="card-header" style={{ fontSize: 4 + 'rem' }}>{temp} &#8451;</div>
                        <hr/>

                        <div className="card-header" style={{ fontSize: 2 + 'rem' }}>Smoke 
                        <br/><span style={{ fontWeight:500}}> {minTemp} &#8451; | {maxTemp} &#8451;</span></div>
                    </div>
                    
                </div>
            </>
        )
    }
    else {
        return (<>
            
            <div style={{ paddingLeft: 8 + 'rem', color: '#fff' }}>
                <h5>Hallo There From Ghost Coder </h5>
            </div>

            <div className='ghost-image'>
                <img src={ghost} alt='ghost' />
            </div>
        </>)
    }
}
