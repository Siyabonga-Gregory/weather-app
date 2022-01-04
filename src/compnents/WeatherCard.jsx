import { textAlign } from '@mui/system';
import React, { createElement } from 'react'

export default function WeatherCard({ weatherData }) {

    if (weatherData != '') {
        var temp = (weatherData.data.main.temp - 273.15).toFixed(2);
        var minTemp = (weatherData.data.main.temp_min - 273.15).toFixed(2);
        var maxTemp = (weatherData.data.main.temp_max - 273.15).toFixed(2);
        
        var currentDate = new Date().getDate();
        var year = new Date().getFullYear();
        var month = new Date().toLocaleString('default', { month: 'long' });

        return (
            <>
                <div className="card text-white mb-3"
                    style={{
                        maxWidth: 35 + 'rem', height: 30 + 'rem', borderRadius: 5 + 'px', textAlign: 'left', paddingLeft: 9 + 'px', backgroundColor: '#2C3749', color: '#fff',
                        fontFamily: "Times New Roman, Times, serif"
                    }}>
                    <div className="card-header" style={{ fontSize: 2 + 'rem' }}>H</div>
                    <div className="card-body">
                        <h5 className="card-title">PT</h5>
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </>
        )
    }
    else{
        return (
            <h5>Hallo There From Ghost Coder</h5>
        )
    }

    
}
