import React, { useState } from 'react';

import Input from "./input";
import Error from "../Error/error";

import { validateIp } from "../../utils/validation";
import { apiCall } from '../../api/api';

export default function InputContainer() {
    const [ip, setIp] = useState("");
    const [error, setError] = useState(null);

    const onInputChange = (e) => {
        setIp(e.target.value);
        error && setError(null);
    }


    const onApiCall = () => {
        const validIp = validateIp(ip);
        if (validIp) {
            apiCall(ip);
            return
        }
        setError({
            message: "Please enter a valid IPv4 address."
        })
    }


    return (
        <div>
            <Input ip={ip} onInputChange={onInputChange} onApiCall={onApiCall} />
            {
                error && <Error obj={error} />
            }
        </div>
    )
}
