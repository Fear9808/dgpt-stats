import React, {useEffect, useState} from 'react';
import styles from '../style/BarStatComponentStyle.module.css'
import ScaleComponent from './ScaleComponent';

import utils from '../utils.js'

const PlayerPickerComponent = props => {
    const [playerName, setPlayerName] = useState('Name');
    const averageName = 'Average';
    const [playerData, setPlayerData] = useState(0);
    const [averageData, setAverageData] = useState(0);

    useEffect(() => {
        if(props.playerData.stats){
            setPlayerData(props.playerData.stats[props.stat]);
            setAverageData(props.averageData.stats[props.stat]);
            setPlayerName(props.playerData.playerName);
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
                                <div style={{height: playerData+'%', width: '100%', backgroundColor: '#eb7134', display: 'inline-block', alignSelf: 'flex-end', zIndex: '0'}}>
                                    <p className={styles.statText}>{playerData}</p>
                                </div>
                            </div>
                            <div className={styles.flex100}>
                                <div style={{height: averageData+'%', width: '100%', backgroundColor: '#ebb134', display: 'inline-block', alignSelf: 'flex-end', zIndex: '0'}}>
                                    <p className={styles.statText}>{averageData}</p>
                                </div>
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

export default PlayerPickerComponent;