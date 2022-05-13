import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Template from '../components/Template'
import { Typography } from '@mui/material';
import Cpagination from '../components/Cpagination';

export const Trending = () => {
    const [page, setPage] = useState(1)
    const [content, setcontent] = useState([])
    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);

        setcontent(data.results);
        // console.log(data.results);
    }

    useEffect(() => {
        fetchTrending();
    }, [page])

    return (
        <div >
            <Typography  variant="h2" align="center" style={{margin:"10px 0px"}}>TRENDING</Typography>
            <div className="trending" style={{display:'flex',flexWrap:'wrap',flexDirection:'row',justifyContent:'center'}}>
                {content && content.map((c) => (
                    <Template
                        key={c.id} 
                        id={c.id}
                        poster={c.poster_path} 
                        title={c.title || c.name} 
                        date={c.first_air_date || c.release_date}
                        media_type={c.media_type} 
                        vote_average={c.vote_average}
                    />
                ))}
            </div>
            <Cpagination setPage={setPage}/>
        </div>
    )
}

export default Trending;
