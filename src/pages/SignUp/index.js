import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import api from '../../services/api';
import history from '../../services/history';

import Input from '../../components/Input';
import { Container, HeaderLine, ButtonGroup } from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('Insira seu nome'),
    email: Yup.string().required('Insira seu email'),
    password: Yup.string().required('Insira sua senha'),
});

export default function SignUp() {
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

            const response = await api('/user', null, options);
            console.log(response);

            history.push('/');
        } catch (err) {
            console.error('Tente novamente mais tarde', err);
            sessionStorage.removeItem('token');

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
                <Container>
                    <HeaderLine>Cadastro</HeaderLine>
                    <Input placeholder="Nome" type="text" name="name" />
                    <Input placeholder="E-mail" type="text" name="email" />
                    <Input placeholder="Senha" type="text" name="password" />
                    <ButtonGroup>
                        <button type="submit">Cadastrar</button>
                        <a href="/">Fazer login</a>
                    </ButtonGroup>
                </Container>
            </Form>
        </>
    );
}
