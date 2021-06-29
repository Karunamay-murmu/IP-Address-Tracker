import React from 'react'

import iconArrow from "../../static/assets/icon-arrow.svg"

import "../../static/stylesheets/css/button.css";

export default function Button({ handleSubmit }) {
    return (
        <button className="btn" type="submit" onClick={handleSubmit} aria-label="submit" title="Submit">
            <img src={iconArrow} alt="submit" />
        </button>
    )
}
