import React from "react";

import Button from "../Button/button";

import "../../static/stylesheets/css/inputContainer.css";

export default function Input({ input, onInputSubmit, onInputChange }) {
    return (
        <>
            <div className="input-container">
                <input
                    className="input-container--input"
                    required
                    type="text"
                    minLength="7"
                    maxLength="15"
                    placeholder="Search for any IP address or domain"
                    title="Search for any IP address or domain"
                    pattern=""
                    aria-label="Search for any IP address or domain"
                    value={input}
                    onChange={onInputChange}
                />
                <Button handleSubmit={onInputSubmit} />
            </div>
        </>
    );
}
