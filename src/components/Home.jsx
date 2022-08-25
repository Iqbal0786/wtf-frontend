import { AccountCircle } from '@mui/icons-material'
import { AppBar, Box, Button, InputAdornment, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
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
    <Box sx={{ marginTop:"10px" , width:"100%" , heigth:"300px" }}>
      <img src='https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?cs=srgb&dl=pexels-leon-ardho-1552252.jpg&fm=jpg' width={"100%"} height={"100%"}/>
    </Box>
    <Box sx={{width:"90%" ,height:"55px",margin:"auto" , marginTop:"30px" ,marginBottom:"100px" ,backgroundColor:"white"}}>
    <TextField
        id="input-with-icon-textfield"
         placeholder='Search gym name here'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{marginLeft:"10px"}}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{height:"60px" , width:"100%"}}
      />
    </Box>
        {/* filter and result section */}
    <Box sx={{width:"90%" , margin:"auto" ,height:"700px" , display:"flex", justifyContent:"space-between"}}>
        <Box sx={{width:"30%" , heigth:"100%" , color:"white"}}>
          <Typography>Filters</Typography>
        </Box>
        <Box sx={{width:"80%" , heigth:"100%" , color:"white"}}>
            <Box sx={{width:"100%" ,heigth:"350px" , backgroundColor:"#505050" , display:"flex" ,justifyContent:"space-between"}}>
                   <Box sx={{width:"50%" , height:"100%"}}></Box>
                   <Box sx={{width:"50%" , height:"350px" , padding:"10px"}}>
                    <Typography variant='h5' sx={{fontWeight:"bold" ,marginBottom:"5px"}}>
                        WTF:Hybrid Gym
                    </Typography>
                    <Typography variant='h5'>* * * * *</Typography>
                    <Typography variant='p' sx={{fontSize:"19px"}}>Near shastri nagar </Typography>
                    <Typography> 3.18 mintues away || 2.2km</Typography>
                     <Box sx={{width:"100%" ,display:"flex" ,justifyContent:"space-between" ,marginTop:"35%" }}>
                          <Typography>3000 for 3 months</Typography>
                          <Button sx={{backgroundColor:"#920909" , color:"whitesmoke" ,marginRight:"10px"}}>Book Now</Button>
                     </Box>
                   </Box>
            </Box>
        </Box>
    </Box>
    </>
  )
}
