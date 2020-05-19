import React, { Component } from 'react';

import { Grid, Button } from '@material-ui/core';

import split from '../assets/images/split.png';
import bind from '../assets/images/bind.png';
import haven from '../assets/images/haven.png';

class MapPicker extends Component {

    state = {
        mapList: [split, bind, haven],
        mapStringList: ['SPLIT', 'BIND', 'HAVEN'],
        selectedMap: null,
        selectedMapString: ""
    }
    
    generateMap(){
        const mapNumber = Math.floor(Math.random() * (this.state.mapList.length));

        this.setState({ 
            selectedMap: this.state.mapList[mapNumber],
            selectedMapString: this.state.mapStringList[mapNumber]
         });
    }

    render(){
        return (
            <React.Fragment>
                <div className="Map-generator">
                    <Grid item sm={12}>
                        <div className="Map-list">
                            <h2>MAP PICKER</h2>
                                <Button variant="outlined" color="secondary" className="Generate-map" onClick={() => this.generateMap()}
                                > RANDOM MAP</Button>
                        </div>
                        <div className="Map-image">
                        {
                            this.state.selectedMap !== null ?
                                <>
                                    <h2> {this.state.selectedMapString.toString()} </h2>
                                    <img src={this.state.selectedMap} alt="map-logo" /> 
                                </>
                            : null
                        }
                        </div>  
                    </Grid>
                </div>  
                 
            </React.Fragment>        
        ) 
    }        
}

export default MapPicker;