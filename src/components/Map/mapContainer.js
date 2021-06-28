import React, { useState, useRef, useEffect, useContext } from 'react'
import mapboxgl from "mapbox-gl";

import { FetchContext } from '../../contexts/fetchContext';

import "../../static/stylesheets/css/map.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


function MapContainer() {
    const { apiData } = useContext(FetchContext);

    const [lon, setLon] = useState(apiData.longitude)
    const [lat, setLat] = useState(apiData.latitude)

    const prvLon = useRef(lon);
    const prvLat = useRef(lat);

    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);

    useEffect(() => {
        if (apiData.latitude !== prvLat.current || apiData.longitude !== prvLon.current) {
            setLon(apiData.longitude)
            setLat(apiData.latitude)
        }
        //eslint-disable-next-line
    }, [apiData.latitude, apiData.longitude])

    useEffect(() => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lon, lat],
            zoom: 10
        })
        marker.current = new mapboxgl.Marker(marker.current).setLngLat([lon, lat]).addTo(map.current);

    });


    return (
        <div className="map-container">
            <div ref={mapContainer} className="map" />
        </div>
    )
}

export default MapContainer
