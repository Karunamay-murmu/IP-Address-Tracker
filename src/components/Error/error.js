import React from 'react'

export default function Error({ obj }) {
    const style = {
        padding: "0 1rem",
        fontSize: "1rem",
        color: "#ffffff",
        textAlign: "center",
        marginTop: "1rem",
        fontWeight: "500"

    }
    
    return (
        <div>
            <p style={style}className="error-text" aria-label={obj.messgae}>{obj.message}</p>
        </div>
    )
}
