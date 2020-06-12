import React from 'react';
import './App.css';

import TeamGenerator from '../TeamGenerator';
import MapPicker from '../MapPicker';
import SideDraw from '../SideDraw';

import Header from '../Header';
import Footer from '../Footer';

import Grid from '@material-ui/core/Grid';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


function App() {
  return ( 
    <Grid item xs={12}>
      <div className="App">
        <Router>
          <Header/>
          <Grid item xs={12}>
            <div class="Content">
            <Switch>
              <Redirect from="/" exact to="/valorant-utils" />
              <Redirect from="/valorant-utils" exact to="/valorant-utils/team-generator" />
              <Route path="/valorant-utils/team-generator">
                <TeamGenerator />
              </Route>
              <Route path="/valorant-utils/map-picker">
                <MapPicker />
              </Route>
              <Route path="/valorant-utils/side-draw">
                <SideDraw />
              </Route>
          </Switch>
            </div>
          </Grid>
        </Router>  
        <Footer/>
      </div>
    </Grid>
  );
}

export default App;
