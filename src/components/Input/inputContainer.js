import React, { useState } from 'react';

import Input from "./input";
import Error from "../Error/error";

import { apiCall } from '../../api/api';

export default function InputContainer() {
    const [ip, setIp] = useState("");
    const [error, setError] = useState(null);

    const onInputChange = (e) => {
        setIp(e.target.value);
        error && setError(null);
    }

    const onApiCall = async () => {
        const response = await apiCall(ip);
        console.log(response)
        if (response.code === 422) {
            setError({ message: response.messages });
        }
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
