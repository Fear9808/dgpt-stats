import React, {useEffect, useState} from 'react';
import DisplayAllPlayerData from '../components/DisplayAllPlayerData';
import MaleFemalePickerComponent from '../components/MaleFemalePickerComponent';
import PlayerPickerComponent from '../components/PlayerPickerComponent';

const Home = () => {
    const [tourData, setData] = useState({});
    const [tourYear, setTourYear] = useState('2022')
    const [tourMaleFemale, setTourMaleFemale] = useState('MPO')
    const [player, setPlayer] = useState('');
    const [players, setPlayers] = useState([])
    const [playerData, setPlayerData] = useState({});

    const handlePlayerSelect = (selectedPlayer) =>{
        // Passed state from PlayerPickerComponent
        if(selectedPlayer){
            setPlayer(selectedPlayer);
        }else{
            alert("Could not get selected player")
        }
    };
    const handleMpoFpoSelect = (selected) =>{
        // Passed state from PlayerPickerComponent
        if(selected){
            setTourMaleFemale(selected);
        }else{
            alert("Could not get selected value")
        }
    };

    const getPlayerDataByName = (playerName) => {
        if(players && player){
            console.log(players);
            console.log(player);
            console.log(playerName);
            let found = players.find((object) =>{
                return object.playerName === playerName;
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
        /* fetch('../api/testFunction')
        .then((response) => response.json())
        .then((responseJson) => {
            setData(responseJson)
        })
        .catch((error) => {
            console.error(error);
        }); */

        getTourDataByName(tourYear, tourMaleFemale);
    },[]);

    // Runs when player state updates
    useEffect(()=>{
        getPlayerDataByName(player)
    },[player])

    useEffect(()=>{
        getTourDataByName(tourYear, tourMaleFemale)
    },[tourYear, tourMaleFemale])

    const getTourDataByName = (tourYear, mpoFpo) => {
        fetch(`./data/${tourYear}_DGPT_Stats_${mpoFpo}.json`)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson.players[0]);
            setData(responseJson)
            setPlayers(responseJson.players)
            console.log(responseJson.players[0].playerName);
            //setPlayer(responseJson.players[0].playerName)
        })
        .catch((error) => {
            //console.error(error);
        });
    }


    const displayPlayerData = (playerData) => {
        
    }

    return (
        <div>
            <h1>Home Page</h1>
            <PlayerPickerComponent data={players} player={player} handlePlayerSelect={handlePlayerSelect}/>
            <MaleFemalePickerComponent mpo_fpo={tourMaleFemale} handleMpoFpoSelect={handleMpoFpoSelect}/>
            <DisplayAllPlayerData playerData={playerData}/>
        </div>
    );

    
};

export default Home;