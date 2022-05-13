const UseGenre = (selectedGenres) => {
    if(selectedGenres.length<1) return "";
    
    const genreId=selectedGenres.map((g)=>g.id)
    return genreId.reduce((acc,curr)=>acc+","+curr);
}

export default UseGenre;
