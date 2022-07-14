import React from 'react'
import Box from '@mui/material/Box';

const Banner = () => {
  return (
    <div>

            <Box className='body' style={{height:'1500px',padding:'5px 60px',display:'flex'}}>
     
     <img style={{height:'400px',width:'550px',margin:'10% 0',}} src="hero-placeholder.webp" />
     <Box style={{width:'50%',fontSize:'30px'}}>
         <h1  style={{width:'550px',fontSize:'55px',margin:'10% auto 0 85px',height:'50px'}}>Flawless templates, easy editing, no coding required — that's Zyro website builder</h1>
     <Box style={{margin:'35% 0 0 85px'}}>
     <p style={{fontSize:'20px',width:'70%'}}>Build a website and save up to 75% with plans from $2.99/mo. Deal ends in:</p>
     <Box style={{display:'flex',margin:'30px 0 0 0'}}>
         <Box style={{border:'white 1px solid',width:'65px',height:'65px',margin:'auto 0 0 -1px',textAlign:'center',borderRadius:'10px'}}>0</Box>:
         <Box style={{border:'white 1px solid',width:'65px',height:'65px',margin:'auto 0 0 -1px',textAlign:'center',borderRadius:'10px'}}>0</Box>:
         <Box style={{border:'white 1px solid',width:'65px',height:'65px',margin:'auto 0 0 -1px',textAlign:'center',borderRadius:'10px'}}>0</Box>:
         <Box style={{border:'white 1px solid',width:'65px',height:'65px',margin:'auto 0 0 -1px',textAlign:'center',borderRadius:'10px'}}>0</Box>:
         
     </Box>
         <Box style={{width:'200px',height:'65px',margin:'30px 0 0 0px',textAlign:'center',}}><button style={{borderRadius:'10px',height:'50px',width:'200px'}}>S T A R T  F O R  F R E E</button>
         <p style={{fontSize:'15px',margin:'30px 0 0 -30px'}}>(icon)No credit card required</p>
         </Box>
     </Box>
     </Box>
    </Box>
         <Box style={{display:'flex',justifyContent:'space-between',width:'100%',margin:'-50% 0 0 0'}}>
             <Box style={{width:'400px',height:'200px',color:'black',backgroundColor:'white',borderRadius:'20px'}}>L</Box>
             <Box style={{width:'400px',height:'200px',color:'black',backgroundColor:'white',borderRadius:'20px'}}>L</Box>
             <Box style={{width:'400px',height:'200px',color:'black',backgroundColor:'white',borderRadius:'20px'}}>L</Box>
     </Box>
  
    </div>
  )
}

export default Banner