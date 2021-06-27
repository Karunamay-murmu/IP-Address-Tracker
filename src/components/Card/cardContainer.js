import React from 'react'

import Card from "./card";
import "../../static/stylesheets/css/cardContainer.css";

export default function CardContainer({ response: { query, city, regionName, country, timezone, zip, isp } }) {
    const data = [
        { header: "IP ADDRESS", body: query },
        { header: "LOCATION", body: `${city}, ${regionName}, ${country}` },
        { header: "TIMEZONE", body: timezone },
        { header: "ISP", body: isp }
    ]

    return (
        <div className="card-container">
            <p className="card-container__info">You are allowed to make 45 query per minute.</p>
            <div className="card-wrapper">
            {data.map(a =>
                <Card key={a.header} header={a.header} body={a.body} />
            )}
            </div>
        </div>
    )
}
