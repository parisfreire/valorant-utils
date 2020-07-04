import React from 'react';

const Side = (props) => {
        return (
            <React.Fragment>
                <div className="Side">
                    <h2>{props.sideRole} Picker</h2>
                    <ul>
                        {props.teams.map(team => <li key={team.id}>{team.name}</li>) }
                    </ul>
                </div>
            </React.Fragment>        
        )    
}

export default Side;