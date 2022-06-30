import React, {useEffect, useState} from 'react';
import styles from '../style/StatComponentStyle.module.css'
import ScaleComponent from './ScaleComponent';
import BarStatBar from './BarStatBar';

import utils from '../utils.js'

const BarStatComponent = props => {
    const [playerName, setPlayerName] = useState('Name');
    const averageName = 'Average';
    const [playerData, setPlayerData] = useState(0);
    const [averageData, setAverageData] = useState(0);

    useEffect(() => {
        if(props.playerData.stats){
            setPlayerData(props.playerData.stats[props.stat]);
            setAverageData(props.averageData.stats[props.stat]);
            setPlayerName(props.playerData.playerName.split(' ')[0]);
            //setAverageData(props.averageData);
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
                        <h2>{props.statName}</h2>
                    </div>
                    <div>
                        <div className={styles.fourColumns}>
                            <div className={styles.block100}>
                                <div></div>
                                {createScale(100, 20)}
                                <div></div>
                                
                            </div>
                            <div className={styles.flex100}>
                                <BarStatBar dataValue={playerData? playerData : 0} barColor={'#eb7134'}/>
                            </div>
                            <div className={styles.flex100}>
                                <BarStatBar dataValue={averageData? averageData : 0} barColor={'#ebb134'}/>
                            </div>
                            <div className={styles.flex100}></div>
                        </div>
                        
                    </div>
                    <div>
                        <div className={styles.fourColumns}>
                            <div></div>
                            <p className={styles.playerName}>{playerName}</p>
                            <p className={styles.playerName}>{averageName}</p>
                            <div></div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default BarStatComponent;