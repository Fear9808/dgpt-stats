import React, {useEffect, useState} from 'react';
import DisplayAllPlayerData from '../components/DisplayAllPlayerData';
import MaleFemalePickerComponent from '../components/MaleFemalePickerComponent';
import PlayerPickerComponent from '../components/PlayerPickerComponent';
import YearPickerComponent from '../components/YearPickerComponent';
import BarStatComponent from '../components/BarStatComponent';
import NumberStatComponent from '../components/NumberStatComponent';

import styles from '../style/HomePageStyle.module.css'
import * as Default from '../style/DefaultValues';
import layoutStyle from '../style/LayoutStyle.module.css'
import StrokesComponent from '../components/StrokesComponent';

const Home = () => {
    const [tourData, setData] = useState({});
    const [tourYear, setTourYear] = useState('2022')
    const [tourMaleFemale, setTourMaleFemale] = useState('MPO')
    const [player, setPlayer] = useState('');
    const [players, setPlayers] = useState([])
    const [playerData, setPlayerData] = useState({});

    const handlePlayerSelect = (selectedPlayer) =>{
        // Passed state from PlayerPickerComponent
        if(selectedPlayer !== player){
            console.log(selectedPlayer);
            setPlayer(selectedPlayer);
        }else if (selectedPlayer === player){
            getPlayerDataByName(player);
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
    const handleYearSelect = (selected) =>{
        // Passed state from PlayerPickerComponent
        if(selected){
            setTourYear(selected);
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
    },[player, tourYear])

    useEffect(()=>{
        getTourDataByName(tourYear, tourMaleFemale)
    },[tourYear, tourMaleFemale])

    const getTourDataByName = (tourYear, mpoFpo) => {
        fetch(`./data/${tourYear}_DGPT_Stats_${mpoFpo}.json`)
        .then((response) => response.json())
        .then((responseJson) => {
            //console.log(responseJson.players[0]);
            setData(responseJson)
            setPlayers(responseJson.players)
            //console.log(responseJson.players[0].playerName);
            //setPlayer(responseJson.players[0].playerName)
        })
        .catch((error) => {
            //console.error(error);
        });
    }


    const displayPlayerData = (playerData) => {
        
    }

    {/* <div className={styles.background}>
            <h1>Home Page</h1>
            <PlayerPickerComponent data={players} player={player} handlePlayerSelect={handlePlayerSelect}/>
            <YearPickerComponent handleYearSelect={handleYearSelect}/>
            <MaleFemalePickerComponent mpo_fpo={tourMaleFemale} handleMpoFpoSelect={handleMpoFpoSelect}/>
            <StrokesComponent statName={'C1 Putting '} stat={'circle1Putting'} playerData={playerData} averageData={tourData.averagePlayer}/>
            <BarStatComponent statName={'C1 Putting '} stat={'circle1Putting'} playerData={playerData} averageData={tourData.averagePlayer}/>
            <NumberStatComponent statName={'OB'} stat={'ob'} playerData={playerData} averageData={tourData.averagePlayer} goodDiff={'-'}/>
            <DisplayAllPlayerData playerData={playerData}/>
        </div> */}

    return (
        <div className={layoutStyle.background}>
            <div className={layoutStyle.homePageContent}>
                <div className={layoutStyle.homePageGridRows}>
                    <div className={layoutStyle.homePageGridColumnHeader}>
                        <div className={layoutStyle.nameGrid}>
                            <PlayerPickerComponent data={players} player={player} handlePlayerSelect={handlePlayerSelect}/>
                        </div>
                        <div className={layoutStyle.infoGrid}>
                            <YearPickerComponent handleYearSelect={handleYearSelect}/>
                            <MaleFemalePickerComponent mpo_fpo={tourMaleFemale} handleMpoFpoSelect={handleMpoFpoSelect}/>
                        </div>
                    </div>
                    <div className={layoutStyle.homePageGridColumnStrokes}>
                        <div className={layoutStyle.strokesBox}>
                            <StrokesComponent playerData={playerData} averageData={tourData.averagePlayer}/>
                        </div>
                        <div className={layoutStyle.strokeStatBox}>
                            <BarStatComponent statName={'Birdie'} stat={'birdie'} nameColor={Default.BIRDIE_COLOR} score={true} playerData={playerData} averageData={tourData.averagePlayer}/>
                        </div>
                        <div className={layoutStyle.strokeStatBox}>
                            <BarStatComponent statName={'Par'} stat={'par'} nameColor={Default.PAR_COLOR} score={true} playerData={playerData} averageData={tourData.averagePlayer}/>
                        </div>
                        <div className={layoutStyle.strokeStatBox}>
                            <BarStatComponent statName={'Bogey'} stat={'bogey'} nameColor={Default.BOGEY_COLOR} score={true} playerData={playerData} averageData={tourData.averagePlayer}/>
                        </div>
                    </div>
                    <div className={layoutStyle.homePageGridColumnStats}>
                        <div className={layoutStyle.playerMapBox}>
                        </div>
                        <div className={layoutStyle.statsBox}>
                            <div className={layoutStyle.statsBoxRow}>
                                <div className={layoutStyle.strokeStatBox}>
                                    <BarStatComponent statName={'C1 Putting'} stat={'circle1Putting'} playerData={playerData} averageData={tourData.averagePlayer}/>
                                </div>
                                <div className={layoutStyle.strokeStatBox}>
                                    <BarStatComponent statName={'C2 Putting'} stat={'circle2Putting'} playerData={playerData} averageData={tourData.averagePlayer}/>
                                </div>
                                <div className={layoutStyle.strokeStatBox}>
                                    <BarStatComponent statName={'Fairway Hits'} stat={'fairwayHits'} playerData={playerData} averageData={tourData.averagePlayer}/>
                                </div>
                            </div>
                            <div className={layoutStyle.statsBoxRow}>
                                <div className={layoutStyle.strokeStatBox}>
                                    <BarStatComponent statName={'C1 Reg'} stat={'circle1Reg'} playerData={playerData} averageData={tourData.averagePlayer}/>
                                </div>
                                <div className={layoutStyle.strokeStatBox}>
                                    <BarStatComponent statName={'C2 Reg'} stat={'circle2Reg'} playerData={playerData} averageData={tourData.averagePlayer}/>
                                </div>
                                <div className={layoutStyle.strokeStatBox}>
                                    <BarStatComponent statName={'Scramble'} stat={'scramble'} playerData={playerData} averageData={tourData.averagePlayer}/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

    
};

export default Home;