import React from 'react';

import "../../static/stylesheets/css/card.css"

function Card({ header, body }) {
    return (
        <div className="card">
            <div className="card__info-box">
                <p className="card__info-box--header">
                    {header}
                </p>
                <p className="card__info-box--text">
                    {body}
                </p>
            </div>
        </div>
    )
}

export default Card;