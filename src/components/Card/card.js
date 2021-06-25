import React from 'react';

function Card({ header, body }) {
    return (
        <div className="card-container">
            <div className="card-container__info-box">
                <p className="card-container__info-box--header">
                    {header}
                </p>
                <h2 className="card-container__info-box--text">
                    {body}
                </h2>
            </div>
        </div>
    )
}

export default Card;