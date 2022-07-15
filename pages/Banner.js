import React from 'react'
import Box from '@mui/material/Box';

const Banner = () => {
  return (
    <div>

            <Box className='body' style={{height:'1500px',padding:'5px 60px',display:'flex'}}>
     
     <img style={{height:'400px',width:'550px',margin:'10% 0',}} src="hero-placeholder.webp" />
     <Box style={{width:'50%',fontSize:'30px'}}>
         <h1  style={{width:'550px',fontSize:'55px',margin:'10% auto 30px 85px',height:'50px'}}>Flawless templates, easy editing, no coding required — that's Zyro website builder</h1>
         <br />
     <Box style={{margin:'45% 0 0 85px'}}>
     <p style={{fontSize:'20px',width:'70%',margin:'-35px 0 0 0'}}>Build a website and save up to 75% with plans from $2.99/mo. Deal ends in:</p>
     <Box style={{display:'flex',margin:'30px 0 0 0'}}>
         <Box style={{border:'white 1px solid',width:'65px',height:'65px',margin:'0px 0 0 -1px',textAlign:'center',borderRadius:'10px'}}><p style={{margin:'10px 0 0 0'}}>0</p></Box><p style={{margin:'12px 0 0 0'}}>:</p>
         <Box style={{border:'white 1px solid',width:'65px',height:'65px',margin:'5px 0 0 -1px',textAlign:'center',borderRadius:'10px',margin:'0px 0 0 10px'}}><p style={{margin:'10px 0 0 0px'}}>0</p></Box><p style={{margin:'12px 0 0 0'}}>:</p>
         <Box style={{border:'white 1px solid',width:'65px',height:'65px',margin:'5px 0 0 -1px',textAlign:'center',borderRadius:'10px',margin:'0px 0 0 10px'}}><p style={{margin:'10px 0 0 0px'}}>0</p></Box><p style={{margin:'12px 0 0 0'}}>:</p>
         <Box style={{border:'white 1px solid',width:'65px',height:'65px',margin:'5px 0 0 -1px',textAlign:'center',borderRadius:'10px',margin:'0px 0 0 10px'}}><p style={{margin:'10px 0 0 0px'}}>0</p></Box><p style={{margin:'12px 0 0 0'}}>:</p>
         
     </Box>
         <Box style={{width:'200px',height:'65px',margin:'30px 0 0 0px',textAlign:'center',}}><button style={{borderRadius:'30px',height:'50px',width:'200px',backgroundColor:'navy',border:'none'}}>S T A R T  F O R  F R E E</button>
         <p style={{fontSize:'15px',margin:'30px 0 0 -10px'}}>(icon)No credit card required</p>
         </Box>
     </Box>
     </Box>
    </Box>
         <Box style={{display:'flex',justifyContent:'space-between',width:'100%',margin:'-50% 0 0 0',padding:'0 60px'}}>
             <Box style={{width:'350px',height:'100px',color:'black',backgroundColor:'white',borderRadius:'20px',padding:'3% 0 0 10px'}}>
              <Box><img src='shield-fill-check.svg' /></Box>Free domain for 1 year</Box>
             <Box style={{width:'350px',height:'100px',color:'black',backgroundColor:'white',borderRadius:'20px',padding:'3% 0 0 10px'}}>
              <Box><img src='shield-fill-check.svg' /></Box>24/7 customer support</Box>
             <Box style={{width:'350px',height:'100px',color:'black',backgroundColor:'white',borderRadius:'20px',padding:'3% 0 0 10px',}}>
              <Box style={{textAlign:'center'}}><img src='shield-fill-check.svg' /></Box>30-day money-back guarantee</Box>
     </Box>
  
    </div>
  )
}

export default Banner