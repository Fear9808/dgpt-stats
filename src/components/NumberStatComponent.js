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
    const [nameColor, setNameColor] = useState(Default.DEFAULT_CARD_NAME_COLOR);


    useEffect(() => {
        if(props.playerData.stats){
            setPlayerData(props.score? Math.round(props.playerData.score[props.stat] *100)/100 : Math.round(props.playerData.stats[props.stat] *100)/100);
            setAverageData(props.score? Math.round(props.averageData.score[props.stat] *100)/100 : Math.round(props.averageData.stats[props.stat] *100)/100);
            setPlayerName(props.playerData.playerName.split(' ')[0]);
            setGoodDiff(props.goodDiff);
        }
        if(props.nameColor){
            setNameColor(props.nameColor);
        }
    },[props]);

    useEffect(() => {
        setPlayerDataDiff(Math.round((playerData - averageData)*100)/100);
    },[playerData]);

    const diffColor = () =>{
        if (playerDataDiff >= 0 && goodDiff === '+'){
            return Default.BIRDIE_COLOR
        }else if (playerDataDiff <= 0 && goodDiff === '-'){
            return Default.BIRDIE_COLOR
        }else{
            return Default.DOUBLE_BOGEY_COLOR
        }
    }

    return (
        <div className={styles.componentSize}>
            <div className={styles.background}>
                <div className={styles.contentBoxNumbers}>
                    <div>
                        <h2 style={{color: nameColor}}>{props.statName}</h2>
                    </div>
                    <div className={styles.numberStatThreeRows}>
                        <p className={styles.numberStatText} style={{color: Default.PLAYER_COLOR}}>{playerData}</p>
                        <p style={{color: goodDiff? diffColor() : 'green', fontSize: '100%', fontWeight: 'normal', margin: 'auto'}}>
                            <b>{playerDataDiff >= 0? '(+ ' + Math.abs(playerDataDiff) + ')': '(- ' + Math.abs(playerDataDiff) + ')'}</b>
                        </p>
                        <p className={styles.playerName} style={{color: Default.PLAYER_COLOR}}>{playerName}</p>
                    </div>
                    <div className={styles.numberStatTwoRows}>
                        <p style={{fontSize: '200%', color: Default.AVERAGE_COLOR, fontWeight: 'bolder', margin: 'auto'}}>{averageData}</p>
                        <p className={styles.playerName} style={{color: Default.AVERAGE_COLOR}}>{averageName}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberStatComponent;