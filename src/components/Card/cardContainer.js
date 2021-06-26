import React from 'react'

import Card from "./card";

export default function CardContainer({ response: { query, city, regionName, country, timezone, zip, isp } }) {
    const data = [
        { header: "IP Address", body: query },
        { header: "LOCATION", body: `${city}, ${zip}, ${regionName}, ${country}` },
        { header: "TIMEZONE", body: timezone },
        { header: "ISP", body: isp }
    ]

    return (
        <>
            {data.map(a =>
                <Card key={a.header} header={a.header} body={a.body} />
            )}
        </>
    )
}
