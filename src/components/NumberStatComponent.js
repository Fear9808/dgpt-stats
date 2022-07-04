import React, {useEffect, useState} from 'react';
import styles from '../style/StatComponentStyle.module.css'
import * as Default from '../style/DefaultValues';
//import ScaleComponent from './ScaleComponent';
import BarStatBar from './BarStatBar';

import utils from '../utils.js'

const NumberStatComponent = props => {
    const [playerName, setPlayerName] = useState('Name');
    const averageName = 'Average';
    const [playerData, setPlayerData] = useState(0);
    const [averageData, setAverageData] = useState(0);
    const [playerDataDiff, setPlayerDataDiff] = useState(0);
    const [goodDiff, setGoodDiff] = useState('+');


    useEffect(() => {
        if(props.playerData.stats){
            setPlayerData(Math.round(props.playerData.stats[props.stat] *100)/100);
            setAverageData(Math.round(props.averageData.stats[props.stat] *100)/100);
            setPlayerName(props.playerData.playerName.split(' ')[0]);
            setGoodDiff(props.goodDiff);
        }
    },[props]);

    useEffect(() => {
        setPlayerDataDiff(Math.round((playerData - averageData)*100)/100);
    },[playerData]);

    const diffColor = () =>{
        if (playerDataDiff >= 0 && goodDiff === '+'){
            return '#48ff05'
        }else if (playerDataDiff <= 0 && goodDiff === '-'){
            return '#48ff05'
        }else{
            return '#ff0000'
        }
    }

    return (
        <div className={styles.componentSize}>
            <div className={styles.background}>
                <div className={styles.contentBoxNumbers}>
                    <div>
                        <h2>{props.statName}</h2>
                    </div>
                    <div className={styles.numberStatThreeRows}>
                        <p style={{fontSize: '350%', color: Default.PLAYER_COLOR, fontWeight: 'bolder', margin: 'auto'}}>{playerData+'%'}</p>
                        <p style={{color: goodDiff? diffColor() : 'green', fontSize: '100%', fontWeight: 'normal', margin: 'auto'}}>
                            {playerDataDiff >= 0? '(+ ' + Math.abs(playerDataDiff) + ')': '(- ' + Math.abs(playerDataDiff) + ')'}
                        </p>
                        <p className={styles.playerName} style={{color: Default.PLAYER_COLOR}}>{playerName}</p>
                    </div>
                    <div className={styles.numberStatTwoRows}>
                        <p style={{fontSize: '200%', color: Default.AVERAGE_COLOR, fontWeight: 'bolder', margin: 'auto'}}>{averageData+'%'}</p>
                        <p className={styles.playerName} style={{color: Default.AVERAGE_COLOR}}>{averageName}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberStatComponent;