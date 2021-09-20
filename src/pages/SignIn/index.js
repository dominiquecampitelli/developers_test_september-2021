import React, { useRef, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import api from '../../services/api';
import history from '../../services/history';

import Input from '../../components/Input';

const schema = Yup.object().shape({
    email: Yup.string().required('Insira seu email'),
    password: Yup.string().required('Insira sua senha'),
});

export default function DataTakerUser() {
    const formRef = useRef(null);

    async function handleSubmit(data) {
        console.log(data);

        try {
            await schema.validate(data, {
                abortEarly: false,
            });

            const options = {
                method: 'POST',
                body: JSON.stringify(data),
            };

            const response = await api('/session', null, options);
            const { token } = response;
            console.log(response);

            sessionStorage.setItem('token', token);
            history.push('/home');
        } catch (err) {
            console.error('Tente novamente mais tarde', err);
            //setLoading(false);

            const validationErrors = {};
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach((error) => {
                    validationErrors[error.path] = error.message;
                });
                formRef.current.setErrors(validationErrors);
            }
        }
    }

    return (
        <>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input placeholder="email" type="text" name="email" />
                <Input placeholder="Senha" type="text" name="password" />
                <button type="submit">Entrar</button>
            </Form>
        </>
    );
}
