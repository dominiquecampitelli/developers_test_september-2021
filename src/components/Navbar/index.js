import React, { useRef, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import api from '../../services/api';

import Input from '../../components/Input';

import { Container, Nav, Logo } from './styles';

export default function Navbar() {
    const formRef = useRef(null);
    const [results, setResults] = useState([]);

    async function handleSubmit(data) {
        const { query } = data;

        try {
            const options = {
                method: 'GET',
            };

            const response = await api('/search/multi', { query }, options);
            const { result } = response;

            setResults(result.results);
            console.log(response);
        } catch (err) {
            console.error('Tente novamente mais tarde', err);
            //setLoading(false);
        }
    }
    return (
        <Container>
            <Nav>
                <Logo>Netflicos</Logo>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input placeholder="Pesquise" type="text" name="query" />
                    <button type="submit">Buscar</button>
                </Form>
                <div>
                    {results &&
                        results.length > 0 &&
                        results.map((element) => (
                            <div key={element.id}>
                                <img
                                    alt={`poster-${element.id}`}
                                    width="350"
                                    src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                                ></img>
                                {element.original_title}
                            </div>
                        ))}
                </div>
            </Nav>
        </Container>
    );
}
