import React from 'react'
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <div>
        <Box className='body' style={{height:'100%',width:'100%'}}>
      <Box style={{height:'70px',padding:'5px 0px'}}>
      <ul style={{display:'flex',listStyle:'none'}}>
        <li style={{width:'130px'}}>(logo)</li>
        <li style={{width:'130px'}}>Why Zyro</li>
        <li style={{width:'130px'}}>Products</li>
        <li style={{width:'130px'}}>Resources</li>
        <li style={{width:'130px'}}>Website templates</li>
        <li style={{width:'130px'}}>Pricing</li>
      <ul style={{display:'flex',justifyContent:'end',listStyle:'none'}}>
        <li style={{width:'130px'}}>EN</li>
        <li style={{width:'130px'}}>Sign In</li>
        <li style={{width:'130px'}}>
            <button style={{border:'0.5px white solid',width:'170px',backgroundColor:'pink',height:'40px',borderRadius:'20px',margin:'-5% 0 0 0'}}>START FOR FREE</button>
        </li>
      </ul>
      </ul>

      </Box>
      </Box>
    </div>
  )
}

export default Navbar