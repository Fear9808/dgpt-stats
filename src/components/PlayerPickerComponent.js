import React, {useEffect, useState} from 'react';
import styles from '../style/PlayerPickerSelectStyle.module.css';

import utils from '../utils.js';

const PlayerPickerComponent = props => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedplayer] = useState('');

    useEffect(() => {
        if(props.data){
            setPlayers(utils.getPlayerNamesFromCompetition(props.data));
        }
    },[props.data]);

    useEffect(() => {
        if (players[0]){
            if(players.includes(selectedPlayer)){
                onSelectPlayer(selectedPlayer);
            }else{
                onSelectPlayer(players[0]? players[0] : '');
            }
        }
        
    },[players]);

    let playerOptions = players.map((player) =>{
        return (
            <option key={player} value={player}>{player}</option>
        )
    }, this);

    const onSelectPlayer = (selectedPlayer) =>{
        //console.log(selectedPlayer);
        props.handlePlayerSelect(selectedPlayer);
        setSelectedplayer(selectedPlayer);
    }

    return (
        <div>
            <select className={styles.themePlayerPicker} id="players" name="players" value={selectedPlayer? selectedPlayer : players[0]} onChange={e => onSelectPlayer(e.target.value)}>
                {playerOptions}
            </select>
            {/* {console.log(props? props: "no data loaded...")}
            {console.log(players)} */}
        </div>
    );
};

export default PlayerPickerComponent;