import { Chip } from '@mui/material';
import axios from 'axios'
import React, { useEffect } from 'react'

const Genres = ({
    genres,setGenres,selectedGenres,setSelectedGenres,setPage,type
}) => {
     const handleAdd=(genre)=>{
         setSelectedGenres([...selectedGenres,genre]);
         setGenres(genres.filter((g)=>g.id !== genre.id));
         setPage(1);
     }

     const handleRemove=(genre)=>{
        setSelectedGenres(selectedGenres.filter((g)=>g.id!==genre.id));
        setGenres([...genres,genre]);
        setPage(1);
     }
    const fetchGenres= async ()=>{
        const {data}= await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

        setGenres(data.genres);
        // console.log(genres);
    }

    useEffect(() => {
        fetchGenres();
        return () => {
            setGenres({})
        }
    }, [])
    return (
        <div>
           {selectedGenres&& selectedGenres.map((e)=>(
               <Chip 
               label={e.name}
               key={e.id}
               size='small'
                style={{margin:2,textEmphasisColor:'white'}}
                clickable
                color='primary'
                onDelete={()=>handleRemove(e)}
               />
           ))}
           {genres&& genres.map((e)=>(
               <Chip 
               label={e.name}
               key={e.id}
               size='small'
                style={{margin:2}}
                clickable
                onClick={()=>handleAdd(e)}
               />
           ))}
        </div>
    )
}

export default Genres
