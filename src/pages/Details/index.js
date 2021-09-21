import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import { BackLink } from './styles';

export default function Details() {
    const { id, media_type } = useParams();
    const [mediaData, setMediaData] = useState([]);

    useEffect(() => {
        async function loadDetails() {
            const options = {
                method: 'GET',
            };

            const response = await api(`/${media_type}/${id}`, null, options);
            const { result } = response;
            setMediaData(result);
        }

        loadDetails();
    }, []);

    return (
        <>
            <Navbar />
            {mediaData && (
                <div>
                    <img
                        alt={`poster-${mediaData.id}`}
                        width="350"
                        src={`https://image.tmdb.org/t/p/w500${mediaData.poster_path}`}
                    ></img>
                    {mediaData.original_title}
                </div>
            )}
            <BackLink href="/home">Voltar</BackLink>
        </>
    );
}
