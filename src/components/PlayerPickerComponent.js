import React, {useEffect, useState} from 'react';

const PlayerPickerComponent = props => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedplayer] = useState('');

    useEffect(() => {
        var players = [];
        if(props.data){
            for (var i = 0; i < props.data.length; i++){
                players.push(props.data[i].name)
            }
            setPlayers(players);
        }
        
    },[props.data, props]);

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
            {console.log(props? props: "no data loaded...")}
            {console.log(players)}
        </div>
    );
};

export default PlayerPickerComponent;