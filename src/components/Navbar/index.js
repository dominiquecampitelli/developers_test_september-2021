import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import api from '../../services/api';

import Input from '../../components/Input';
import LogOff from '../../components/LogOff';

import { Container, HeaderLine, Logo, Search, Button } from './styles';

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
        }
    }
    return (
        <Container>
            <HeaderLine>
                <Logo>Netflicos</Logo>
                <LogOff />
            </HeaderLine>
            <Form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{ width: '100%' }}
            >
                <Search>
                    <Input placeholder="Pesquise" type="text" name="query" />
                    <Button type="submit">Buscar</Button>
                </Search>
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
        </Container>
    );
}
