import React, { useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from "react-router-dom";


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if(value===0) navigate('/');
    else if(value===1) navigate('/Movies');
    else if(value===2) navigate('/TvSeries');
    else if(value===3) navigate('/Search');
  }, [value,navigate])

  return (
    <Box sx={{ width: '100%',bottom:0,position:'fixed',zIndex:100}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        // style={{backgroundColor:'#f3e6e6'}}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon/>} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="Tv Series" icon={<TvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
