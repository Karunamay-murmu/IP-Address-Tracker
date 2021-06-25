import React from 'react'

import iconArrow from "../../static/assets/icon-arrow.svg"

import "../../static/stylesheets/css/button.css";

export default function Button({ onclick }) {
    return (
        <button className="btn" type="submit" onClick={onclick} aria-label="submit" title="Submit">
            <img src={iconArrow} alt="submit" />
        </button>

    )
}
