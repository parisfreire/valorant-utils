import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';

import Side from './Side';


class SideGenerator extends Component {

    state = {
        teamCount:0,
        teamList:[],
        attackerTeam:[],
        defendingTeam:[]
    }

    saveTeam(){
        const teams = this.state.teamList;

        if(this.teamInput.value !== ""){
            teams.push({
                "id": this.state.teamCount + 1,
                "name": this.teamInput.value
            });
            
            this.setState({ teamList : teams, teamCount: this.state.teamCount + 1 });
        }

        this.teamInput.focus();
    }

    shuffleArray(array) {
        let i = array.length - 1;
        const newArray = [...array];
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = newArray[i];
          newArray[i] = newArray[j];
          newArray[j] = temp;
        }
        return newArray;
    }

    async generateSides(){
        //Clearing teams from state before assign teams again
        await this.setState(
            {
                attackerTeam : [],
                defendingTeam : []
            }
        );
        this.assignSidesToTeams();
    }

    assignTeamToSide(){
        
        let addToAttackerTeam = true;
        let attackerTeam = this.state.attackerTeam;
        let defendingTeam = this.state.defendingTeam;
        const suffledTeamList = this.shuffleArray(this.state.teamList);

        suffledTeamList.map(team => {
            if(addToAttackerTeam){
                if(!this.state.attackerTeam.includes(team)){
                    attackerTeam.push(team);
                }
            }else{
                if(!this.state.defendingTeam.includes(team)){
                    defendingTeam.push(team); 
                }
            }
            addToAttackerTeam = !addToAttackerTeam;

            return null;
        });

        this.setState({attackerTeam : attackerTeam});
        this.setState({defendingTeam : defendingTeam});
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          this.teamInput.blur();
          this.saveTeam();
        }
      }

    render(){
        return (
            <React.Fragment>
                <div className="Side-generator">
                    <Grid item md={6} sm={12}>
                                <div className="Team-list">
                                <h2>TEAM LIST</h2>
                                    <Grid item sm={12}>
                                        <div className="Add-team-wrapper">
                                            <Grid item sm={8}>
                                                <input className="Team-input" type="text" placeholder="Add a team"
                                                ref={input => this.teamInput = input} 
                                                onFocus = {() => this.teamInput.value = ""}
                                                onKeyDown={this.handleKeyDown}/>
                                            </Grid>    
                                            <Grid item sm={4}>
                                                <Button variant="outlined" color="secondary" className="Save-Team"
                                                onClick={() => this.saveTeam()}>Add</Button>
                                            </Grid>    
                                        </div>
                                    </Grid>
                                    <ul>
                                        { this.state.teamList.map(team => <li key={team.id}>{team.name}</li>) }
                                    </ul>
                                    <Button variant="outlined" color="secondary" className="Generate-sides" onClick={() => this.generateSides()}
                                > Assign Sides</Button>
                                </div>
                    </Grid>

                    <Grid item md={4} sm={12}>
                           
                    </Grid>  

                    <Grid item md={4} sm={12}>
                          
                    </Grid>
                </div>     
            </React.Fragment>
        )  
    }
}

export default SideGenerator;