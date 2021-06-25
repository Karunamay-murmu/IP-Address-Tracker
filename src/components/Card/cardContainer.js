import React from 'react'

import Card from "./card";

export default function CardContainer({ response: { ip, location, isp } }) {
    const data = [
        { header: "IP Address", body: ip },
        { header: "LOCATION", body: `${location.city}, ${location.region}, ${location.country}` },
        { header: "TIMEZONE", body: location.timezone },
        { header: "ISP", body: isp }
    ]

    return (
        <>
            {data.map(a =>
                <Card header={a.header} body={a.body} />
            )}
        </>
    )
}
