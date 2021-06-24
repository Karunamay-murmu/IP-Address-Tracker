import React from 'react'

export default function Error({ obj }) {
    return (
        <div>
            <p className="error-text" aria-label={obj.messgae}>{obj.message}</p>
        </div>
    )
}
