import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputContainer, InputPrimary } from './styles';

export default function Input({ name, disabled, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <InputContainer>
            {error && <span className="error">{error}</span>}

            <InputPrimary
                ref={inputRef}
                id={fieldName}
                defaultValue={defaultValue}
                disabled={disabled && true}
                {...rest}
            />
        </InputContainer>
    );
}
