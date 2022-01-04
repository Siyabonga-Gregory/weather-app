import React from 'react'

export default function WeatherCard({weatherData}) {
    console.log('Weather Data    '+JSON.stringify(weatherData));
    const refresh=()=>{
        window.location.reload();
    }
    return (
        <>
           <div className='container'>
               <div className='row'>
                   <div className='col-md-4'>
                       <div className='card text-wtite gb-primary mb-3'>
                           <div className='card-header'>Weather
                           <i className='fa fa-refresh float-end pt-1' onClick={refresh}></i>
                           </div>
                           <div className='card-body'>
                               <h5 className='card-title'>Primary card title</h5>
                               <p className='card-text'>Some This Awesome IS Coming Soon</p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </>
    )
}
