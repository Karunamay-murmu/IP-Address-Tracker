import React, { useState, useRef, useEffect, useContext } from 'react'
import mapboxgl from "mapbox-gl";

import { FetchContext } from '../../contexts/fetchContext';

import iconLocation from "../../static/assets/icon-location.svg";
import "../../static/stylesheets/css/map.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function MapContainer() {
    const { apiData } = useContext(FetchContext);

    const [lon, setLon] = useState(apiData.lon)
    const [lat, setLat] = useState(apiData.lat)
    const [zoom, setZoom] = useState(13)

    const prvLon = useRef(lon);
    const prvLat = useRef(lat);

    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);

    useEffect(() => {
        if (apiData.lat !== prvLat.current || apiData.lon !== prvLon.current) {
            setLon(apiData.lon)
            setLat(apiData.lat)
        }
    })

    useEffect(() => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lon, lat],
            zoom: zoom
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
