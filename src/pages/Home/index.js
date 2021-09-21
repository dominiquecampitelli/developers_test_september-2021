import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import history from '../../services/history';

import Navbar from '../../components/Navbar';

export default function Home() {
    const [mediaData, setMediaData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
        console.log(mediaData);
    }, [mediaData]);

    useEffect(() => {
        async function loadMovies() {
            const options = {
                method: 'GET',
            };

            const response = await api('/trending/movie/week', null, options);
            const { result, total_pages } = response;

            setPage(page);
            setTotalPages(total_pages);
            setMediaData(result.results);
        }

        loadMovies();
    }, []);

    return (
        <>
            <Navbar />
            {mediaData &&
                mediaData.length > 0 &&
                mediaData.map((element) => (
                    <div
                        key={element.id}
                        onClick={() =>
                            history.push(
                                `/details/${element.media_type}/${element.id}`
                            )
                        }
                    >
                        <img
                            alt={`poster-${element.id}`}
                            width="350"
                            src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                        ></img>
                        {element.original_title}
                    </div>
                ))}
        </>
    );
}
