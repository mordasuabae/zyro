import React from 'react'
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <div>
        <Box className='body' style={{height:'100%',width:'100%',fontSize:"10px"}}>
      <Box style={{height:'70px',padding:'5px 0px'}}>
      <ul style={{display:'flex',listStyle:'none'}}>
        <li  style={{width:'100px',margin:'0 0 0 2%'}}><img src='zyro.png' />
        <Box >
  <span></span>
  <Box className="dropdown-content">
  <p>Hello World!</p>
  </Box>
   </Box>
        </li>
        <li className="dropdown" style={{width:'100px',margin:'2% 0 0 2%'}}>Why Zyro
        <Box >
  <span></span>
  <Box className="dropdown-content">
  <p>Hello World!</p>
  </Box>
   </Box>
        </li>
        <li className="dropdown" style={{width:'100px',margin:'2% 0 0 2%'}}>Products
        <Box >
  <span></span>
  <Box className="dropdown-content">
  <p>Hello World!</p>
  </Box>
   </Box>
        </li>
        <li className="dropdown" style={{width:'100px',margin:'2% 0 0 3%'}}>Resources
        <Box >
  <span></span>
  <Box className="dropdown-content">
  <p>Hello World!</p>
  </Box>
   </Box>
        </li>
        <li className="dropdown" style={{width:'100px',margin:'2% 0 0 3%'}}>Website templates
        <Box >
  <span></span>
  <Box className="dropdown-content">
  <p>Hello World!</p>
  </Box>
   </Box>
        </li>
        <li className="dropdown" style={{width:'100px',margin:'2% 0 0 3%'}}>Pricing
        <Box >
  <span></span>
  <Box className="dropdown-content">
  <p>Hello World!</p>
  </Box>
   </Box>
        </li>
      <ul style={{display:'flex',justifyContent:'end',listStyle:'none'}}>
        <li className="dropdown" style={{width:'100px',margin:'8% 0 0 3%'}}>EN
        <Box >
  <span></span>
  <Box className="dropdown-content">
  <p>Hello World!</p>
  </Box>
   </Box>
        </li>
        <li className="dropdown" style={{width:'100px',margin:'8% 0 0 3%'}}>Sign In
        <Box >
  <span></span>
  <Box className="dropdown-content">
  <p>Hello World!</p>
  </Box>
   </Box>
        </li>
        <li className="dropdown" style={{width:'100px',margin:'8% 0 0 3%'}}>
            <button className="dropdown" style={{border:'0.5px white solid',width:'170px',height:'30px',borderRadius:'20px',margin:'-9% 0 0 0',fontSize:"10px",background:'linear-gradient(180deg, #f5536f 0%, #fb506e 100%)'}}><p >START FOR FREE</p>
      <Box >
  <span></span><Box  className="dropdown-content">
  <p>Hello World!</p>
  </Box>
   </Box>
   
            </button>
        </li>
      </ul>
      </ul>

      </Box>
      </Box>
    </div>
  )
}

export default Navbar