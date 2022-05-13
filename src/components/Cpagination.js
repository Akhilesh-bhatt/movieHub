import { Pagination } from '@mui/material'
import React from 'react'

const Cpagination = ({setPage,totalPage=10}) => {
    const handleOnChange=(page)=>{
        setPage(page);
        window.scroll(0,0);
    }
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <Pagination color="primary" count={totalPage} onChange={(c)=>handleOnChange(c.target.textContent)}/>
        </div>
    )
}

export default Cpagination
