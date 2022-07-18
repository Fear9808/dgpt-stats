import React, {useEffect, useState} from 'react';
import MaleFemalePickerComponent from '../components/MaleFemalePickerComponent';
import PlayerPickerComponent from '../components/PlayerPickerComponent';
import YearPickerComponent from '../components/YearPickerComponent';
import BarStatComponent from '../components/BarStatComponent';
import NumberStatComponent from '../components/NumberStatComponent';
import RadarChartComponent from '../components/RadarChartComponent';

import styles from '../style/HomePageStyle.module.css';
import * as Default from '../style/DefaultValues';
import layoutStyle from '../style/LayoutStyle.module.css';
import StrokesComponent from '../components/StrokesComponent';
import utils from '../utils';

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

    return (
        <div className={layoutStyle.background}>
            <div className={layoutStyle.homePageContent}>
                <div className={layoutStyle.homePageGridRows}>
                    <div className={layoutStyle.homePageGridRowHeader}>
                        <div className={layoutStyle.headerDisplay}>
                            <h1 className={layoutStyle.header}>{'DGPT Average'}</h1>
                            <div className={layoutStyle.infoGrid}>
                                <div className={layoutStyle.statPickers}>
                                    <YearPickerComponent handleYearSelect={handleYearSelect}/>
                                    <MaleFemalePickerComponent mpo_fpo={tourMaleFemale} handleMpoFpoSelect={handleMpoFpoSelect}/>
                                </div>
                            </div>
                        </div>
                        <div className={layoutStyle.nameGrid}>
                            <PlayerPickerComponent data={players} player={player} handlePlayerSelect={handlePlayerSelect}/>
                            <h2 className={layoutStyle.positionDisplay} style={{color: Default.PLAYER_COLOR}}>{'# ' + playerData.playerPosition}</h2>
                        </div>
                        
                    </div>
                    <div className={layoutStyle.sectionBackground}>
                        <div className={layoutStyle.homePageGridColumnStrokes}>
                            <div className={layoutStyle.strokesBox}>
                                <StrokesComponent statName={'Strokes'} playerData={playerData} averageData={tourData.averagePlayer}/>
                            </div>
                            <div className={layoutStyle.strokeStatBox}>
                                <BarStatComponent statName={'Birdie'} stat={'birdie'} nameColor={Default.BIRDIE_COLOR} score={true} playerData={playerData} averageData={tourData.averagePlayer}/>
                            </div>
                            <div className={layoutStyle.strokeStatBox}>
                                <BarStatComponent statName={'Par'} stat={'par'} nameColor={Default.PAR_COLOR} score={true} playerData={playerData} averageData={tourData.averagePlayer}/>
                            </div>
                            <div className={layoutStyle.strokeStatBox}>
                                <NumberStatComponent statName={'Bogey'} stat={'bogey'} goodDiff={'-'}  nameColor={Default.BOGEY_COLOR} score={true} playerData={playerData} averageData={tourData.averagePlayer}/>
                            </div>
                            <div className={layoutStyle.strokeStatBox}>
                                <NumberStatComponent statName={'Double Bogey'} stat={'doubleBogey'} goodDiff={'-'}  nameColor={Default.DOUBLE_BOGEY_COLOR} score={true} playerData={playerData} averageData={tourData.averagePlayer}/>
                            </div>
                        </div>
                    </div>
                    <div className={layoutStyle.homePageGridColumnStats}>
                        <div className={layoutStyle.sectionBackgroundRadar}>
                            <div className={layoutStyle.playerMapBox}>
                                <RadarChartComponent playerData={playerData? playerData : {}} averageData={tourData.averagePlayer? tourData.averagePlayer : {}}/>
                            </div>
                        </div>
                        <div className={layoutStyle.sectionBackground}>
                            <div className={layoutStyle.statsBox}>
                                <div className={layoutStyle.statsBoxRow}>
                                    <div className={layoutStyle.strokeStatBox}>
                                        <BarStatComponent statName={'C1 Putting'} stat={'circle1Putting'} playerData={playerData} averageData={tourData.averagePlayer}/>
                                    </div>
                                    <div className={layoutStyle.strokeStatBox}>
                                        <BarStatComponent statName={'C1 Reg'} stat={'circle1Reg'} playerData={playerData} averageData={tourData.averagePlayer}/>
                                    </div>
                                    <div className={layoutStyle.strokeStatBox}>
                                        <BarStatComponent statName={'C2 Putting'} stat={'circle2Putting'} playerData={playerData} averageData={tourData.averagePlayer}/>
                                    </div>
                                </div>
                                <div className={layoutStyle.statsBoxRow}>
                                    
                                    <div className={layoutStyle.strokeStatBox}>
                                        <BarStatComponent statName={'C2 Reg'} stat={'circle2Reg'} playerData={playerData} averageData={tourData.averagePlayer}/>
                                    </div>
                                    <div className={layoutStyle.strokeStatBox}>
                                        <NumberStatComponent statName={'OB'} stat={'ob'} goodDiff={'-'}  playerData={playerData} averageData={tourData.averagePlayer}/>
                                    </div>
                                    <div className={layoutStyle.strokeStatBox}>
                                        <NumberStatComponent statName={'Parked'} stat={'parked'} goodDiff={'+'} playerData={playerData} averageData={tourData.averagePlayer}/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
            <footer>
                <p>{`Updated: ${tourData.updatedDate? utils.getFirstInString(tourData.updatedDate) : ''}`}</p>
                <p>Contact: felix.arnestrand@gmail.com</p>
            </footer>
        </div>
        
    );

    
};

export default Home;