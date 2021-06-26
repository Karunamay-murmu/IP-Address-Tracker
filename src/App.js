import React, { useState, useRef } from "react";

import Header from "./components/Header/header";
import CardContainer from "./components/Card/cardContainer";
import MapContainer from "./components/Map/mapContainer";

import { FetchContext } from "./contexts/fetchContext";
import { fetchData } from "./api/fetchData";

import "./static/stylesheets/css/app.css"

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
                <MapContainer />
            </FetchContext.Provider>
        </div>
    );
}

export default App;
