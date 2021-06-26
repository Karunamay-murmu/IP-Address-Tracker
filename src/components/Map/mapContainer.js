import React, { useState, useRef, useEffect, useContext } from 'react'
import mapboxgl from "mapbox-gl";

import { FetchContext } from '../../contexts/fetchContext';

import iconLocation from "../../static/assets/icon-location.svg";
import "../../static/stylesheets/css/map.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function MapContainer() {
    // const { apiData } = useContext(FetchContext);
    // console.log(apiData)

    const [lng, setLng] = useState(86.6522)
    const [lat, setLat] = useState(23.303)
    const [zoom, setZoom] = useState(13)

    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        })
        marker.current = new mapboxgl.Marker(marker.current).setLngLat([lng, lat]).addTo(map.current);
    });

    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });


    return (
        <div class="map-container">
            <div className="topbar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={marker} className="marker">
                <img src={iconLocation} alt="marker" />
            </div>
            <div ref={mapContainer} className="map" />
        </div>
    )
}

export default MapContainer
