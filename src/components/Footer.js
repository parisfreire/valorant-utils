import React from 'react';
import { Grid, Paper } from '@material-ui/core';
  
function Footer() {
  return ( 
    <Grid item xs={12}>
        <Paper elevation={3}>  
          <div class="Footer">
            <p>
              <span>😈</span>
              designed and developed by 
                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/rodrigolamela"> Lamela</a> & 
                <a target="_blank" rel="noopener noreferrer" href="https://www.parisfreire.com"> Paris </a>
              <span>😈</span>

             <br/>
            </p>
             
          </div>
          </Paper> 
        </Grid>
  )
}

export default Footer;