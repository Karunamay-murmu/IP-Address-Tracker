import React, { useEffect, useState, useRef } from "react";

import Header from "./components/Header/header";
import CardContainer from "./components/Card/cardContainer";
import MapContainer from "./components/Map/mapContainer";

import { FetchContext } from "./contexts/fetchContext";
import { fetchData } from "./api/fetchData";

import "./static/stylesheets/css/app.css"
import Footer from "./components/Footer/footer";

function App() {
    const [apiData, setApiData] = useState(null);
    const [apiError, setApiError] = useState(null);

    const previousIp = useRef(null);

    const fetchApiData = async (ip) => {
        if (ip !== previousIp.current) {
            previousIp.current = ip;
            const data = await fetchData(ip);

            if (data.error) {
                setApiError({
                    message: "Your adblocker is blocking the request.",
                    ...apiError
                });
                return;
            }

            const response = await data.json();
            if (response.error || (response.success === false)) {
                setApiError({ message: "Invalid IPv4 or IPv6 address. Please enter a valid IP address.", ...apiError });
                setApiData(null);
                return;
            }

            setApiData({ ...response });

        }
    }

    useEffect(() => {
        fetchApiData('');
        //eslint-disable-next-line
    }, [])


    return (
        <div className="app">
            <FetchContext.Provider value={{ apiData, apiError, setApiError, fetchApiData }} >
                <Header />
                {apiData ? <CardContainer response={apiData} /> : null}
                {apiData && <MapContainer />}
                <Footer />
            </FetchContext.Provider>
        </div>
    );
}

export default App;
