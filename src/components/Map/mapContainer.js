import React, { useState, useRef, useEffect } from 'react'
import mapboxgl from "mapbox-gl";

import "../../static/stylesheets/css/map.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function MapContainer() {
    const [lng, setLng] = useState(13.4049)
    const [lat, setLat] = useState(52.5200)
    const [zoom, setZoom] = useState(15)

    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        })
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
            <div ref={mapContainer} className="map" />
        </div>
    )
}

export default MapContainer
