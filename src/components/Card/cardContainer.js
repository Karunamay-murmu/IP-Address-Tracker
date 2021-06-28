import React from 'react'

import Card from "./card";
import "../../static/stylesheets/css/cardContainer.css";

export default function CardContainer({ response: { ip, city, region, country_name, country, timezone, org, isp } }) {
    const data = [
        { header: "IP ADDRESS", body: ip },
        { header: "LOCATION", body: `${city}, ${region}, ${country_name ?? country}` },
        { header: "TIMEZONE", body: timezone },
        { header: "ISP", body: isp ?? org }
    ]

    return (
        <div className="card-container">
            <p className="card-container__info">You are allowed to make 500 query per day.</p>
            <div className="card-wrapper">
                {data.map(a =>
                    <Card key={a.header} header={a.header} body={a.body} />
                )}
            </div>
        </div>
    )
}
