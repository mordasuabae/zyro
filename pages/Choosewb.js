import React from 'react'
import Grid from '@mui/material/Grid';
import { borderRadius } from '@mui/system';


const Choosewb = () => {
  return (
    <div className='body' style={
      {
        // border: 'red 1px solid',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '70px',
        marginBottom: 200
      }
    }>
      <Grid container spacing={7} columns={12} sx={{padding:'0 65px'}}>
        <Grid item xs={12} md={4}>
          <div style={{ width: '90%', height: '800px', background: 'white',borderRadius:'20px',margin:'0 0 0 0' }}>
          <h1 style={
            {
              margin:'40px 0 0 40px',
            }
          }>Plain UI for Bulma,
            Bootstrap & Tailwind
          </h1>
          <p style={
            {
              padding:'0 40px'
            }
          }>We've added a set of components that doesn't dictate style, Plain UI allows you to start with a minimalist design and customize it in no time</p>
          
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ width: '90%',margin:'0 0 0 0', height: '800px', background: 'white',borderRadius:'20px' }}>
          <h1 style={
            {
              margin:'40px 0 0 40px'
            }
          }>CSS Filters 
            and Transitions
          </h1>
          <p style={
            {
              padding:'0 40px'
            }
          }>You can play with components and graphics easily with the tools added in the right menu. We are consistently expanding the editor's capabilities.</p>
        
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ width: '90%',margin:'0 0 0 0', height: '800px', background: 'white',borderRadius:'20px' }}>
          <h1 style={
            {
              margin:'40px 0 0 40px'
            }
          }>Fixes improving backend structure</h1>
          <p style={
            {
              padding:'0 40px'
            }
          }>Work you can't see, but it's there. We are improving our backend to be able to seemlessly add new functionality</p>
         
          </div>
        </Grid>
      </Grid>

    </div>
  )
}

export default Choosewb