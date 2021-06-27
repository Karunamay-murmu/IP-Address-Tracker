import React, { useState, useContext } from 'react';

import Input from "./input";
import Error from "../Error/error";

import { FetchContext } from '../../contexts/fetchContext';

export default function InputContainer() {
    const [input, setInput] = useState("");

    const { apiError, setApiError } = useContext(FetchContext);

    const onInputChange = (e) => {
        setInput(e.target.value);
        apiError && setApiError(null);
    }

    return (
        <div className="input-wrapper">
            <p className="input-wrapper__header">IP Address Tracker</p>
            <Input input={input} onInputChange={onInputChange} />
            {
                apiError && <Error obj={apiError} />
            }
            {/* <p className="input-wrapper__error"></p> */}
        </div>
    )
}
