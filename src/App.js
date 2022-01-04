/*     
 * copyright @2021 By   : Siyabonga Gregory
 * Developer's Website  : www.ghostcoder.weebly.com
 * Developer's Number   : 084-492-1275
 * Developer's E-mail   : huge.fuze@gmail.com
 * */

import React, { useRef, useState, useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";
import Search from "@arcgis/core/widgets/Search";
import WeatherCard from "./compnents/WeatherCard";
import Map from "@arcgis/core/Map";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);  //Weather Data
  const ARCGIS_API_KEY = 'AAPKbfc7bf7f40df4b0994b01f630584f041JUySrYc4buTUVL5OKuzWOfWcZHpcq4qJW753W9Xr6QfvGme74dEYmNTfYpnFVaO0';// ARCGIS_API_KEY
  const OPEN_WEATHER_API_KEY = 'aa5a2db388766f55fc4fd88ca213511a';// OPEN_WEATHER_API_KEY

  const mapDiv = useRef(null);
  const PingAddress = (address) => {
    const request = axios.get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?SingleLine=${address}&+category=&outFields=*&forStorage=false&f=pjson`)
      .then((response) => {
        fetchWeatherData(response.data['candidates'][0].location);
      })
      .catch(console.log)
  }

  const fetchWeatherData = async (AddressData) => {
    console.log(AddressData);
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${AddressData.y}&lon=${AddressData.x}&appid=${OPEN_WEATHER_API_KEY}`)
      .then((response) => {
        setData(response)
        console.log(response)
      })
      .catch(console.log)
  }

  useEffect(() => {
    if (mapDiv.current) {
      const map = new Map({
        basemap: "dark-gray-vector"
      });

      const view = new MapView({
        container: mapDiv.current,
        map: map,
        center: [-29.85, 38],
        scale: 10000000
      });
      const searchWidget = new Search({
        view: view,
        popupEnabled: true,
        allPlaceholder: "Please type address here",
        includeDefaultSources: false,
        sources: [
          {
            name: "Siyabonga Gregory",
            placeholder: "Please type address here",
            apiKey: ARCGIS_API_KEY,
            singleLineFieldName: "SingleLine",
            locator: "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer"
          }
        ]
      });

      searchWidget.on("select-result", function (event) {
        PingAddress(event.result.name);
      });

      view.ui.add(searchWidget, {
        position: "top-left"
      });
      view.ui.remove("zoom");
    }
  }, []);

  return (<>
    <div className="mapDiv" ref={mapDiv}></div>;
    <div className="weatherCard"><WeatherCard weatherData={data} /></div>
  </>)

}

export default App;
