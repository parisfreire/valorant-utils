import React from 'react';
import { Grid } from '@material-ui/core';
  
function Footer() {
  return ( 
    <Grid item xs={12}>
          <div class="Footer">
            <p>
              <span role="img" aria-label="demon">😈</span>
                Designed and developed by 
                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/rodrigolamela"> Lamela</a> & 
                <a target="_blank" rel="noopener noreferrer" href="https://www.parisfreire.com"> Paris </a> & 
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Balberte"> Borja </a>
              <span role="img" aria-label="demon">😈</span>
            </p>
          </div>
        </Grid>
  )
}

export default Footer;