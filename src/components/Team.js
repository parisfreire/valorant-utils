import React from 'react';

const Team = (props) => {
        return (
            <React.Fragment>
                <div className="Team">
                    <h2>Team {props.number}</h2>
                    <ul>
                        {props.players.map(player => <li key={player.id}>{player.name}</li>) }
                    </ul>
                </div>
            </React.Fragment>        
        )    
}

export default Team;