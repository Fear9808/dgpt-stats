import React, {useEffect, useState} from 'react';
import styles from '../style/StatComponentStyle.module.css'
import * as Default from '../style/DefaultValues';
import ScaleComponent from './ScaleComponent';
import BarStatBar from './BarStatBar';
import utils from '../utils.js';

import NameColorComponent from './NameColorComponent';

const BarStatComponent = props => {
    const [playerName, setPlayerName] = useState('Name');
    const averageName = 'Average';
    const [playerData, setPlayerData] = useState(0);
    const [averageData, setAverageData] = useState(0);
    const [nameColor, setNameColor] = useState(Default.DEFAULT_CARD_NAME_COLOR);

    useEffect(() => {
        if(props.playerData.stats){
            setPlayerData(props.score? props.playerData.score[props.stat] : utils.roundToWholeNumber(props.playerData.stats[props.stat]));
            setAverageData(props.score? props.averageData.score[props.stat] : utils.roundToWholeNumber(props.averageData.stats[props.stat]));
            setPlayerName(props.playerData.playerName.split(' ')[0]);
            //setAverageData(props.averageData);
        }
        if(props.nameColor){
            setNameColor(props.nameColor);
        }
    },[props]);

    const createScale = (topVal, incrementVal) => {
        let scaleComponents = [];
        for(let value = 0; value <= topVal; value+=incrementVal){
            scaleComponents.push(
                <ScaleComponent text={value}/>
            )
        }
        return scaleComponents.reverse();
    }

    return (
        <div className={styles.componentSize}>
            <div className={styles.background}>
                <div className={styles.contentBox}>
                    <div>
                        <h2 className={styles.header} style={{color: nameColor}}>{props.statName}</h2>
                    </div>
                    <div>
                        <div className={styles.fourColumns}>
                            <div className={styles.block100}>
                                <div></div>
                                {createScale(100, 20)}
                                <div></div>
                                
                            </div>
                            <div className={styles.flex100}>
                                <BarStatBar dataValue={playerData? playerData : 0} barColor={Default.PLAYER_COLOR}/>
                            </div>
                            <div className={styles.flex100}>
                                <BarStatBar dataValue={averageData? averageData : 0} barColor={Default.AVERAGE_COLOR}/>
                            </div>
                            <div className={styles.flex100}></div>
                        </div>
                        
                    </div>
                    <div>
                        <div className={styles.twoColumns}>
                            <NameColorComponent text={playerName} boxColor={Default.PLAYER_COLOR}/>
                            <NameColorComponent text={averageName} boxColor={Default.AVERAGE_COLOR}/>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default BarStatComponent;