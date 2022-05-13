import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AnimationIcon from '@mui/icons-material/Animation';

export default function Header() {
    return (
        <>
        <AppBar position='fixed' style={{zIndex:100}}>
            <Toolbar >
            <Typography  onClick={()=>window.scroll(0,0)} variant='h6' textAlign="center" style={{cursor:'pointer',fontWeight:'bold',color:'white',display:'flex',justifyContent:'center'}}><AnimationIcon fontSize='large' /> MovieHub</Typography>
            </Toolbar>
        </AppBar>
        </>
    )
}
