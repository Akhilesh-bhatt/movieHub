import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import Template from '../components/Template'
import Cpagination from '../components/Cpagination';
import Genres from '../components/Genres';
import UseGenre from '../components/UseGenre';

export default function Movies() {
    const [page, setPage] = useState(1)
    const [content, setcontent] = useState([])
    const [totalPage, setTotalPage] = useState();
    const [genres, setGenres] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([])
    const genreForUrl=UseGenre(selectedGenres);
    const fetchMovies = async () => {
        const { data } = await axios.get(`
        https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForUrl}`);

        setcontent(data.results);
        setTotalPage(data.total_pages);
        // console.log(data);
    }

    useEffect(() => {
        fetchMovies();
    }, [page,genreForUrl])

    return (
        <Container >
            <Typography  variant="h2" align="center" style={{margin:"10px 0px"}}>MOVIES</Typography>
            <Genres type='movie' genres={genres} setGenres={setGenres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} setPage={setPage} /> 
            <div className="trending" style={{display:'flex',flexWrap:'wrap',flexDirection:'row',justifyContent:'center'}}>
                {content && content.map((c) => (
                    <Template
                        key={c.id} 
                        id={c.id}
                        poster={c.poster_path} 
                        title={c.title || c.name} 
                        date={c.first_air_date || c.release_date}
                        media_type='movie' 
                        vote_average={c.vote_average}
                    />
                ))}
            </div>
            {totalPage>1&&
            <Cpagination setPage={setPage} totalPage={totalPage}/>
            }
        </Container>
    )
}
