import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <AppBar sx={{position:"" , backgroundColor:"#0d0d0d" , color:"white"}}>
        <Toolbar>
            Home
            <Box sx={{marginLeft:"auto" , width:"60%" , color:"white" , display:"flex" , justifyContent:"space-between" ,paddingTop:"1%"}}>
              <Link to={""} style={{textDecoration:"none" , color:"whitesmoke"}}>
              <Typography>Fitness</Typography>
              </Link>
              <Link to={""} style={{textDecoration:"none" , color:"whitesmoke"}}>
              <Typography>Fitness</Typography>
              </Link>
              <Link to={""} style={{textDecoration:"none" , color:"whitesmoke"}}>
              <Typography>Fitness</Typography>
              </Link>
              <Link to={""} style={{textDecoration:"none" , color:"whitesmoke"}}>
              <Typography>Fitness</Typography>
              </Link>
              <Link to={""} style={{textDecoration:"none" , color:"whitesmoke"}}>
              <Typography>Fitness</Typography>
              </Link>
              <Link to={""} style={{textDecoration:"none" , color:"whitesmoke"}}>
              <Button sx={{marginTop:"-6px" , backgroundColor:"#d50202" , color:"whitesmoke"}}>Fitness</Button>
              </Link>
               
            </Box>
        </Toolbar>
    </AppBar>
    </>
  )
}
