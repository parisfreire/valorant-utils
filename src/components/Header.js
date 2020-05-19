import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Link } from "react-router-dom";

import logo from '../assets/images/logo_valorant.png';
  
function Header() {
  return ( 
    <Grid item xs={12}>
        <Paper elevation={3}>  
          <div className="Header">
          
            <img src={logo} className="App-logo" alt="logo1" /> 
                <nav class="Navigation-bar">
                    <ul>
                        <li>
                            <Link to="/valorant-utils/team-generator">TEAM GENERATOR</Link>
                        </li>
                        <li>
                            <Link to="/valorant-utils/map-picker">MAP PICKER</Link>
                        </li>
                    </ul>
                </nav>   
               
          </div>
          </Paper> 
        </Grid>
  )
}

export default Header;