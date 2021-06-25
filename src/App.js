import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import Header from "./components/Header/header";
import CardContainer from "./components/Card/cardContainer";

import { FetchContext } from "./contexts/fetchContext";
import { fetchData } from "./api/fetchData";

function App() {
    const [apiData, setApiData] = useState(null);
    const [apiError, setApiError] = useState(null);

    const previousIp = useRef();

    const fetchApiData = async (ip) => {
        if (ip !== previousIp.current) {
            previousIp.current = ip;

            const data = await fetchData(ip);
            const response = await data.json();

            if (data.status !== 200) {
                setApiError({ message: response.messages, ...apiError });
                setApiData(null);
                return;
            }

            setApiData({ ...response });
        }

    }

    return (
        <div className="app">
            <FetchContext.Provider value={{ apiData, apiError, setApiError, fetchApiData }} >
                <Header />
                {apiData ? <CardContainer response={apiData} /> : null}
            </FetchContext.Provider>
            <div style={{ height: "180px" }}>
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}

export default App;
