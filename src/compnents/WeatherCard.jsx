import { textAlign } from '@mui/system';
import React, { createElement } from 'react'

export default function WeatherCard({ weatherData }) {
    console.log('Weather Data    ' + JSON.stringify(weatherData));

    /* var temp=(weatherData.main.temp-273.15).toFixed(2);
    var minTemp=(weatherData.main.temp_min -273.15).toFixed(2);
    var maxTemp=(weatherData.main.temp_max- 273.15).toFixed(2);

    console.log(temp + '    ' + minTemp + '   ' + maxTemp);

    var currentDate = new Date().getDate();
    var year = new Date().getFullYear();
    var month=new Date().toLocaleString('default',{month:'long'});
    
    console.log(currentDate + '     ' + year + '    ' + month); */
    return (
        <>
            <div className="card text-white bg-primary mb-3"  
            style={{maxWidth: 350+'px' , borderRadius:5+'px' , textAlign:'left' , paddingLeft:9+'px' ,
            fontFamily:"Times New Roman, Times, serif"}}>
                <div className="card-header" style={{ fontSize:24 +'px'}}>H</div>
                <div className="card-body">
                    <h5 className="card-title">PT</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </>
    )
}
