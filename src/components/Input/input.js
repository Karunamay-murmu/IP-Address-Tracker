import React from "react";

import iconArrow from "../../static/assets/icon-arrow.svg";

export default function Input({ ip, onApiCall, onInputChange }) {
    return (
        <div>
            <input
                required
                type="text"
                minLength="7"
                maxLength="15"
                title="Enter IPv4 address or domain"
                pattern=""
                aria-label="Enter IPv4 address or domain"
                value={ip}
                onChange={onInputChange}
            />
            <button type="submit" onClick={onApiCall} aria-label="submit" title="Submit">
                <img src={iconArrow} alt="submit" />
            </button>
        </div>
    )
}