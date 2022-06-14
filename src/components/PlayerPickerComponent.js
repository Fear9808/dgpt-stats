import React, {useEffect, useState} from 'react';

import utils from '../utils.js'

const PlayerPickerComponent = props => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedplayer] = useState('');
    let isFirstRender = true;

    useEffect(() => {
        if(props.data){
            setPlayers(utils.getPlayerNamesFromCompetition(props.data));

            // loading the first player in the players list to display the data. This fix is a bit janky but it works.
            if(isFirstRender && players[0]){
                onSelectPlayer(players[0]? players[0] : '');
                isFirstRender = false;
            }
        }
    },[props.data]);

   /*  useEffect(() => {
        const initialPlayer = players? players[0] : '';
        onSelectPlayer(initialPlayer);
    }, []); */

    let playerOptions = players.map((player) =>{
        return (
            <option key={player} value={player}>{player}</option>
        )
    }, this);

    const onSelectPlayer = (selectedPlayer) =>{
        //setSelectedplayer(selectedPlayer);
        props.handlePlayerSelect(selectedPlayer);
        setSelectedplayer(selectedPlayer);
    }

    return (
        <div>
            <h1>Player Picker</h1>
            <select id="players" name="players" onChange={e => onSelectPlayer(e.target.value)}>
                {playerOptions}
            </select>
            {/* {console.log(props? props: "no data loaded...")}
            {console.log(players)} */}
        </div>
    );
};

export default PlayerPickerComponent;