import React, { useState, useRef, useEffect } from 'react'
import mapboxgl from "mapbox-gl";

import iconLocation from "../../static/assets/icon-location.svg";
import "../../static/stylesheets/css/map.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function MapContainer() {
    const [lng, setLng] = useState(13.4049)
    const [lat, setLat] = useState(59.5200)
    const [zoom, setZoom] = useState(15)

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
    });

    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    useEffect(() => {
        marker.current = new mapboxgl.Marker(marker.current).setLngLat([lng, lat]).addTo(map.current);
    }, [])


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
