import React, {useEffect, useState} from 'react';
import DisplayAllPlayerData from '../components/DisplayAllPlayerData';
import PlayerPickerComponent from '../components/PlayerPickerComponent';

const Home = () => {
    const [data, setData] = useState([]);
    const [player, setPlayer] = useState('');
    const [playerData, setPlayerData] = useState({});

    const handlePlayerSelect = (selectedPlayer) =>{
        // Passed state from PlayerPickerComponent
        if(selectedPlayer){
            setPlayer(selectedPlayer);
        }else{
            alert("Could not get selected player")
        }
    };

    const getPlayerDataByName = (player) => {
        if(data && player){
            let found = data.find((object) =>{
                return object.name === player;
            })
            if(found){
                setPlayerData(found)
            }else{
                alert('Player data not found')
            }
        }
    }

    // Runs on first render
    useEffect(() => {
        fetch('../api/testFunction')
        .then((response) => response.json())
        .then((responseJson) => {
            setData(responseJson)
        })
        .catch((error) => {
            console.error(error);
        });
    },[]);

    // Runs when player state updates
    useEffect(()=>{
        getPlayerDataByName(player)
    },[player])



    const displayPlayerData = (playerData) => {
        
    }

    return (
        <div>
            <h1>Home Page</h1>
            <PlayerPickerComponent data={data} handlePlayerSelect={handlePlayerSelect}/>
            <DisplayAllPlayerData playerData={playerData}/>
        </div>
    );

    
};

export default Home;